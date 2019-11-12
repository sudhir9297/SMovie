import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/FontAwesome'
imgURL= 'http://image.tmdb.org/t/p/original'

const ItemView=(items)=>{
    const {item}=items
    return(
      <View style={{flex:1}}>
              <View>
                  <Image style={styles.image} source={{uri: `${imgURL}${item.poster_path}`}}/>
              </View>
              <View style={{paddingHorizontal:5,marginTop:5,alignItems:"flex-start"}}>
                <Text style={styles.title}>{item.original_title}</Text>               
                <Stars
                      default={item.vote_average/2}
                      count={5}
                      half={true}
                      starSize={10}
                      fullStar={<Icon name="star" style={[styles.myStarStyle]}/>}
                      emptyStar={<Icon name="star-o" style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                      halfStar={<Icon name="star-half-empty" style={[styles.myStarStyle]}/>}
                />
                <Text style={styles.ReleaseDate}>{item.release_date}</Text>
              </View>
      </View>
     )
}

styles=StyleSheet.create({
    image:{
        width:100,
        height:140,
        borderRadius:12,
        marginHorizontal:5
    },
    myStarStyle: {
      color: 'yellow',
      backgroundColor: 'transparent',
      textShadowColor: 'black',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 2,
    },
    title: {
        color: 'white',
        width:100,
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