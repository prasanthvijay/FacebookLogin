/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { LoginNavigator } from './src/components/login/LoginNavigator'
import { MainNavigator } from './src/components/main/MainNavigator'
import FBSDK from 'react-native-fbsdk'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const { AccessToken } = FBSDK
const makeRootNavigator = (isLoggedIn) => { 
  const NavStack = createStackNavigator(
    {
    LoginNavigator: {
      screen: LoginNavigator
    },
    MainNavigator: {
      screen: MainNavigator
    },
  },
  {
   initialRouteName: isLoggedIn ? "MainNavigator" : "LoginNavigator"
  });
  return AppNavigator = createAppContainer(NavStack);
}


export default class App extends Component {
  constructor(props){
        super(props);
        this.state = {
          accessToken :null,
        }
      }
      componentDidMount(){
        AccessToken.getCurrentAccessToken()
        .then((data)=> {
          this.setState({
            accessToken:data.accessToken
          })
        })
        .catch(error =>{
          console.log(error);
        })
      }
  render() {
      const AppNavigator = makeRootNavigator(this.state.accessToken)
      return (
          <AppNavigator />
        );
      }
}

