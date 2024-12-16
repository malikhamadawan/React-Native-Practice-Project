/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ContinueButton} from '../../../components/Button/ContinueButton';

const PasswordChanged = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/Ok.png')}
        resizeMode={'contain'}
        style={{
          height: 35,
          width: 35,
          marginTop: 300,
          //   backgroundColor: 'red',
        }}
      />
      <Text style={styles.text}>Password Changed</Text>
      <Text style={styles.text1}>Yes password has been changed</Text>
      <Text style={styles.text2}>successfully.</Text>
      {/* <TouchableOpacity style={styles.container1}>
        <Text style={styles.text3}>Back to Login</Text>
      </TouchableOpacity> */}
      <View style={{width: '78%', marginTop:30}}>
        <ContinueButton Label={'Back to Login'} backgroundcolor={'#093ccf'} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  text: {
    fontSize: 28,
    fontWeight: '500',
    marginTop: 20,
  },
  text1: {
    fontSize: 16,
    opacity: 0.8,
    marginTop: 13,
  },
  text2: {
    fontSize: 13,
    opacity: 0.8,
    marginTop: 2,
  },
  container1: {
    height: 50,
    width: '88%',
    backgroundColor: '#093ccf',
    alignSelf: 'center',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  text3: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default PasswordChanged;
