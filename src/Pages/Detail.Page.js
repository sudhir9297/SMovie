import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    Share,
    Animated,
    ImageBackground
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'

import TextGradient from 'react-native-linear-gradient'
import Orientation from 'react-native-orientation'

API='a4433b1b0534ad5410c7b737b6530f47'
apiURL= 'https://api.themoviedb.org/3'
imgURL= 'http://image.tmdb.org/t/p/original'

const {width, height} = Dimensions.get('window')

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const item=this.props.navigation.getParam('item')
        return ( 
           <View style={{flex:1}}>
                <ScrollView style={styles.container}>
                    <ImageBackground style={styles.thumbnail} source={{uri:`${imgURL}${item.poster_path}`}}>
                        <View style={styles.buttonPlay}>   
                                <TouchableWithoutFeedback onPress={null}>
                                    <View>
                                        <Icon
                                            name='play-circle'
                                            size={60}
                                            color='white'
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                        </View>   
                    </ImageBackground>
                    <View style={styles.descContainer}>
                        <View style={styles.sub}>
                            <Text style={[styles.text]}>{item.release_date}</Text>
                            <Text style={[styles.text]}>{item.vote_average}</Text>

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
    thumbnail: {
        width: width,
        height:height
    },
    buttonPlay:{
        justifyContent:'center',
        flex:1,
        alignItems:"center"
    },
    descContainer:{
        marginTop:5,
        paddingHorizontal: 20,

    },
    sub:{
        flexDirection:"row",   
        
    },
    desc:{
        marginVertical: 10
        
    },
    text: {
        color: '#b3b3b3',
        fontSize: 18,
        margin:5
    },
})
 
export default Detail;