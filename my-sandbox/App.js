import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';
import Store from './src/store';
import {Provider} from 'react-redux'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import StackNavigator from './navigation/StackNavigator';

SplashScreen.preventAutoHideAsync();



export default function App() {

  

  const [fontsLoaded,fontError] = useFonts({
    'Bold' : require("./assets/fonts/Poppins-Bold.ttf"),
    'SemiBold' : require("./assets/fonts/Poppins-SemiBold.ttf"),
    'Regular' : require("./assets/fonts/Poppins-Regular.ttf"),
  
  })
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store = {Store}>
       <View style={styles.container} onLayout={onLayoutRootView}>
      {/* <Login/> */}
      <NavigationContainer>
       <StackNavigator/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
    </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
