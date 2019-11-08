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

apiURL= 'https://api.themoviedb.org/3'
imgURL= 'http://image.tmdb.org/t/p/original'

const Slider_View=props=>(
  <View style={styles.container}>
      <Image style={styles.image} source={{uri: `${imgURL}${props.item.poster_path}`}}/>
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

      ],
      Trend_list:[]
    }
  }

  componentDidMount(){
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=a4433b1b0534ad5410c7b737b6530f47')
    .then(res=>res.json())
    .then(data=>this.setState({Trend_list:data.results}))
  }


  render() {
    
    return (
      <View style={{flex:1}}>
        <Swiper
          autoplay
          height={600}
        >
          {this.state.Trend_list.slice(0,3).map((item,i)=><Slider_View item={item} key={i}/>)}
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
