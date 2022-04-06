import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import FaceScreen from './screens/FaceScreen';
import QRCodeScreen from './screens/QRCodeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CameraScreen from './screens/CameraScreen';



export default function App() {
  const Stack = createStackNavigator();
  return (

    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>

          <Stack.Navigator>
            <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen 
            name="FaceScreen" 
            component={FaceScreen} 
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen 
            name="CameraScreen" 
            component={CameraScreen} 
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen 
            name="QRCodeScreen" 
            component={QRCodeScreen} 
            options={{
              headerShown: false,
            }}
            />
          </Stack.Navigator>

          
        </SafeAreaProvider>
      </NavigationContainer>


    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
