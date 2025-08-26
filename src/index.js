import React, { PureComponent } from 'react'
import Recharge from './screens/recharge'
import { Provider } from 'react-redux'
import { store } from './redux/store/index.js'
import Payment from './screens/payment/index.js'
import AppNavigator from './navigation/index.js'

export default class App extends PureComponent {
    render() {
        return (
            <>
                <Provider store={store} >
                  <AppNavigator />
                </Provider>
            </>
        )
    }
}
