/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const CreateNewPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create New Password</Text>
      <Text style={styles.text1}>
        Create a new Password to access your account
      </Text>
      <Text style={styles.text2}>New Password</Text>
      <View style={styles.container1}>
        <Image
          source={require('../../../assets/images/lock.png')}
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
            source={require('../../../assets/images/hiddenItem.png')}
            resizeMode={'contain'}
            style={{
              height: 25,
              width: 25,
              alignSelf: 'center',
              marginLeft: 5,
            }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text3}>Confirm Password</Text>
      <View style={styles.container2}>
        <Image
          source={require('../../../assets/images/lock.png')}
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
            source={require('../../../assets/images/hiddenItem.png')}
            resizeMode={'contain'}
            style={{
              height: 25,
              width: 25,
              alignSelf: 'center',
              marginLeft: 4,
            }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.container3}>
        <Text style={styles.text4}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 60,
    marginLeft: 25,
    fontSize: 22,
    fontWeight: '500',
  },
  text1: {
    marginLeft: 25,
    marginTop: 15,
    opacity: 0.7,
  },
  text2: {
    marginLeft: 25,
    marginTop: 65,
    fontSize: 16,
  },
  text3: {
    marginLeft: 25,
    marginTop: 35,
    fontSize: 16,
  },
  container1: {
    width: '88%',
    height: 48,
    alignSelf: 'center',
    borderRadius: 6,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    width: '88%',
    height: 48,
    alignSelf: 'center',
    borderRadius: 6,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 48,
    width: '81%',
    alignSelf: 'center',
    paddingLeft: 6,
  },
  container3: {
    backgroundColor: '#093ccf',
    width: '88%',
    height: 48,
    alignSelf: 'center',
    borderRadius: 6,
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text4: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default CreateNewPassword;
