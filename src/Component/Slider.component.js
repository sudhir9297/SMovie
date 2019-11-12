/* @flow */

import React, { Component } from 'react';
import {
  View,

  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper'

//for Image stuff
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
      Trend_list:[]
    }
  }

  //fetching image data
  componentDidMount(){
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=a4433b1b0534ad5410c7b737b6530f47')
    .then(res=>res.json())
    .then(data=>this.setState({Trend_list:data.results}))
  }


  render() {
    const {item} = this.props
    return (
      <View style={{flex:1}}>
        <Swiper
          key={item.length}
          autoplay
          height={500}
        >
          {item.slice(17,item.length).map((item,i)=><Slider_View item={item} key={i}/>)}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
    
    
  },
  image: {
    flex:1,
    width:"90%",
    height:'90%',
    borderRadius:14
    }
});
