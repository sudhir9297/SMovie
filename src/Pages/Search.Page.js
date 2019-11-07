import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions,
    FlatList,
    ScrollView,
    Image
} from 'react-native'

import MovieData from '../dummyData.js'

const {width, height} = Dimensions.get('window')
import Icon from 'react-native-vector-icons/FontAwesome'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '',
            data: ''
         }
    }

    clearSearch(){
        this.setState({text:'',data:''})
    }

    filter(text){
        const data=MovieData
        const newData=data.filter(function(item){
            const itemData=item.name.toUpperCase()
            const textData=text.toUpperCase()
            return itemData.indexOf(textData)>-1
        })
        this.setState({
            data:newData,
            text:text,
        })
    }

    renderItem=(item)=>{
        const {navigate} = this.props.navigation
        return(
            <TouchableWithoutFeedback onPress={() => navigate('Details', {item: item})}>
                <Image style={{width:120,height:180}} source={{uri:item.image}}/>
            </TouchableWithoutFeedback>
        )
    }

    render() { 
        const {goBack} = this.props.navigation
        return ( 
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon 
                        name='search'
                        color='grey'
                        size={18}
                        style={styles.searchIcon}
                    />
                    <TextInput 
                        value={this.state.text}
                        onChangeText={(text) => this.filter(text)}
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor="grey"
                        keyboardAppearance="dark"
                        autoFocus={true}
                    />
                    {this.state.text?
                    <TouchableWithoutFeedback onPress={()=>this.clearSearch()}>
                         <Icon 
                            name="times-circle"
                            color="grey"
                            size={18}
                            style={styles.iconInputClose}
                        />
                    </TouchableWithoutFeedback>
                    :null}
                    <TouchableWithoutFeedback  onPress={() => goBack()}>
                        <View >
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView>
                    <FlatList
                        style={{marginHorizontal:5}}
                        data={this.state.data}
                        numColumns={3}
                        columnWrapperStyle={{marginTop:5,marginLeft:5}}
                        renderItem={({item})=>this.renderItem(item)}
                        />
                </ScrollView>

            </View>
         );
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#181818'
    },
    header:{
        height: 40,
        backgroundColor: '#181818',
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        paddingBottom: 5,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    searchIcon:{
        position: 'absolute',
        top: 5,
        left: 15,
        zIndex: 1,
        backgroundColor:'transparent'
    },
    input:{
        width:width-(width/4),
        height:30,
        marginHorizontal:10,
        paddingLeft:30,
        borderRadius:30,
        color:'grey',
    },
    iconInputClose:{
        position: 'absolute',
        top: 5,
        right: 90,
        backgroundColor: 'transparent',
        zIndex: 1 
    },
    cancelButtonText: {
        color: 'white'
    },
    image: {
        marginRight: 5,
        width: 115,
        height: 170
    }

})
 
export default Search;