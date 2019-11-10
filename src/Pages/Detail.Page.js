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

import { LinearGradient } from 'expo-linear-gradient';
import Stars from 'react-native-stars';

import Orientation from 'react-native-orientation'
import { Logs } from 'expo';

API='a4433b1b0534ad5410c7b737b6530f47'
apiURL= 'https://api.themoviedb.org/3'
imgURL= 'http://image.tmdb.org/t/p/original'

const {width, height} = Dimensions.get('window')


API='a4433b1b0534ad5410c7b737b6530f47'
apiURL= 'https://api.themoviedb.org/3'
imgURL= 'http://image.tmdb.org/t/p/original'


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trailerData:[]

        }
    }

    // componentDidMount(){
    //     fetch(`${apiURL}/movie/${item.id}/videos?api_key=${API}&language=en-US`)
    //     .then(res=>res.json())
    //     .then(data=>this.setState({trailerData:data.results}))
    //     console.log(this.state.trailerData);

    // }

        
        //navigate('VideoPlayer')



    render() { 
        const item=this.props.navigation.getParam('item')
        const {navigate} = this.props.navigation
        
        return ( 
           <View style={{flex:1}}>
                <ScrollView onScroll={this.handleTitleAnimation} style={styles.container}>
                    <ImageBackground style={styles.thumbnail} source={{uri:`${imgURL}${item.poster_path}`}}>
                        <View style={styles.buttonPlay}>   
                                <TouchableWithoutFeedback onPress={()=>navigate('VideoPlayer',{items:item})}>
                                    <View>
                                        <Icon
                                            name='play-circle'
                                            size={60}
                                            color='white'
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                        </View>   
                        <View style={styles.nameContainer} >
                                <LinearGradient colors={['transparent','#202328', '#202328']} >
                                        <Text style={styles.title}>
                                            {item.original_title}
                                        </Text>
                                </LinearGradient>
                        </View>
                    </ImageBackground>
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