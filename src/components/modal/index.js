import React, { PureComponent } from 'react';
import { Text, View, Modal, Image, StatusBar, StyleSheet } from 'react-native';
import Spacer from '../spacer';
import CustomText from '../customText';
import { colors } from '../../constants/colors';
import Button from '../customButton';
import images from '../../assets/imageMap';
import { vs, hs } from '../../utility/responsive';

/**
 * @typedef {Object} CustomModalProps
 * @property {boolean} visible - Controls whether the modal is visible.
 * @property {() => void} onImagePress - Callback when the "OK" button is pressed.
 */

/** @extends {React.PureComponent<CustomModalProps>} */
export default class CustomModal extends PureComponent {
  render() {
    const { visible, onImagePress } = this.props;

    return (
      <Modal transparent={true} visible={visible} animationType="fade">
        <View style={styles.modalWrapper}>
          <StatusBar backgroundColor={'rgba(0,0,0,0.4)'} />
          <View style={styles.modalContent}>
            <Image
              style={styles.successImage}
              source={images['success']}
            />
            <Spacer height={10} />
            <CustomText
              color={colors.black}
              fontSize={15}
              textAlign="center"
              fontWeight="700"
              text="Payment Successful"
            />
            <Spacer height={20} />
            <View style={styles.okButtonWrapper}>
              <Button
                onPress={onImagePress}
                paddingHorizontal={15}
                fontWeight={'700'}
                paddingVertical={15}
                textBtnBgColor={colors.black}
                textColor={colors.white}
                borderRadius={8}
                type={2}
                text={'OK'}
              />
            </View>
            <Spacer height={10} />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#FFF',
    alignSelf: 'center',
    borderRadius: 12,
    padding: 20,

    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,

    // Android Shadow
    elevation: 6,
  },
  successImage: {
    height: vs(50),
    width: hs(50),
    alignSelf: 'center',
    margin: vs(20),
  },
  okButtonWrapper: {
    width: '50%',
    alignSelf: 'center',
  },
});
