import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../customButton';
import CustomText from '../customText';
import { vs, hs } from '../../utility/responsive';

/**
 * @typedef {Object} HeaderProps
 * @property {number} [type=1] - The header type to render. Currently supports:
 * - `1`: Renders the default header with optional left and right icons.
 * @property {number} [paddingHorizontal=20] - Horizontal padding for the header container.
 * @property {keyof typeof import('../../assets/imageMap').default} [leftIcon] - Optional left icon key from the image map.
 * @property {keyof typeof import('../../assets/imageMap').default} [rightIcon] - Optional right icon key from the image map.
 * @property {number} [imageHeightAndWidth=20] - Height and width for the icons.
 * @property {number} [imagePadding=10] - Padding around the icons.
 * @property {string} [title] - The title text to display in the header.
 * @property {number} [fontSize] - Font size of the title text.
 * @property {string} [titleColor] - Color of the title text.
 * @property {string} [fontWeight] - Font weight of the title text.
 * @property {string} [tintColor] - Tint color for the header icons.
 * @property {string} [backgroundColor] - Background color of the header container.
 * @property {string} [imageBgColor] - Background color for icon container.
 * @property {() => void} [onImagePress] - Callback when left image icon is pressed.
 */

/** @extends {React.Component<HeaderProps>} */
export default class Header extends Component {
  render() {
    const {
      type = 1,
      tintColor,
      paddingHorizontal = 20,
      rightIcon,
      leftIcon,
      imageHeightAndWidth = 20,
      imagePadding = 10,
      title,
      fontSize,
      titleColor,
      fontWeight,
      backgroundColor,
      imageBgColor,
      onImagePress,
    } = this.props;

    const headerOne = () => {
      return (
        <View
          style={[
            styles.headerOne,
            {
              paddingHorizontal: hs(paddingHorizontal),
              backgroundColor: backgroundColor,
            },
          ]}
        >
          {leftIcon ? (
            <Button
              onImagePress={onImagePress}
              tintColor={tintColor}
              imageHeight={imageHeightAndWidth}
              imageWidth={imageHeightAndWidth}
              imagePadding={imagePadding}
              image={leftIcon}
              imageBgColor={imageBgColor}
            />
          ) : (
            <View
              style={{
                width: hs(imageHeightAndWidth),
                height: vs(imageHeightAndWidth),
                margin: hs(imagePadding),
              }}
            />
          )}

          <CustomText
            fontWeight={fontWeight}
            color={titleColor}
            fontSize={fontSize}
            text={title}
          />

          {rightIcon ? (
            <Button
              imageHeight={imageHeightAndWidth}
              imageWidth={imageHeightAndWidth}
              imagePadding={imagePadding}
              image={rightIcon}
            />
          ) : (
            <View
              style={{
                width: hs(imageHeightAndWidth),
                height: vs(imageHeightAndWidth),
                margin: hs(imagePadding),
              }}
            />
          )}
        </View>
      );
    };

    const all_headers = {
      1: headerOne,
    };

    return <>{all_headers[type]()}</>;
  }
}

const styles = StyleSheet.create({
  headerOne: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
