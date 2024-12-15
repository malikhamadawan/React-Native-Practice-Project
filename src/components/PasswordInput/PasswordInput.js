/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';

const PasswordInput = () => {
  return (
    <View>
      <Text style={styles.text3}>Password</Text>
      <View style={styles.container1}>
        <Image
          source={require('../../assets/images/lock.png')}
          resizeMode={'contain'}
          style={{
            height: 23,
            width: 23,
            alignSelf: 'center',
            marginRight: 5,
          }}
        />
        <TextInput style={styles.input} placeholder="Enter Password" />
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/images/hiddenItem.png')}
            resizeMode={'contain'}
            style={{
              height: 25,
              width: 25,
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text3: {
    marginLeft: 25,
    marginTop: 35,
  },
  container1: {
    backgroundColor: '#e5e7e9',
    height: 48,
    width: '88%',
    alignSelf: 'center',
    borderRadius: 6,
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    height: 48,
    width: '75%',
    alignSelf: 'center',
    marginRight: 13,
    paddingLeft: 6,
  },
});

export {PasswordInput};
