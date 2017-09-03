import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignUp from './components/signup/SignUp';
import CreateAccount from './components/createaccount/CreateAccount';
import Welcome from './components/welcome/Welcome';
import Profile from './components/profile/Profile';
import Categories from './components/categories/Categories';
import Invester from './components/invester/Invester';
import Pulse from './components/pulse/Pulse';

const SimpleApp = StackNavigator({
  SignUp: { screen: SignUp },
  Create:{screen: CreateAccount},
  Welc:{screen: Welcome},
  Profile:{screen: Profile},
  Categ:{screen: Categories},
  Invest:{screen:Invester},
  Pul:{screen:Pulse}
}
);


 


module.exports=SimpleApp;