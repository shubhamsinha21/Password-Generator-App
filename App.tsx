import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
// form validation
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be a max of 16 characters')
    .required('Length is required'),
});

function App() {
  const [password, setpassword] = useState('');
  const [isPasswordGenerated, setisPasswordGenerated] = useState(false);
  const [lowerCase, setlowerCase] = useState(true);
  const [upperCase, setupperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatedPasswordString = (passwordLength: number) => {
    let charactersList = '';
    const upperCaseCharacters = 'ABCEDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const digitCharacters = '01235679';
    const specialCharacters = '!@#$%^&*()_+-=~';

    if (upperCase) {
      charactersList += upperCase;
    }
    if (lowerCase) {
      charactersList += lowerCase;
    }
    if (digitCharacters) {
      charactersList += digitCharacters;
    }
    if (specialCharacters) {
      charactersList += specialCharacters;
    }

    const passwordResult = createPassword(charactersList, passwordLength);
    setpassword(passwordResult);
    setisPasswordGenerated(true);
    setlowerCase(true);
    setupperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let index = 0; index < passwordLength; index++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result = result + characters.charAt(characterIndex);
    }
    return result;
    console.log('hitesh');
  };

  const resetPassword = () => {
    setpassword('');
    setisPasswordGenerated(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={passwordSchema}
            onSubmit={values => {
              console.log(values);
              generatedPasswordString(+values.passwordLength);
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              //empty renderer - <></>
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder='Enter here'
                      keyboardType='numeric'
                    />
                </View>
                <View style={styles.inputWrapper}></View>
                <View style={styles.inputWrapper}></View>
                <View style={styles.inputWrapper}></View>
                <View style={styles.inputWrapper}></View>

                <View style={styles.formActions}>
                  <TouchableOpacity>
                    <Text>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1
  },
  formContainer: {
    margin:8,
    padding:8
  },
  title: {
    fontSize:28,
    color:'white',
    fontWeight:"600",
    marginBottom:12
  },
  inputWrapper: {
    marginBottom:15,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row'

  },
  formActions: {
    flexDirection:'row',
    justifyContent:'center'
  },
  inputColumn: {
    flexDirection:'column'
  },
  inputStyle: {
    padding:8,
    width:'30%',
    borderRadius:4,
    borderWidth:1,
    borderColor:'#16213e'
  },
  heading:{
    fontSize:15
  },
  errorText:{
    fontSize:12,
    color:'#ff0d10'
  }

});
export default App;
