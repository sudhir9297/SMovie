import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';

imgURL= 'http://image.tmdb.org/t/p/original'

const ItemView=(items)=>{
    const {item}=items
    return(
      <View style={{flex:1}}>
              <View>
                  <Image style={styles.image} source={{uri: `${imgURL}${item.poster_path}`}}/>
              </View>
              <View style={{paddingHorizontal:5,marginTop:5}}>
                <Text style={styles.title}>{item.original_title}</Text>
                <Text style={styles.ReleaseDate}>{item.release_date}</Text>
              </View>
      </View>
     )
}

styles=StyleSheet.create({
    image:{
        width:120,
        height:200,
        borderRadius:14,
        marginHorizontal:5
    },
    title: {
        color: 'white',
        width:120,
        fontSize:18,
        fontWeight:'600'
    },
    ReleaseDate:{
      color:'grey',
      fontSize:16,
      marginTop:3
    },
})
export default ItemView