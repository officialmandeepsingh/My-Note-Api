import React from 'react';
import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  ViewContainer: {flex: 1, padding: 10},
  headingTitle: {fontSize: 24, fontWeight: 'bold', marginBottom: 15},
  textInput: {
    width: 300,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    fontSize: 18,
    shadowColor: 'blue',
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textRight: {
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    textAlign: 'right',
    fontSize: 15,
    fontWeight: 'bold',
  },
  touchableButtonContainer: {
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    width: 180,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: 'green',
  },
  error: {
    backgroundColor: 'red',
  },
  info: {
    backgroundColor: 'blue',
  },
  whiteTextColor: {
    color: 'white',
  },
  blackTextColor: {
    color: 'black',
  },
});

export default Styles;
