/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import {PrimaryButton} from '../../../components/Button/PrimaryButton';

const FbLogin = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <StatusBar translucent={false} barStyle={'dark-content'} />
        <View style={styles.container1}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Image
              source={require('../../../assets/images/3plusimage.png')}
              resizeMode={'contain'}
              style={{height: 40, width: 40}}
            />
            <Text style={styles.text1}>
              3Pluse.<Text style={styles.text2}>com</Text>
            </Text>
          </View>
          <Text style={styles.text3}>
            3Pluse helps you save and{'\n'}share your travel memories.
          </Text>
          <View style={styles.container2}>
            <TouchableOpacity style={styles.container3} activeOpacity={0.5}>
              <Image
                source={require('../../../assets/images/fbIcon.png')}
                resizeMode="contain"
                style={{
                  height: 35,
                  backgroundColor: '#1877F2',
                  width: 35,
                  marginRight: 5,
                }}
              />
              <Text style={styles.text4}>Continue with Facebook</Text>
            </TouchableOpacity>
            <View style={styles.position}>
              <Text style={styles.text5}>or</Text>
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Login or email"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.input2}
            placeholder="Password"
            placeholderTextColor="black"
          />
          <PrimaryButton Log={'Log In'} backgroundcolor={'#3b83f2'} />
          <View style={styles.line} />
          <PrimaryButton Log={'Creare Account'} backgroundcolor={'#29c73a'} />

          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.text6}>Forgotten password?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  container1: {
    width: '82%',
    backgroundColor: '#ebf5fb',
    alignSelf: 'center',
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 70,
  },
  text1: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    color: 'skyblue',
  },
  text3: {
    paddingVertical: 30,
    fontSize: 23,
    fontWeight: '400',
  },
  container2: {
    width: '108%',
    backgroundColor: 'white',
    height: 95,
    borderRadius: 16,
    borderColor: 'gray',
    borderWidth: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },

  container3: {
    height: 48,
    width: '73%',
    backgroundColor: '#1877F2',
    alignSelf: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    flexDirection: 'row',
  },
  text4: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  position: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 28,
    width: 28,
    borderRadius: 28,
    marginTop: 11,
  },
  text5: {
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '78%',
    height: 48,
    marginTop: 45,
    borderRadius: 6,
    paddingLeft: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 9,
  },
  input2: {
    backgroundColor: 'white',
    width: '78%',
    height: 48,
    marginTop: 30,
    borderRadius: 6,
    paddingLeft: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 9,
  },
  buttontext: {
    fontWeight: '500',
    fontSize: 16,
    color: 'white',
  },

  line: {
    width: '100%',
    height: 0.2,
    backgroundColor: 'lightgray',
    marginTop: 40,
  },
  button2text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  text6: {
    marginTop: 35,
    color: '#4c90ee',
    marginBottom: 20,
  },
});
export default FbLogin;
