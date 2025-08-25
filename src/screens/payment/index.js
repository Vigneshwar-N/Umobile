import React, { Component } from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import SafeArea from '../../components/CustomSafeArea';
import Spacer from '../../components/spacer';
import { connect } from 'react-redux';
import { setLastRecharge, setSelectedPayment, setToggleModalVisible } from '../../redux/actions/action';
import Cards from '../../components/cards';
import CustomModal from '../../components/modal';
import Header from '../../components/header';
import PaymentSection from './paymentSection';
import { hs } from '../../utility/responsive';

/**
 * @typedef {Object} PaymentProps
 * @property {{ params: { price: number } }} route - React Navigation route object containing params (price).
 * @property {any} navigation - React Navigation navigation object.
 * @property {string|number} number - User's number from Redux state.
 * @property {boolean} isModal - Controls visibility of CustomModal.
 * @property {Array} paymentOptions - Available payment options.
 * @property {string} selectedPayment - Currently selected payment method.
 * @property {(visible: boolean) => void} setToggleModalVisible - Redux action to toggle modal visibility.
 * @property {(payment: string) => void} setSelectedPayment - Redux action to set selected payment.
 * @property {(price: number) => void} setLastRecharge - Redux action to set last recharge price.
 */

/** @extends {React.Component<PaymentProps>} */
class Payment extends Component {
  handleImagePress = () => {
    this.props.setToggleModalVisible(false);
    this.props.setSelectedPayment('');
    this.props.navigation.replace('Recharge');
  };

  handlePayment = (price) => {
    this.props.setLastRecharge(price);
    this.props.setToggleModalVisible(true);
  };

  render() {
    const { price } = this.props.route.params;
    const { selectedPayment } = this.props;

    return (
      <SafeArea backgroundColor={colors.blue2}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.blue2} />
          <Spacer height={20} />

        <Header
          onImagePress={() => {
            this.props.setSelectedPayment('');
            this.props.navigation.goBack();
          }}
          tintColor={colors.gray1}
          titleColor={colors.black}
          backgroundColor={colors.blue2}
          leftIcon={'arrow'}
          title={'payment'}
          fontSize={20}
          fontWeight="700"
          imageBgColor={colors.white}
        />
        <Spacer height={20} />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
          <Cards price={price} number={this.props.number} type={6} />
          <PaymentSection data={this.props.paymentOptions} />
          <Spacer height={20} />
          <Cards
            image={'pciLogo'}
            desc={'100% secure payments'}
            text={'your money is always safe'}
            type={7}
          />
        </ScrollView>
        <Cards
          backgroundColor={colors.white2}
          disabled={!selectedPayment}
          cardTwoText2={colors.green}
          textBtnBgColor={
            selectedPayment !== '' ? colors.black : colors.gray2
          }
          textColor={selectedPayment !== '' ? colors.white : colors.gray}
          price={price}
          onPress={() => this.handlePayment(price)}
          type={2}
        />
        <CustomModal
          onImagePress={this.handleImagePress}
          visible={this.props.isModal}
        />
      </SafeArea>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.blue2,
    paddingHorizontal: hs(20),
  },
});

const mapStateToProps = (state) => ({
  number: state.reducer.number,
  isModal: state.reducer.isModal,
  paymentOptions: state.reducer.paymentOptions,
  selectedPayment: state.reducer.selectedPayment,
});

const mapDispatchToProps = {
  setToggleModalVisible,
  setSelectedPayment,
  setLastRecharge,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
