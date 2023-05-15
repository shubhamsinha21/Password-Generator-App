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
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatedPasswordString = (passwordLength: number) => {
    let charactersList = ''
    const upperCaseCharacters = 'ABCEDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
    const digitCharacters = '01235679'
    const specialCharacters = '!@#$%^&*()_+-=~'

    if(upperCase){
      charactersList += upperCase
    }
    if(lowerCase){
      charactersList += lowerCase
    }
    if(digitCharacters){
      charactersList += digitCharacters
    }
    if(specialCharacters){
      charactersList += specialCharacters
    }

    const passwordResult = createPassword(charactersList, passwordLength)
      setpassword(passwordResult)
      setisPasswordGenerated(true)
      setlowerCase(true)
      setupperCase(false)
      setNumbers(false)
      setSymbols(false)

  }
 
  const createPassword = (characters:string, passwordLength:number) => {
    let result =''
    for (let index = 0; index < passwordLength; index++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result = result + characters.charAt(characterIndex)
    }
    return result;
    console.log("hitesh")
  }

  const resetPassword = () => {
    setpassword('')
    setisPasswordGenerated(false)

  }

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
