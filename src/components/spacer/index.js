import React, { Component } from 'react';
import { View } from 'react-native';
import { vs, hs } from '../../utility/responsive';

/**
 * @typedef {Object} SpacerProps
 * @property {number} [height] - Optional height for vertical spacing.
 * @property {number} [width] - Optional width for horizontal spacing.
 */

/** @extends {React.Component<SpacerProps>} */
export default class Spacer extends Component {
  render() {
    const { width = 0, height = 0 } = this.props;
    return <View style={{ width: hs(width), height: vs(height) }} />;
  }
}
