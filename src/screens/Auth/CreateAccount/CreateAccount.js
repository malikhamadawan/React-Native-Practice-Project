/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {AppInput} from '../../../components/Input/AppInput';
import PhoneButtonInput from '../../../components/Button/PhoneButtonInput';
import {useNavigation} from '@react-navigation/native';

const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Account</Text>
      <Text style={styles.text1}>Sign up to get started</Text>

      <AppInput
        icon={false}
        imageSrc={require('../../../assets/images/user.webp')}
        label={'Name'}
        placeholder={'Enter First and Last Name '}
      />

      <AppInput
        icon={false}
        imageSrc={require('../../../assets/images/emailicon.png')}
        label={'Email'}
        placeholder={'Enter Email '}
      />
      <Text style={{fontSize: 17, marginLeft: 23, marginTop: 18}}>Phone</Text>

      <PhoneButtonInput />
      <AppInput
        icon={true}
        imageSrc={require('../../../assets/images/lock.png')}
        label={'Password'}
        placeholder={'Enter Password'}
      />
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.text3}>Create Account</Text>
      </TouchableOpacity>
      <Text style={styles.text4}>OR</Text>
      <Text style={styles.text5}>Sign up with</Text>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.container3}>
          <Image
            source={require('../../../assets/images/google-icon-logo-symbol-free-png.webp')}
            resizeMode={'contain'}
            style={{
              height: 22,
              width: 22,
              alignSelf: 'center',
              marginRight: 8,
            }}
          />
          <Text style={styles.text8}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container4}>
          <Image
            source={require('../../../assets/images/FbLogoBlue.webp')}
            resizeMode={'contain'}
            style={{
              height: 22,
              width: 22,
              marginRight: 5,
            }}
          />
          <Text style={styles.text9}>Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container5}>
        <Text style={styles.text6}>Already have an account?</Text>
        <TouchableOpacity>
          <Text
            style={styles.text7}
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
    marginLeft: 23,
    fontSize: 25,
    fontWeight: '450',
    marginTop: 50,
  },
  text1: {
    marginLeft: 23,
    marginTop: 5,
    opacity: 0.8,
  },

  touch: {
    width: '88%',
    height: 48,
    backgroundColor: '#093ccf',
    alignSelf: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
  },
  text3: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  text4: {
    alignSelf: 'center',
    marginTop: 40,
    fontSize: 16,
  },
  text5: {
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 13,
    opacity: 0.7,
  },
  container2: {
    width: '100%',
    height: 48,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container3: {
    backgroundColor: Platform.select({
      ios: '#f7f9f9',
      android: '#f7f9f9',
    }),
    height: 48,
    width: '35%',
    borderRadius: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  container4: {
    backgroundColor: Platform.select({
      ios: '#f7f9f9',
      android: '#f7f9f9',
    }),
    height: 48,
    width: '35%',
    marginLeft: 20,
    borderRadius: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  text6: {
    fontSize: 15,
  },
  container5: {
    flexDirection: 'row',
    height: 30,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text7: {
    fontWeight: '500',
    color: '#0d64ea',
  },
  text8: {
    fontSize: 15,
  },
  text9: {
    fontSize: 15,
  },
});
export default CreateAccount;
