import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../constants/colors';

/**
 * @typedef {Object} SafeAreaProps
 * @property {React.ReactNode} children - Elements to be rendered inside the safe area.
 * @property {string} [backgroundColor] - Background color for the safe area.
 */

/** @extends {React.PureComponent<SafeAreaProps>} */

export default class SafeArea extends PureComponent {
  render() {
    const { children,backgroundColor=colors.black} = this.props;
    return (
      <SafeAreaProvider>
        <SafeAreaView style={[styles.container,{backgroundColor}]}>
            {children}
        </SafeAreaView>
      </SafeAreaProvider>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
