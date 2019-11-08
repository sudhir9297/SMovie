/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import ItemView from '../Component/itemContainer.component'



export default class List extends Component {

renderItem=(item)=>{
    const {navigate} = this.props.navigation
    console.log(item.title);
    return(
        <View style={{flex:1}}>
          <TouchableWithoutFeedback onPress={() => navigate('Details', {item: item})}>
              <View>
                  <ItemView item={item}/>
              </View>
          </TouchableWithoutFeedback>
    </View>
    )
  }
 
  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.Category}>{this.props.name}</Text>
            <Text style={styles.ViewAllTxt}>View All</Text>
        </View>
        <View>
        <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={()=><View style={{width:10}}/>}
                data={this.props.item}
                renderItem={({item})=>this.renderItem(item)}
                keyExtractor={item => item.id.toString()}

              />
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"auto",
    marginHorizontal:10
  },
  textContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
  },
  Category:{
      color: 'white',
       marginVertical:15,
       fontSize:22,
       fontWeight:'600'
  },

   ViewAllTxt:{
     color:'#FFAC00',
   }
});
