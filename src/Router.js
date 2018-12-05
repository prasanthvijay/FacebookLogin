import React from 'react'
import { LoginNavigator } from './components/login/LoginNavigator'
import { MainNavigator } from './components/main/MainNavigator'
import {Router, Scene} from 'react-native-router-flux'

const routes = ()=> {
    return (
        <Router>
           <Scene key="root">
                <Scene
                    key="login"
                    title="Login"
                    component={LoginNavigator}>
                </Scene>
                <Scene
                    key="home"
                    title="Home"
                    component={MainNavigator}
                    >
                </Scene>
           </Scene>
        </Router>
    )
}

export default Routes
