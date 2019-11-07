import React ,{Component} from 'react';
import { StyleSheet,View,ScrollView } from 'react-native';

import List from '../Component/List.component'
import Slider from '../Component/Slider.component.js'
import Header from '../Component/Header.component.js'
import Menu from '../Component/Menu.component.js'

import Search from './Search.Page'
import Detail from './Detail.Page'

import SideMenu from 'react-native-side-menu'


class Home extends Component  {
  constructor(props){
    super(props)

    this.state={
      isOpen: false,
      itemSelected: 'Home'
    }
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
              <Slider/>
              <List navigation={this.props.navigation}/>
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
    top:15,
    backgroundColor: 'black',
  },
});
