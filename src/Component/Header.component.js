import React from 'react'
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    Text
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const Header = props => {
    const {navigate} = props.navigation
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.toggle()}>
               <View style={styles.btnContainer}>
                    <Icon name="bars"
                                color='white'
                                size={25}/>
               </View>
                
            </TouchableWithoutFeedback>
            <Text style={styles.logo}>SMOVIE</Text>
            <TouchableWithoutFeedback onPress={() => navigate('Search')}>
                <View style={styles.btnContainer}>
                    <Icon name="search"
                            color='white'
                            size={25}/>
                </View>
            </TouchableWithoutFeedback>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor:'#202328',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    logo: {
        color:'#D3A004',
        fontSize:30,
        fontWeight:'800',
        height: 40
    },
    btnContainer:{
        width:40,
        justifyContent:'center',
        alignItems:"center",
        height:40
    }
})
 
export default Header;