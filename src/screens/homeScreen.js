
import React, {Component} from 'react';
import {Platform,StyleSheet,TouchableHighlight, Text, View,StatusBar,Image} from 'react-native';
import NavigationBar from '../components/navigationBar'

const imgMenuCliente = require('../img/menu_cliente.png')
const imgMenuContato = require('../img/menu_contato.png')
const imgMenuEmpresa = require('../img/menu_empresa.png')
const imgMenuServico = require('../img/menu_servico.png')
const imgLogo = require('../img/logo.png')

 
export default class homeScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden={false}></StatusBar>
        <NavigationBar></NavigationBar>
        <View tyle={style.viewMenuPrincipal}>
          <View style={style.viewImgLogo}>
              <Image  source={imgLogo} style={style.imgLogoGeral}/>
          </View>
          <View style={style.viewImgMenu}>
              <TouchableHighlight onPress={ ()=>{
                this.props.navigator.push({id: 'b'})
              }} >
                <Image source={imgMenuCliente} style={style.imgGeral}/>
              </TouchableHighlight>
              <Image source={imgMenuContato} style={style.imgGeral}/>
          </View>
          <View style={style.viewImgMenu}>
              <Image source={imgMenuEmpresa} style={style.imgGeral}/>
              <Image source={imgMenuServico} style={style.imgGeral}/>
          </View>
        </View>
    </View>
    );
  }
}

const style = StyleSheet.create({
  viewImgLogo: {
    marginTop: 20,
    alignItems: 'center',
  },
  viewImgMenuPrincipal: {
    alignItems: 'center',

  },
  viewImgMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imgGeral: {
    borderRadius: 30,   
    margin: 15,
  }

})