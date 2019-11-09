import React ,{Component} from 'react';
import { StyleSheet,View,ScrollView } from 'react-native';

import List from '../Component/List.component'
import Slider from '../Component/Slider.component.js'
import Header from '../Component/Header.component.js'
import Menu from '../Component/Menu.component.js'

import Search from './Search.Page'
import Detail from './Detail.Page'

import SideMenu from 'react-native-side-menu'

API='a4433b1b0534ad5410c7b737b6530f47'
apiURL= 'https://api.themoviedb.org/3'
imgURL= 'http://image.tmdb.org/t/p/original'


class Home extends Component  {
  constructor(props){
    super(props)

    this.state={
      isOpen: false,
      itemSelected: 'Home',
      Trend_list:[]
    }
  }

componentDidMount(){
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=a4433b1b0534ad5410c7b737b6530f47')
    .then(res=>res.json())
    .then(data=>this.setState({Trend_list:data.results}))
}

  navigationOptions = {
    header: null,  
}

toggle=()=>{
        this.setState({
          isOpen:!this.state.isOpen
      })
  }
        
  updateMenu=(isOpen)=>{
    this.setState({isOpen})
}

  itemSelected=(item)=>{
    this.setState({
        itemSelected: item,
        isOpen: false
    })
}

 render(){
  return (
    <View style={{flex:1}}>
        <SideMenu
          menu={<Menu 
            navigation={this.props.navigation}
            itemSelected={this.itemSelected} 
            itemSelectedValue={this.state.itemSelected}
              />}
              isOpen={this.state.isOpen}
              onChange={(isOpen) => this.updateMenu(isOpen)}
              style={{flex: 1}}
        >
            <ScrollView style={[{flex: 1}, styles.container]}>
              <Header navigation={this.props.navigation} toggle={this.toggle}/>
              <Slider  item={this.state.Trend_list}/> 
              <List navigation={this.props.navigation} contentPath="now_playing" title="Now Playing" />
              <List navigation={this.props.navigation} contentPath="top_rated" title="Top Rated" />
              <List navigation={this.props.navigation} contentPath="popular" title="Popular" />
              <List navigation={this.props.navigation} contentPath="upcoming" title="Upcoming" />
            </ScrollView>       
        </SideMenu> 
    </View>
  )
 }
}

export default Home 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#202328',
  },
});
