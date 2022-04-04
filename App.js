import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

// setup redux

export default function App() {
  return (

    <Provider>
      <View style={styles.container}>
        <Text>Lets Build Alpha AI</Text>
        <StatusBar style="auto" />
      </View>
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
