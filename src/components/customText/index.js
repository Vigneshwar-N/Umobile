import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { colors } from '../../constants/colors';
import { fs } from '../../utility/responsive';

/**
 * @typedef {Object} CustomTextProps
 * @property {string} text - The text content to display.
 * @property {string} [color=colors.white] - Text color.
 * @property {number} [fontSize=14] - Font size in pixels.
 * @property {string} [fontWeight='400'] - Font weight for the text.
 * @property {('auto'|'left'|'right'|'center'|'justify')} [textAlign='left'] - Text alignment.
 * @property {number} [flex] - Flex property for layout control.
 */

/** @extends {React.PureComponent<CustomTextProps>} */
export default class CustomText extends PureComponent {
  render() {
    const {
      text,
      color = colors.white,
      fontSize = 14,
      fontWeight = '400',
      textAlign = 'left',
      flex,
    } = this.props;

    return (
      <Text
        style={{
          flex,
          color,
          fontSize: fs(fontSize),
          fontWeight,
          textAlign,
        }}
      >
        {text}
      </Text>
    );
  }
}
