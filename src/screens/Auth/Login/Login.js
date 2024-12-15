/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Text style={styles.text1}>Login to get started</Text>
      <Text style={styles.text2}>Email Address</Text>
      <View style={styles.image}>
        <Image
          source={require('../../../assets/images/emailicon.png')}
          resizeMode={'contain'}
          style={{height: 20, width: 20, marginHorizontal: 8}}
        />
        <TextInput style={styles.input} placeholder="Enter Email" />
      </View>
      <TouchableOpacity>
        <Text style={styles.text3}>Forgot Password?</Text>
      </TouchableOpacity>
      <Text style={styles.text4}>Password</Text>
      <View style={styles.image1}>
        <Image
          source={require('../../../assets/images/lock.png')}
          resizeMode={'contain'}
          style={{height: 20, width: 20, marginHorizontal: 8}}
        />
        <TextInput style={styles.input} placeholder="Enter Password" />
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/hiddenItem.png')}
            resizeMode={'contain'}
            style={{
              height: 25,
              width: 25,
            }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.container1}>
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
  text2: {
    marginTop: 50,
    fontWeight: '350',
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
  text4: {
    marginTop: 30,
    fontWeight: '350',
    marginLeft: 24,
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
  image: {
    backgroundColor: '#e5e7e9',
    height: 48,
    width: '88%',
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
  },
  image1: {
    backgroundColor: '#e5e7e9',
    height: 48,
    width: '88%',
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
  },
});

export default Login;
