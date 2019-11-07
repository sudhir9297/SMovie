import React ,{Component} from 'react';
import {StyleSheet,View,StatusBar } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Route from './src/Route/Route'

import Detail from './src/Pages/Detail.Page'

const RootStack = createStackNavigator(
  Route,
  {
    headerMode:'none'
  },
);

const AppContainer=createAppContainer(RootStack)

class App extends Component  {
 render(){
  return (
    <View style={{flex:1}}>
       <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "black" translucent = {true}/>
       <View style={{flex:1}}>
          <AppContainer />
        </View>
    </View>  
  )
 }
}


export default App 

