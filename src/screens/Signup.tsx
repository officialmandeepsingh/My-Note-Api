import React, {useState} from 'react';
import {Text, TextInput, TouchableHighlight, View} from 'react-native';
import Styles from '../utils/Styles';

const SignUp = (props: any) => {
  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.headingTitle}>Register New User</Text>
      <TextInput
        style={Styles.textInput}
        placeholder="Enter Full Name"
        value={name}
        onChangeText={text => setName(text)}
      />
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

      <TouchableHighlight
        onPress={() => {
          SignUpAPI(name, emailId, password, props);
        }}
        style={[Styles.touchableButtonContainer, Styles.primary]}>
        <Text style={[Styles.buttonTitle, Styles.whiteTextColor]}>
          Register
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const SignUpAPI = (name: String, emailId: String, password: String, props) => {
  const URL = 'http://10.0.2.2:3000';
  fetch(`${URL}/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      emailId,
      password,
    }),
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('===================================');
      console.log(JSON.stringify(data));
      console.log('====================================');
      props.navigation.navigate('Login');
    })
    .catch(error => {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    });
};

export default SignUp;
