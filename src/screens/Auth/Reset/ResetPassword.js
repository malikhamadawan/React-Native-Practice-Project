/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ContinueButton} from '../../../components/Button/ContinueButton';
import {AppInput} from '../../../components/Input/AppInput';
import {useNavigation} from '@react-navigation/native';

const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reset Password</Text>
      <Text style={styles.text1}>
        Enter email address and link to reset your password
      </Text>
      <Text style={styles.text2}>will be sent to you</Text>
      <AppInput
        icon={true}
        imageSrc={require('../../../assets/images/lock.png')}
        label={'Password'}
        placeholder={'Enter Password'}
      />
      <View style={{width: '88%', alignSelf: 'center', marginTop: 210}}>
        <ContinueButton
          Label={'Continue'}
          backgroundcolor={'#093ccf'}
          onpress={() => {
            navigation.navigate('PasswordChanged');
          }}
        />
      </View>
      <View style={styles.container3}>
        <Text>Remember Password?</Text>
        <TouchableOpacity>
          <Text
            style={styles.text5}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 70,
    marginLeft: 25,
    fontSize: 26,
    fontWeight: '400',
  },
  text1: {
    marginLeft: 25,
    marginTop: 20,
    opacity: 0.7,
  },
  text2: {
    marginLeft: 25,
    marginTop: 10,
    opacity: 0.7,
  },
  container3: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 270,
  },
  text5: {
    color: '#0d64ea',
    fontWeight: '500',
  },
});
export default ResetPassword;
