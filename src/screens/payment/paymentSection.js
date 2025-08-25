import { Component } from 'react';
import { FlatList } from 'react-native';
import CustomCards from '../../components/cards/Cards';
import Spacer from '../../components/spacer';
import { connect } from 'react-redux';
import { setSelectedPayment } from '../../redux/actions/action';

/**
 * @typedef {Object} PaymentSectionProps
 * @property {Array} data - Array of grouped payment options.
 * @property {string} selectedPayment - The currently selected payment option.
 * @property {(payment: string) => void} setSelectedPayment - Redux action to set selected payment.
 * @property {string|number} [number] - User’s number from Redux state.
 * @property {boolean} [isModal] - Modal visibility state.
 * @property {Array} [paymentOptions] - Payment options from Redux state.
 * @property {boolean} [isArrowDown] - Global arrow down toggle from Redux (unused locally).
 */

 /** @extends {Component<PaymentSectionProps>} */
class PaymentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpi: false,
      isNetBanking: false,
    };
  }

  handleUpi = () => {
    if (this.state.isUpi) {
      this.setState({ isUpi: false });
    } else {
      this.setState({ isUpi: true, isNetBanking: false });
    }
  };

  handleNetBanking = () => {
    if (this.state.isNetBanking) {
      this.setState({ isNetBanking: false });
    } else {
      this.setState({ isNetBanking: true, isUpi: false });
    }
  };

  handleUpiPress = (item) => {
    this.props.setSelectedPayment(item);
  };

  handleRecommendedPress = (item) => {
    this.props.setSelectedPayment(item);
  };

  handleNetBankingPress = (item) => {
    this.props.setSelectedPayment(item);
  };

  render() {
    const { data } = this.props;

    return (
      <>
        <FlatList
        scrollEnabled={false}
          data={data[0]?.options}
          keyExtractor={(opt, idx) => idx.toString()}
          renderItem={({ item }) => (
            <CustomCards
              selectedPayment={this.props.selectedPayment}
              onPress={() => this.handleRecommendedPress(item.name)}
              {...item}
            />
          )}
        />
        <Spacer height={20} />
        <CustomCards
          onPress={this.handleUpi}
          leftIcon="upiLogo"
          name="UPI"
          rightIcon={this.state.isUpi ? 'up-arrow' : 'downArrow'}
        />
        {this.state.isUpi && (
          <FlatList
            scrollEnabled={false}
            data={data[1]?.options}
            keyExtractor={(opt, idx) => idx.toString()}
            renderItem={({ item }) => (
              <CustomCards
                selectedPayment={this.props.selectedPayment}
                onPress={() => this.handleUpiPress(item.name)}
                {...item}
              />
            )}
          />
        )}
        {this.state.isUpi && <Spacer height={20} />}
        <CustomCards
          leftIcon="credit-card"
          name="CREDIT/DEBIT/ATM CARD"
          customStyle={{
            borderRadius: this.state.isUpi ? 8 : 0,
            borderBottomLeftRadius: this.state.isNetBanking ? 8 : 0,
            borderBottomRightRadius: this.state.isNetBanking ? 8 : 0,
            borderBottomWidth: this.state.isUpi ? 1 : !this.state.isUpi && !this.state.isNetBanking ? 1 :0,
          }}
          rightIcon={'downArrow'}
        />
        {this.state.isNetBanking && <Spacer height={20} />}
        <CustomCards
          onPress={this.handleNetBanking}
          end={this.state.isNetBanking ? false : true}
          leftIcon="bank"
          name="NET BANKING"
          rightIcon={this.state.isNetBanking ? 'up-arrow' : 'downArrow'}
        />
        {this.state.isNetBanking && (
          <FlatList
            scrollEnabled={false}
            data={data[2]?.options}
            keyExtractor={(opt, idx) => idx.toString()}
            renderItem={({ item }) => (
              <CustomCards
                selectedPayment={this.props.selectedPayment}
                onPress={() => this.handleNetBankingPress(item.name)}
                {...item}
              />
            )}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  number: state.reducer.number,
  isModal: state.reducer.isModal,
  paymentOptions: state.reducer.paymentOptions,
  isArrowDown: state.reducer.isArrowDown,
  selectedPayment: state.reducer.selectedPayment,
});

const mapDispatchToProps = {
  setSelectedPayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentSection);
