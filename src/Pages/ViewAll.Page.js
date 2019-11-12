import React from 'react'
import {
    View,  
} from 'react-native'

import ListContainer from '../Component/listContainer.component'

imgURL= 'http://image.tmdb.org/t/p/original'
apiURL= 'https://api.themoviedb.org/3'
API='a4433b1b0534ad5410c7b737b6530f47'


class ViewAll extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            List:[]
         }
    }

   componentDidMount()
   {
    text=this.props.navigation.getParam('element');  
    fetch(`${apiURL}/movie/${text}?api_key=${API}`)
    .then(res=>res.json())
    .then(data=>this.setState({List:data.results}))
   }

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{flex:1,backgroundColor:"#202328",paddingTop:30}}>
                    <ListContainer navigate={navigate} list={this.state.List}/>
            </View> 
        )
    }
}

export default ViewAll;