/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  LoginScreenStack,
  RootStackScreenStack,
} from './navigation/StackNavigator';
import {InventoryContext, InventoryProvider} from './context';

const App = () => {
  const {authenticated} = useContext(InventoryContext);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        {!authenticated ? <LoginScreenStack /> : <RootStackScreenStack />}
      </NavigationContainer>
    </>
  );
};

function AppProvider() {
  return (
    <InventoryProvider>
      <App />
    </InventoryProvider>
  );
}

export default AppProvider;
