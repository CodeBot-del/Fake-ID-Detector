import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,StatusBar } from 'react-native';
import { Camera } from 'expo-camera';
import tw from 'tailwind-react-native-classnames';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={[styles.container,]}>
      <Camera style={[styles.camera,]} type={type}>
        <View>
          <TouchableOpacity
            
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

export default CameraScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        marginTop: StatusBar.currentHeight,

        
    },
    camera:{
        flex: 1,
        height: '100%',
    }
 }); 