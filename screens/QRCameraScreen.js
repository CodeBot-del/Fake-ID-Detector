import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const QRCameraScreen = () => {
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            // get permission to use the camera
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
            // function to capture image
    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync(null);
            setImage(data.uri);
        }
    }
        // check for camera permission status
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <View style={[styles.cameraContainer,]}>
                {/* initialize the camera with aspect ratio of 1:1  */}
                <Camera
                    ref={ref => setCamera(ref)}
                    style={styles.fixedRatio}
                    type={type}
                    ratio={'1:1'}
                />

            </View>
            <View style={[tw` items-center ml-4`, styles.flipButton]}>
                {/* create a selfie and rear camera flipping */}
                <TouchableOpacity
                    
                    onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        );
                    }}>
                    <Icon
                        style={tw`p-2 w-20 `}
                        name="retweet"
                        color="white"
                        type="entypo"
                        size={30}
                    />
                </TouchableOpacity>
                </View>
                {/* create button that will navigate to results screen with the captured image */}
                <View style={[tw` items-center mr-5`, styles.sendButton]}>
                <TouchableOpacity
                    
                    onPress={() => navigation.navigate('QRResultScreen',{imageUri: image})}>
                    <Icon
                        style={tw`p-2 w-20`}
                        name="send"
                        color="white"
                        type="fontawesome"
                        size={30}
                    />
                </TouchableOpacity>
                </View>
                {/* button to capture image */}
                <View style={tw`items-center`}>
                <TouchableOpacity
                    style={[styles.roundButton, tw`rounded-full`]}
                    onPress={() => takePicture()}
                >
                    <Icon

                        name="circle"
                        color="white"
                        type="entypo"
                        size={50}
                    />
                </TouchableOpacity>
            </View>
            {/* display the captured image */}
            {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
        </View>
    );
}

export default QRCameraScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'row',
        


    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1,
    },
    roundButton: {
        marginTop: 1,
        width: 50, 
        backgroundColor: 'black',

    },
    flipButton: {
        marginTop: 0,
        width: 30,
        height: 'auto', 
        position: 'absolute',
        justifyContent: 'center',
    },
    sendButton: {
        marginTop: 0,
        width: 50,
        height: 'auto', 
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'flex-end',
    },
}); 