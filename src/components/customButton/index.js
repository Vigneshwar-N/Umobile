import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';
import images from '../../assets/imageMap';
import CustomText from '../customText';
import { hs, vs } from '../../utility/responsive';

/**
 * @typedef {Object} ButtonProps
 * @property {number} [type=1] - The button type to render. Currently supports:
 * - `1`: Renders an image button.
 * - `2`: Renders a text button.
 * @property {keyof typeof images} image - Key of the image from the image map to display.
 * @property {number} [imageHeight=20] - Height of the button image in pixels.
 * @property {number} [imageWidth=20] - Width of the button image in pixels.
 * @property {number} [imagePadding=10] - Padding around the image inside the button.
 * @property {string} [imageBgColor=colors.lightGray] - Background color of the image button.
 * @property {number|string} [imageBorderRadius='100%'] - Border radius of the image container.
 * @property {() => void} [onImagePress] - Callback function when the image button is pressed.
 * @property {number} [borderWidth] - Border width of the image button.
 * @property {string} [borderColor] - Border color of the image button.
 * @property {boolean} [disabled] - Whether the button is disabled.
 * @property {string} [text] - Text content of the text button.
 * @property {() => void} [onPress] - Callback for the text button press.
 * @property {string} [textBtnBgColor=colors.white] - Background color of the text button.
 * @property {string} [textColor=colors.black] - Text color of the button label.
 * @property {number} [borderRadius=50] - Border radius for text button.
 * @property {number} [paddingVertical=10] - Vertical padding for text button.
 * @property {number} [paddingHorizontal=10] - Horizontal padding for text button.
 * @property {string} [fontWeight='500'] - Font weight of the button text.
 * @property {string} [tintColor] - Tint color for the image inside the image button.
 */

/** @extends {React.Component<ButtonProps>} */
export default class Button extends Component {
  render() {
    const {
      disabled,
      type = 1,
      image,
      imageHeight = 20,
      imageWidth = 20,
      imagePadding = 10,
      imageBgColor = colors.lightGray,
      imageBorderRadius = '100%',
      onImagePress,
      borderWidth,
      borderColor,
      text,
      onPress,
      textBtnBgColor = colors.white,
      textColor = colors.black,
      borderRadius = 50,
      paddingVertical = 10,
      fontWeight = '500',
      paddingHorizontal = 10,
      tintColor,
    } = this.props;

    const imageButton = () => (
      <TouchableOpacity
        disabled={disabled}
        onPress={onImagePress}
        style={[
          styles.imageButton,
          {
            padding: vs(imagePadding),
            backgroundColor: imageBgColor,
            borderRadius: imageBorderRadius,
            borderWidth,
            borderColor,
          },
        ]}
      >
        <Image
          tintColor={tintColor}
          style={{
            height: vs(imageHeight),
            width: hs(imageWidth),
          }}
          source={images[image]}
        />
      </TouchableOpacity>
    );

    const textButton = () => (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[
          styles.textButton,
          {
            backgroundColor: textBtnBgColor,
            borderRadius: borderRadius,
          },
        ]}
      >
        <View
          style={{
            paddingVertical: vs(paddingVertical),
            paddingHorizontal: hs(paddingHorizontal),
          }}
        >
          <CustomText
            fontWeight={fontWeight}
            fontSize={15}
            text={text}
            color={textColor}
          />
        </View>
      </TouchableOpacity>
    );

    const all_buttons = {
      1: imageButton,
      2: textButton,
    };

    return <View>{all_buttons[type]()}</View>;
  }
}

const styles = StyleSheet.create({
  imageButton: {
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
