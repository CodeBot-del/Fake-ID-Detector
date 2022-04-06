import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Button } from 'react-native';
import { Camera } from 'expo-camera';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

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
        <View style={{flex: 1}}>
            <View style={[styles.cameraContainer,]}>
                <Camera
                    style={styles.fixedRatio}
                    type={type}
                    ratio={'1:1'}
                />

            </View>
            <Button
                title="Flip Image"
                onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                    );
                }}>
                {/* <Icon
                    style={tw`p-2 w-20 `}
                    name="retweet"
                    color="white"
                    type="entypo"
                    size={30}
                /> */}
            </Button>
        </View>
    );
}

export default CameraScreen

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: StatusBar.currentHeight,


    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1,
    }
}); 