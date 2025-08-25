import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Recharge from '../screens/recharge'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Payment from '../screens/payment'
import { NavigationContainer } from '@react-navigation/native';
export default class AppNavigator extends Component {
  render() {
    const Stack = createNativeStackNavigator();
    function MyStack() {
      return (
        <Stack.Navigator initialRouteName='Recharge'>
          <Stack.Screen options={{
            headerShown:false
          }} name="Recharge" component={Recharge} />
          <Stack.Screen options={{
            headerShown:false
          }} name="Payment" component={Payment} />
        </Stack.Navigator>
      );
    }
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    )
  }
}
