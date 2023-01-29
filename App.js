import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

//import Home from './src/screens/home/Home';
import Onboarding from './src/screens/onboarding/Onboarding';
import TabNav from './src/navigation/TabNav';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: 'white',
            headerShown: false,
            headerStyle: {backgroundColor: 'tomato'},
            ...TransitionPresets.SlideFromRightIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}>
          <Stack.Screen name="onboarding" component={Onboarding} />
          <Stack.Screen name="tabNav" component={TabNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
