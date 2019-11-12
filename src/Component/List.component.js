/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';

import ItemView from '../Component/itemContainer.component'

API='a4433b1b0534ad5410c7b737b6530f47'
apiURL= 'https://api.themoviedb.org/3'
imgURL= 'http://image.tmdb.org/t/p/original'

export default class List extends Component {
  constructor(props){
    super(props)

    this.state={
      Render_list:[]
    }
  }

componentDidMount(){
  const {contentPath}=this.props
  fetch(`${apiURL}/movie/${contentPath}?api_key=${API}`)
  .then(res=>res.json())
  .then(data=>this.setState({Render_list:data.results}))

}

renderItem=(item)=>{
    const {navigate} = this.props.navigation
    return(
        <View style={{flex:1}}>
          <TouchableWithoutFeedback onPress={() => navigate('Details', {item: item})}>
              <View>
                  <ItemView item={item}/>
              </View>
          </TouchableWithoutFeedback>
    </View>
    )
}
 
  render() {
    const {title,contentPath}=this.props
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.Category}>{title}</Text>
            <Text style={styles.ViewAllTxt} onPress={()=>this.props.navigation.navigate("ViewAll",{element:contentPath})}>View All</Text>
        </View>
        <View>
        <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={()=><View style={{width:10}}/>}
                data={this.state.Render_list.slice(0,9)}
                renderItem={({item})=>this.renderItem(item)}
                keyExtractor={item => item.id.toString()}

              />
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"auto",
    marginHorizontal:10
  },
  textContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
  },
  Category:{
      color: 'white',
       marginVertical:15,
       fontSize:22,
       fontWeight:'600'
  },

   ViewAllTxt:{
     color:'#FFAC00',
   }
});
