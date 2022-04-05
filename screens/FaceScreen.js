import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';



const FaceScreen = () => {
    return (
        <SafeAreaView style={[styles.container, tw`h-full`]}>
            <View style={[tw`p-6 items-center pt-10`,{height: 500}]}>
                <Text style={tw`p-2 font-semibold text-lg`}>Facial Scan</Text>
                <TouchableOpacity
                    style={[tw`bg-gray-400 items-center justify-center mb-5`, {height: 200, width: 300}]}
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

                <TouchableOpacity
                    style={[tw`bg-black items-center justify-center`, {height: 60, width: 100, borderRadius: 15}]}
                >
                    <Text style={tw`text-white text-center text-lg font-semibold `}>Scan</Text>
                </TouchableOpacity>
            </View>
            <View style={[tw`mr-2 mt-6 p-4`, styles.cameraContainer]}>
                <TouchableOpacity
                    style={[tw`bg-black items-center justify-center rounded-full mt-8`, {height: 60, width: 60}]}
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
    cameraContainer:{
        alignItems: 'flex-end',

    }
})