import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateAccount from '../screens/Auth/CreateAccount/CreateAccount';
import CreateNewPassword from '../screens/Auth/CreateNewPassword/CreateNewPassword';
import Login from '../screens/Auth/Login/Login';
import PasswordChanged from '../screens/Auth/PasswordChanged/PasswordChanged';
import ResetPassword from '../screens/Auth/Reset/ResetPassword';
import SignUp from '../screens/Auth/SignUp/SignUp';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen
            name="CreateNewPassword"
            component={CreateNewPassword}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="PasswordChanged" component={PasswordChanged} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export {MainStack};
