import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppInput} from '../../../components/Input/AppInput';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Text style={styles.text1}>Login to get started</Text>
      <AppInput
        icon={false}
        imageSrc={require('../../../assets/images/emailicon.png')}
        label={'Email'}
        placeholder={'Enter your Email '}
      />
      <TouchableOpacity>
        <Text style={styles.text3}>Forgot Password?</Text>
      </TouchableOpacity>
      <AppInput
        icon={true}
        imageSrc={require('../../../assets/images/lock.png')}
        label={'Password'}
        placeholder={'Enter your Password'}
      />
      <TouchableOpacity style={styles.container1} activeOpacity={0.5}>
        <Text style={styles.text5}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text6}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '470',
    marginTop: 90,
    marginLeft: 24,
  },
  text1: {
    marginTop: 8,
    color: 'black',
    opacity: 0.8,
    marginLeft: 24,
  },
  input: {
    height: 48,
    width: '80%',
    alignSelf: 'center',
  },
  text3: {
    textAlign: 'right',
    marginRight: 24,
    marginTop: 20,
    color: '#2459f2',
  },
  container1: {
    backgroundColor: '#023bdf',
    height: 50,
    width: '88%',
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  text5: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  text6: {
    alignSelf: 'center',
    marginTop: 35,
    fontSize: 15,
    color: '#2352db',
  },
});

export default Login;
