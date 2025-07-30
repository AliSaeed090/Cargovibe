import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loading from '../screens/Loading';
import Welcome from '../screens/Welcome';
import React, { useEffect } from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';


const RootStack = createNativeStackNavigator();
type props = {};
const Navigator = (props: props) => {
 return (
    <NavigationContainer  >
      <RootStack.Navigator initialRouteName="Loading">
        <RootStack.Screen
          name="Loading"
          component={Loading}
          options={{ gestureEnabled: false, headerShown: false }}
        />
          <RootStack.Screen
          name="Welcome"
          component={Welcome}
          options={{ gestureEnabled: false, headerShown: false }}
        />

       
      </RootStack.Navigator>
    </NavigationContainer>
 )
};

export default Navigator;