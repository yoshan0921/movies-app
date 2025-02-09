import React from 'react';
import './global.css';
import {GluestackUIProvider} from './components/ui/gluestack-ui-provider';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigation/StackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
