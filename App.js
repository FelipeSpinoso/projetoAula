import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import logo from './assets/vista.jpg'


function App() {

  return (
    <View>
      <Image source={logo} style={styles.imagem} />
      <Text style={styles.title}><FontAwesome name="user-circle" size={50} /> Olá Mundo</Text>
      <FontAwesome.Button
        name="shopping-cart"
        style={styles.botao}
      >Comprar</FontAwesome.Button>
    </View>
  )
}

const styles = StyleSheet.create({
  imagem: {
    width: '90%',
    height: 300,
    resizeMode: 'center'
  },
  botao: {
    width: 150,
    height: 30
  },
  title:{
    fontSize: 30,
    color: "#1A237E"

  }
})

export default App