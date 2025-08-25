import React, { PureComponent } from 'react';
import {
  StatusBar,
  View,
  PermissionsAndroid,
  Platform,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import SafeArea from '../../components/CustomSafeArea';
import { colors } from '../../constants/colors';
import Spacer from '../../components/spacer';
import Header from '../../components/header';
import CustomTextInput from '../../components/customTextInput';
import Cards from '../../components/cards';
import { selectContactPhone } from 'react-native-select-contact';
import { connect } from 'react-redux';
import {
  setActiveCategory,
  setFilteredSpeed,
  setFilteredValue,
  setIsFiltered,
  setIsFilteredClose,
  setNumber,
  setSearch,
} from '../../redux/actions/action';
import CustomText from '../../components/customText';
import { styles } from './styles';

/**
 * @typedef {Object} RechargeProps
 * @property {any} navigation - React Navigation navigation object.
 * @property {any} route - React Navigation route object.
 * @property {string|number} number - Current input number from Redux state.
 * @property {string} search - Search input text from Redux state.
 * @property {Array} data - Recharge plans data from Redux state.
 * @property {Array} [filteredData] - Filtered plans data.
 * @property {string|number} [filteredSpeed] - Filtered speed selection.
 * @property {boolean} isFilter - Whether filter is enabled.
 * @property {string} [activeCategory] - Selected active category.
 * @property {number} [isLastRecharged] - Index or flag for last recharged item.
 * @property {(value: string) => void} setNumber - Redux action to set number.
 * @property {(value: string) => void} setSearch - Redux action to set search text.
 * @property {(value: any) => void} setFilteredValue - Redux action to set filtered value.
 * @property {(speed: string) => void} setFilteredSpeed - Redux action to set filtered speed.
 * @property {() => void} setIsFiltered - Redux action to enable filter.
 * @property {() => void} setIsFilteredClose - Redux action to disable filter.
 * @property {(cat: string) => void} setActiveCategory - Redux action to set active category.
 */

/** @extends {PureComponent<RechargeProps>} */
class Recharge extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
    this.tabsFlatListRef = React.createRef();
    this.cardsRef = React.createRef();
  }

  handleNumberChange = (text) => {
    this.props.setNumber(text);
  };

  handleImagePress = async () => {
    if (Platform.OS === 'android') {
      const req = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
      );
      if (
        req === PermissionsAndroid.RESULTS.DENIED ||
        req === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
      ) {
        alert('Contacts permission denied');
        return;
      }
    }

    try {
      const selection = await selectContactPhone();
      if (!selection) return;
      const { selectedPhone } = selection;
      const number = selectedPhone.number
        .replace(/\s+/g, '')
        .replace(/^\+91/, '');
      this.props.setNumber(number);
    } catch (error) {
      console.error('Failed to pick contact', error);
    }
  };
  componentDidMount() {
  this.props.setSearch('');
  this.props.setFilteredValue(undefined);
  this.props.setFilteredSpeed('');
  this.props.setIsFilteredClose();
  this.props.setActiveCategory('');
}


  handleSearchFilter = (text) => {
    const { data } = this.props;
    const lowerCase = text.toLowerCase();

    const filteredData = data?.filter((item) => {
      const price = item?.price?.toString()?.toLowerCase();
      const speed = item?.speed?.toString()?.toLowerCase();
      const validity = item?.validity?.toString().toLowerCase();

      return (
        price.includes(lowerCase) ||
        speed.includes(lowerCase) ||
        validity.includes(lowerCase)
      );
    });

    this.props.setSearch(text);
    this.props.setFilteredValue(filteredData);
  };

  handleSelectedSpeed = (speed) => {
    const { data } = this.props;
    const lowerCase = speed.toLowerCase();
    this.props.setFilteredSpeed(speed);
    const filterBySpeed = data.filter((item) => {
      const speed = item?.speed.toString()?.toLowerCase();
      return speed.includes(lowerCase);
    });
    this.props.setFilteredSpeed(speed);
    this.props.setFilteredValue(filterBySpeed);
  };

  handleFilterClose = () => {
    this.props.setIsFilteredClose();
  };

  handleFilter = () => {
    this.props.setSearch('');
    this.props.setFilteredValue(undefined);
    this.props.setIsFiltered(true);
  };

 handleTabs = (category) => {
    this.props.setActiveCategory(category);
    if (this.cardsRef.current) {
        this.cardsRef.current.scrollToSection(category);
    }
};

  handleRefresh = () => {
    this.setState({ refreshing: true });
    this.props.setActiveCategory(this.props.activeCategory);
    this.props.setFilteredValue(undefined);

    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 1000);
  };

  handleActiveTabChange = (activeTab) => {
      this.props.setActiveCategory(activeTab);
      const sections = Object.values(
        (this.props.data || []).reduce((acc, item) => {
          if (!acc[item.category]) {
            acc[item.category] = { title: item.category, data: [] };
          }
          acc[item.category].data.push(item);
          return acc;
        }, {})
      );
      const index = sections.findIndex((s) => s.title === activeTab);
      if (index !== -1 && this.tabsFlatListRef.current) {
        this.tabsFlatListRef.current.scrollToIndex({
          index,
          animated: true,
          viewPosition: 0.5,
        });
      }
  };

  handleCardPress = (price) => {
    const { setSearch, setFilteredValue, setFilteredSpeed, setIsFilteredClose, setActiveCategory } = this.props;
    setSearch('');
    setFilteredValue(undefined);
    setFilteredSpeed('');
    setIsFilteredClose();
    setActiveCategory('');
    this.props.navigation.navigate('Payment', { price });
  };

  render() {
    const { width } = Dimensions.get('window');
    const { number, search, data, filteredData } = this.props;

    const sections = Object.values(
      (data || []).reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = { title: item.category, data: [] };
        }
        acc[item.category].data.push(item);
        return acc;
      }, {})
    );

    const filteredSpeed = data.filter(
      (item, index, self) =>
        index === self.findIndex((obj) => obj.speed === item.speed)
    );

    return (
      <SafeArea>
        <StatusBar barStyle="dark-content" backgroundColor={colors.black} />
        <View style={styles.rootView}>
          <Spacer height={20} />
          <Header
            leftIcon={'arrow'}
            rightIcon={'question'}
            title={'recharge'}
            fontSize={20}
            fontWeight="700"
          />
          <Spacer height={20} />
          <View style={styles.topInputWrapper}>
            <CustomTextInput
              label={'enter airtel xstream number id or mobile number'}
              image={'contact-book'}
              onImagePress={this.handleImagePress}
              data={data}
              value={number}
              onChangeText={this.handleNumberChange}
            />
            <Spacer height={20} />
          </View>
          <Spacer height={10} />

          {number && (
            <View style={styles.bottomContainer}>
              <Spacer height={15} />
              <View style={styles.swipeIndicator} />
              <Spacer height={15} />
              <CustomTextInput
                handleSearch={this.handleSearchFilter}
                handleFilter={this.handleFilter}
                handleFilterClose={this.handleFilterClose}
                isFilter={this.props.isFilter}
                onPress={this.handleSelectedSpeed}
                selectedSpeed={this.props.filteredSpeed}
                FlatListData={filteredSpeed}
                onChangeText={this.handleSearchFilter}
                value={search}
                data={data}
                type={2}
              />
              <Spacer height={15} />
              <View>
                {!this.props.isFilter && (
                  <FlatList
                    ref={this.tabsFlatListRef}
                    horizontal
                    data={sections}
                    keyExtractor={(item, index) => item.title + index}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.tabsContentContainer}
                    renderItem={({ item }) => (
                      <View style={[{ width: width / 3 }]}>
                        <TouchableOpacity
                          style={styles.tabPressable}
                          onPress={() => this.handleTabs(item.title)}
                        >
                          <CustomText
                            textAlign="center"
                            fontWeight="600"
                            color={colors.gray}
                            text={item?.title}
                          />
                          <Spacer height={15} />
                          {item.title == this.props.activeCategory && (
                            <View style={styles.activeTabIndicator} />
                          )}
                        </TouchableOpacity>
                      </View>
                    )}
                  />
                )}
              </View>
              <Spacer height={15} />
              <Cards
                ref={this.cardsRef}
                isLastRecharged={data[this.props.isLastRecharged]}
                onPress={this.handleCardPress}
                handleActiveTabChange={this.handleActiveTabChange}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
                originData={data}
                data={filteredData ?? data}
                type={1}
              />
            </View>
          )}
        </View>
      </SafeArea>
    );
  }
}



const mapStateToProps = (state) => ({
  number: state.reducer.number,
  search: state.reducer.search,
  data: state.reducer.data,
  filteredData: state.reducer.filteredData,
  filteredSpeed: state.reducer.filteredSpeed,
  isFilter: state.reducer.isFilter,
  activeCategory: state.reducer.activeCategory,
  isLastRecharged: state.reducer.isLastRecharged,
});

const mapDispatchToProps = {
  setNumber,
  setSearch,
  setFilteredValue,
  setFilteredSpeed,
  setIsFiltered,
  setIsFilteredClose,
  setActiveCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recharge);
