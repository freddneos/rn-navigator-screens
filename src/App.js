
import React, {Component} from 'react';
import { Navigator }  from 'react-native-deprecated-custom-components'
import ClientesScreen from './screens/clientesScreen'
import HomeScreen from './screens/homeScreen'

 
export default class App extends Component {
  render() {
    return (
     
      <Navigator 
      initialRoute={{id: 'a'}}
      renderScene={(router,navigator)=>{

        if (router.id == 'a'){
          return (<HomeScreen navigator={navigator}/>)
        }

        if (router.id == 'b'){
          return (<ClientesScreen navigator={navigator}/>)
        }

      }}
      />
    )
  }
}
