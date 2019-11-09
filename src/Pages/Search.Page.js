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


const {width, height} = Dimensions.get('window')
import Icon from 'react-native-vector-icons/FontAwesome'
import ItemView from '../Component/itemContainer.component'

imgURL= 'http://image.tmdb.org/t/p/original'
apiURL= 'https://api.themoviedb.org/3'
API='a4433b1b0534ad5410c7b737b6530f47'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchInput: '',
            movieList:[]
         }
    }

    clearSearch(){
        this.setState({searchInput:'',movieList:''})
    }

    filter(text){

        fetch(`${apiURL}/search/movie?api_key=${API}&language=en-US&query=${text}&page=1&include_adult=false`)
        .then(res=>res.json())
        .then(data=>this.setState({movieList:data.results}))  
    }

    renderItem=(item)=>{
        const {navigate} = this.props.navigation
        return(
            <View style={{flex:1}}>
                <TouchableWithoutFeedback onPress={() => navigate('Details', {item: item})}>
                    <View >
                        <ItemView item={item}/>
                    </View>
                </TouchableWithoutFeedback>
        </View>
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
                        <View style={styles.cancelContainer}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </View>
                    </TouchableWithoutFeedback>

                </View>
                <View>
                    <ScrollView>
                        <View >
                            <FlatList
                                style={{marginHorizontal:2}}
                                data={this.state.movieList}
                                numColumns={3}
                                keyExtractor={(index) => index.toString()}
                                columnWrapperStyle={{margin:5}}
                                renderItem={({item})=>this.renderItem(item)}
                                />
                        </View>
                    </ScrollView>
                </View>
                    
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
    title: {
        color: 'white',
        width:140,
        fontSize:18,
        fontWeight:'600'
    },
    ReleaseDate:{
      color:'grey',
      fontSize:16,
      marginTop:3
    },
    cancelContainer:{
        width:60,
        height:30,
        alignItems:"center",
        justifyContent:"center"
    }
})
 
export default Search;