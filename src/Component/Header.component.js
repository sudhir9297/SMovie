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
                <Icon name="bars"
                        color='white'
                        size={25}/>
            </TouchableWithoutFeedback>
            <Text style={styles.logo}>SMOVIE</Text>
            <TouchableWithoutFeedback onPress={() => navigate('Search')}>
                <Icon name="search"
                        color='white'
                        size={25}/>
            </TouchableWithoutFeedback>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: 'black',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    logo: {
        color:'#D3A004',
        fontSize:30,
        fontWeight:'800',
        height: 40
    }
})
 
export default Header;