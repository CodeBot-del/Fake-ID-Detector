import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity, Image, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';



const FaceScreen = () => {

    const navigation = useNavigation();
    const [image, setImage] = useState(null);
    // function to choose images from device
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    async function fetchList() {
        let response = await fetch('http://172.17.17.149:8000/employee/api/list/');
        let data = await response.json();
        console.log(data);
    }
    

    return (
        <SafeAreaView style={[styles.container, tw`h-full`]}>
            <View style={[tw`p-6 items-center pt-10`, { height: 500 }]}>
                <Text style={tw`p-2 font-semibold text-lg`}>Facial Scan</Text>
                {/* assign pickImage function to a component */}
                <TouchableOpacity
                    onPress={pickImage}
                    style={[tw`bg-gray-500 items-center justify-center mb-5`, { height: 200, width: 300, borderRadius: 10 }]}
                >
                    <Icon
                        style={tw`p-2 w-20 `}
                        name="upload"
                        color="white"
                        type="entypo"
                        size={50}
                    />
                    <Text style={tw`text-white text-center`}>Upload ID Card Image</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={fetchList}
                    style={[tw`bg-black items-center justify-center`, { height: 60, width: 100, borderRadius: 15 }]}
                >
                    <Text style={tw`text-white text-center text-lg font-semibold `}>Scan</Text>
                </TouchableOpacity>
                <View style={tw`pt-4`}>
                    {/* display the chosen image */}
                    {image && <Image source={{ uri: image }} style={[{ width: 200, height: 200 }, tw``]} />}
                </View>
                
            </View>
            <View style={[tw`mr-2 mt-6 p-4`, styles.cameraContainer]}>
                {/* navigate to camera screen */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('CameraScreen')}
                    style={[tw`bg-black items-center justify-center rounded-full mt-8`, { height: 60, width: 60 }]}
                >
                    <Icon
                        style={tw`p-2 w-20 `}
                        name="camera"
                        color="white"
                        type="antdesign"
                        size={40}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default FaceScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    cameraContainer: {
        alignItems: 'flex-end',

    }
})