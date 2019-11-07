/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper'

const {width} = Dimensions.get('window')

const Slider_View=props=>(
  <View style={styles.container}>
      <Image style={styles.image} source={props.uri} />
  </View>
)

export default class Slider extends Component {
  constructor(props){
    super(props)
    this.state={
      ImageSlider:[
        require('../Image/1.jpg'),
        require('../Image/2.jpg'),
        require('../Image/3.jpg')

      ]
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Swiper
          autoplay
          height={240}
        >
          {this.state.ImageSlider.map((item,i)=><Slider_View uri={item} key={i}/>)}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  image: {
       flex:1,
       width
    }
});
