import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./Screens/Home";
import ViewScreen from "./Screens/View";
import UpdateScreen from "./Screens/Update"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
               <Stack.Screen name="View" component={ViewScreen} />
                              <Stack.Screen name="Update" component={UpdateScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;