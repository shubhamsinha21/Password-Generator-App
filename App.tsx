import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function App() {
  return (
   <View>
    <Text style={styles.headerText}>Password Generator</Text>
   </View>
  )
}

const styles= StyleSheet.create({
  headerText:{
    color:'white'
  }
})
export default App
