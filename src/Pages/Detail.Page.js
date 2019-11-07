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

const {width, height} = Dimensions.get('window')

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        //const {thumbnail}=this.props.navigation.getParam('item').details

        return ( 
           <View style={{flex:1}}>
                <ScrollView style={styles.container}>
                    <ImageBackground style={styles.thumbnail} source={require('../Image/1.jpg')}>
                        <View style={styles.buttonPlay}>   
                                <TouchableWithoutFeedback>
                                    <View>
                                        <Icon
                                            name='play-circle'
                                            size={50}
                                            color='white'
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                        </View>   
                    </ImageBackground>
                </ScrollView>
           </View>
           
         );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    thumbnail: {
        width: width,
        height: 300
    },
    buttonPlay:{
        justifyContent:'center',
        flex:1,
        alignItems:"center"
    }
})
 
export default Detail;