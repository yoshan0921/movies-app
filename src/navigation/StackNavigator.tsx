import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './TabNavigator';
import {DetailScreen} from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          title: 'Movies App',
          headerStyle: {
            backgroundColor: '#2D3E51',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: '', // Title is set in the DetailScreen
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitle: 'Back to List',
          headerBackTitleStyle: {
            fontSize: 16,
          },
        }}
      />
    </Stack.Navigator>
  );
};
