/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {AppInput} from '../../../components/Input/AppInput';
import {ContinueButton} from '../../../components/Button/ContinueButton';

const CreateNewPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create New Password</Text>
      <Text style={styles.text1}>
        Create a new Password to access your account
      </Text>
      <AppInput
        icon={true}
        imageSrc={require('../../../assets/images/lock.png')}
        label={'New Password'}
        placeholder={'Enter Password'}
      />
      <View style={{marginTop: 20}}>
        <AppInput
          icon={true}
          imageSrc={require('../../../assets/images/lock.png')}
          label={'Confirm Password'}
          placeholder={'Enter Password'}
        />
      </View>
      <View style={{width: '88%', alignSelf: 'center'}}>
        <ContinueButton Label={'Reset'} backgroundcolor={'#093ccf'} />
      </View>
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
    marginBottom: 50,
  },
});
export default CreateNewPassword;
