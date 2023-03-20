import React, {useEffect, useState} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Styles from '../utils/Styles';

const Login = (props: any) => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    setEmailId('');
    setPassword('');
  }, []);

  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.headingTitle}>Login Screen</Text>
      <TextInput
        style={Styles.textInput}
        placeholder="Enter Email Id"
        value={emailId}
        onChangeText={text => setEmailId(text)}
      />
      <TextInput
        style={Styles.textInput}
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Pressable onPress={() => props.navigation.navigate('ForgotPassword')}>
        <Text>Forgot Password</Text>
      </Pressable>
      <TouchableHighlight
        onPress={() => loginAPI(emailId, password)}
        style={[Styles.touchableButtonContainer, Styles.primary]}>
        <Text style={[Styles.buttonTitle, Styles.whiteTextColor]}>Submit</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => props.navigation.navigate('SignUp')}
        style={[Styles.touchableButtonContainer, Styles.info]}>
        <Text style={[Styles.buttonTitle, Styles.whiteTextColor]}>
          Register New User
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const loginAPI = (emailId, enteredPassword) => {
  const URL = 'http://10.0.2.2:3000';
  // console.warn(`${URL}/users?q=${emailId}`);
  if (emailId && enteredPassword) {
    fetch(`${URL}/users?q=${emailId}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log('===================================');
        console.log(JSON.stringify(data));
        console.log('====================================');
        const response = JSON.parse(JSON.stringify(data));
        const {name, password} = response[0];
        password === enteredPassword
          ? console.warn('Login')
          : console.warn(`Hi! ${name} you're entered wrong password`);
      })
      .catch(error => {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      });
  }
};
export default Login;
