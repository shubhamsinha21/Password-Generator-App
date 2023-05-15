import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// form validation
import * as Yup from 'yup'

const passwordSchema = Yup.object().shape(
  {
    passwordLength: Yup.number().min(4, 'Should be min of 4 characters')
    .max(16, 'Should be a max of 16 characters')
    .required('Length is required')
  }
)

function App() {
  const [password, setpassword] = useState('')
  const [isPasswordGenerated, setisPasswordGenerated] = useState(false)
  const [lowerCase, setlowerCase] = useState(true)
  const [upperCase, setupperCase] = useState(false)
  const [numbers, useNumbers] = useState(false)
  const [symbols, useSymbols] = useState(false)

  

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
