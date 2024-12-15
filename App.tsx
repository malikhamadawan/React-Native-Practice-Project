import React from 'react';
import FbLogin from './src/screens/Auth/FbLogin/FbLogin';
import CreateAccount from './src/screens/Auth/CreateAccount/CreateAccount';
import PasswordChanged from './src/screens/Auth/PasswordChanged/PasswordChanged';
import Login from './src/screens/Auth/Login/Login';
import ResetScreen from './src/screens/Auth/Reset/ResetPassword';
import CreateNewPassword from './src/screens/Auth/CreateNewPassword/CreateNewPassword';
const App = () => {
  return (
    <>
      <Login />
      {/* <ResetScreen /> */}
      {/* <CreateNewPassword  /> */}
      {/* <PasswordChanged /> */}
      {/* <CreateAccount /> */}
      {/* <FbLogin /> */}
    </>
  );
};

export default App;
