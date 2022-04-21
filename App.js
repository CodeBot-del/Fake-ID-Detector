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
import ResultScreen from './screens/ResultScreen';
import QRCameraScreen from './screens/QRCameraScreen';
import QRResultScreen from './screens/QRResultScreen';



export default function App() {
  // initialize stack navigator
  const Stack = createStackNavigator();
  return (

    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          {/* define all screens inside the stack navigator according to their positions */}
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
            <Stack.Screen 
            name="QRCameraScreen" 
            component={QRCameraScreen} 
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen 
            name="ResultScreen" 
            component={ResultScreen} 
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen 
            name="QRResultScreen" 
            component={QRResultScreen} 
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
