import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../../containers/app/Profile';
import MapScreen from '../../containers/app/MapScreen';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../containers/app/home';
import AllTanent from '../../containers/app/AllTanent';
import NewRequest from '../../containers/app/NewRequest';
import Tnaent1 from '../../containers/app/Tanent1';
import Register from '../../containers/app/Register';
import Account from '../../containers/app/Account';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()


const HomeStack=()=>{
  return (
    <Stack.Navigator>

      <Stack.Screen name="Home" component={Home} 
      options={{
        headerShown:false
      }}
      />

      <Stack.Screen name="AllTanent" component={AllTanent} 
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="NewRequest" component={NewRequest} 
      options={{
        headerShown:false
      }}
      />
            <Stack.Screen name="Tnaent1" component={Tnaent1} 
      options={{
        headerShown:false
      }}
      />
       <Stack.Screen name="Account" component={Account} 
      options={{
        headerShown:false
      }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
      <Tab.Navigator tabBarOptions={{
        style:{backgroundColor:"black",

      }
      }}>
      <Tab.Screen 
        options={{tabBarIcon:()=> 
          <Ionicons
            size={30}
             name="add-circle"
             color="#ffcc66"/>}}
        name="Register" component={Register}/>

        <Tab.Screen 
        options={{tabBarIcon:()=> <Entypo size={30} name="home" color="#ffcc66"/>}}
         name="Home" component={HomeStack} />

        <Tab.Screen
        options={{tabBarIcon:()=> 
        <MaterialCommunityIcons
          size={30}
           name="face-profile" 
           color="#ffcc66"/>}}
         name="Profile" component={Profile} />

    <Tab.Screen
        options={{tabBarIcon:()=> 
        <MaterialCommunityIcons
          size={30}
           name="map" 
           color="#ffcc66"/>}}
         name="Map" component={MapScreen} />
      

      </Tab.Navigator>
  );
}
