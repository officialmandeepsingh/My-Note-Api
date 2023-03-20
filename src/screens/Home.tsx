import React, {useEffect, useState} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Styles from '../utils/Styles';

const Home = (props: any) => {
  return (
    <View style={Styles.ViewContainer}>
      {props.route?.params?.name ? (
        <Text style={Styles.textRight}>
          `Welcome ${props.route.params.name}`
        </Text>
      ) : null}
    </View>
  );
};

export default Home;
