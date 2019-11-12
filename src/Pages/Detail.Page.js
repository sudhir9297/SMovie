import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { LinearGradient } from 'expo-linear-gradient';
import Stars from 'react-native-stars';

//Api stuff
API='a4433b1b0534ad5410c7b737b6530f47'
apiURL= 'https://api.themoviedb.org/3'
imgURL= 'http://image.tmdb.org/t/p/original'

class Detail extends Component {

    render() { 
        const item=this.props.navigation.getParam('item')
        return ( 
           <View style={{flex:1}}>
                <ScrollView  style={styles.container}>
                    <View style={{justifyContent:"center",alignItems:"center"}}>
                    <ImageBackground style={styles.thumbnail} source={{uri:`${imgURL}${item.poster_path}`}}>
                        <View style={styles.nameContainer} >
                                <LinearGradient colors={['transparent','#202328', '#202328']} >
                                        <Text style={styles.title}>
                                            {item.original_title}
                                        </Text>
                                </LinearGradient>
                        </View>
                    </ImageBackground>
                    </View>
                    <View style={styles.descContainer}>
                        <View style={styles.sub}>
                            <Text style={[styles.text]}>{item.release_date}</Text>
                            <Stars
                                    default={item.vote_average/2}
                                    count={5}
                                    half={true}
                                    starSize={10}
                                    fullStar={<Icon name="star" style={[styles.myStarStyle]}/>}
                                    emptyStar={<Icon name="star-o" style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                                    halfStar={<Icon name="star-half-empty" style={[styles.myStarStyle]}/>}
                                />
                        </View>
                        <View style={styles.desc}>
                            <Text style={[styles.text]}>{item.overview}</Text>
                        </View>
                    </View>
                </ScrollView>
           </View>
           
         );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#202328'
    },
    nameContainer: {
        backgroundColor: 'transparent',
       
        
    },
    thumbnail: {
        width: 400,
        height:460,
        justifyContent:"flex-end",
        
    },
    descContainer:{
        marginTop:5,
        paddingHorizontal: 20,

    },
    sub:{
        flexDirection:"row", 
        alignItems:"center",
        marginHorizontal:5  
        
    },
    desc:{
        marginVertical: 10
        
    },
    text: {
        color: '#b3b3b3',
        fontSize: 18,
        margin:5
    },
    title:{
        color: 'white',
        fontSize:35,
        marginHorizontal:10,
        paddingVertical:20
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
      },
})
 
export default Detail;