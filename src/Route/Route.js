import Home from '../Pages/Home.Page'
import Details from  '../Pages/Detail.Page'
import Search from '../Pages/Search.Page'

const Route={
    Home: {
        screen: Home, 
        navigationOptions: ({navigation}) => ({
            header: false
          })
    },
    Details: {
        screen: Details,
        navigationOptions: ({navigation}) => ({
            header: false
          })
    },
    Search: {
        screen: Search,
        navigationOptions: ({navigation}) => ({
            header: false
        })
    },
}

export default Route;