import React, {useState} from 'react';
import {Text, TextInput, TouchableHighlight, View} from 'react-native';
import Styles from '../utils/Styles';

const ForgotPassword = (props: any) => {
  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userId, setUserId] = useState(null);
  const [isProfileMatched, setProfileMatched] = useState(false);

  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.headingTitle}>Reset Password</Text>
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
      {isProfileMatched ? (
        <View>
          <TextInput
            style={Styles.textInput}
            placeholder="Enter New Password"
            value={password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            style={Styles.textInput}
            placeholder="Enter Confirm Password"
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>
      ) : null}
      <TouchableHighlight
        onPress={() =>
          ResetPasswordButton(name, emailId, (status: boolean, id) => {
            setUserId(id);
            setProfileMatched(status);
          })
        }
        style={[Styles.touchableButtonContainer, Styles.primary]}>
        <Text style={[Styles.buttonTitle, Styles.whiteTextColor]}>
          Reset Password
        </Text>
      </TouchableHighlight>
      {isProfileMatched ? (
        <TouchableHighlight
          onPress={() =>
            ChangePasswordButton(
              password,
              confirmPassword,
              name,
              emailId,
              userId,
              (status: Boolean) => {
                status ? props.navigation.navigate('Login') : null;
              },
            )
          }
          style={[Styles.touchableButtonContainer, Styles.primary]}>
          <Text style={[Styles.buttonTitle, Styles.whiteTextColor]}>
            Change Password
          </Text>
        </TouchableHighlight>
      ) : null}
    </View>
  );
};

const ResetPasswordButton = (
  enteredName: String,
  enteredEmailId: String,
  callback: any,
) => {
  const URL = 'http://10.0.2.2:3000';
  fetch(`${URL}/users?q=${enteredEmailId}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('===================================');
      console.log(JSON.stringify(data));
      console.log('====================================');
      const response = JSON.parse(JSON.stringify(data));
      const {name, emailId, id} = response[0];
      name === enteredName ? callback(true, id) : callback(false, null);
    })
    .catch(error => {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    });
};

const ChangePasswordButton = (
  password: String,
  confirmNewPassword: String,
  name: String,
  emailId: String,
  userId: any,
  callback: any,
) => {
  if (password === confirmNewPassword) {
    const URL = 'http://10.0.2.2:3000';
    fetch(`${URL}/users/${userId}`, {
      method: 'PUT',
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
        callback(true);
      })
      .catch(error => {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        callback(false);
      });
  }
};
export default ForgotPassword;
