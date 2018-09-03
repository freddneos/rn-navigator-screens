
import React, {Component} from 'react';
import {Platform,StyleSheet, Text, View,StatusBar,Image} from 'react-native';
import NavigationBar from '../components/navigationBar'

const detalheCliente = require('../img/detalhe_cliente.png')
const cliente1 = require('../img/cliente1.png')
const cliente2 = require('../img/cliente2.png')


 
export default class clientesScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden={false}></StatusBar>
        <NavigationBar/>
        <View style={{alignItems: 'center'}} >
            <View style={style.cabec} >
                <Image source={detalheCliente} />
                <Text style={style.textCabec}> Nossos Clientes </Text>
            </View>
            <View style={style.viewPadrao}>
                <Image source={cliente1} style={style.imgPadrao}/>
                <Text>Nossos Clientes</Text>
            </View>
            <View style={style.viewPadrao} >
                <Image source={cliente2} style={style.imgPadrao} />
                <Text>Nossos Clientes</Text>
            </View>
        </View>
    </View>
    );
  }
}

const style = StyleSheet.create({
  cabec: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  textCabec:{
    fontSize: 30,
    color: '#b9c941',
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  viewPadrao: {
    alignItems: 'center',
    marginBottom: 20,

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