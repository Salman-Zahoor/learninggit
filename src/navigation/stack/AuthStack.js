import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ForgotPassword from '../../containers/auth/ForgotPassword';
import Login from '../../containers/auth/Login';
import SignUp from '../../containers/auth/Signup';

const Stack = createStackNavigator();

const AuthStack= () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} 
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="SignUp" component={SignUp} 
      options={{
        headerShown:false
    }}
      />

<Stack.Screen name="ForgotPassword" component={ForgotPassword} 
      options={{
        headerShown:false
    }}
      />

    </Stack.Navigator>
  );
}

export default AuthStack