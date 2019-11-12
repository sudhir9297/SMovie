import React, {Component} from 'react'
import {
  View,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
} from 'react-native';
import ItemView from '../Component/itemContainer.component'

class ListConstainer extends Component{
    renderItem=(item,navigate)=>{

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

    render(){
        const {list,navigate}=this.props
        return(
            <View>
                <ScrollView>
                    <View >
                        <FlatList
                            style={{marginHorizontal:2}}
                            data={list}
                            numColumns={3}
                            keyExtractor={(item) => item.id.toString()}
                            columnWrapperStyle={{margin:5}}
                            renderItem={({item})=>this.renderItem(item,navigate)}
                            />
                    </View>
                </ScrollView>
            </View>
        )

    }
    
}

export default ListConstainer