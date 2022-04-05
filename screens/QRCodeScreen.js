import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const QRCodeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Here is the QR stuff...</Text>
    </SafeAreaView>
  )
}

export default QRCodeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: StatusBar.currentHeight,
    
}
})