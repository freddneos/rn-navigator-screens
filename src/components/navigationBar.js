
import React, {Component} from 'react';
import {Platform, Text,View,StyleSheet } from 'react-native';


 
export default class navigationBar extends Component {
  render() {
    return (
      <View style={style.navigationBar}>
        <Text style={style.navTitle}> ATM Consultoria</Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  navigationBar: {
        backgroundColor: 'white',
        padding: 5,
        height: 90,
        borderWidth: 0.5,
        marginTop: 37

    },
    navTitle :  {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        marginTop: 40,
        

    }
})