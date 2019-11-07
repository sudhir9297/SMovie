/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  ScrollView 
} from 'react-native';

import MovieData from '../dummyData.js'

import Orientation from 'react-native-orientation'


export default class List extends Component {
  constructor(props){
    super(props)

    this.state={
      data:MovieData
    }
  }


  _renderItem=(item)=>{
    const {navigate} = this.props.navigation
    return(
      <TouchableWithoutFeedback onPress={() => navigate('Details', {item: item})}>
          <Image style={{width:120,height:180}} source={{uri:item.image}}/>
      </TouchableWithoutFeedback>
        
      )
  }
  render() {
    return (
      <View style={styles.container}>
        <View >
          <Text style={styles.text}>My List</Text>
              <FlatList
                horizontal
                ItemSeparatorComponent={()=><View style={{width:5}}/>}
                data={this.state.data}
                renderItem={({item})=>this._renderItem(item)}
                keyExtractor={item => item.key.toString()}
              />
        </View>
        <View >
            <Text style={styles.text}>Top Pick For You</Text>
            <FlatList
              horizontal
              ItemSeparatorComponent={()=><View style={{width:5}}/>}
              data={this.state.data}
              renderItem={({item})=>this._renderItem(item)}
              keyExtractor={item => item.key.toString()}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"auto"
  },
  text: {
       color: 'white',
       marginTop:10,
       fontSize:18,
       fontWeight:'600'
   }
});
