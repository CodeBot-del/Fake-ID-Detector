import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';



const FaceScreen = () => {
    return (
        <SafeAreaView style={[styles.container, tw`h-full`]}>
            <Text>Here is the facial stuff...</Text>
            <View style={[tw`p-6 items-center pt-8 bg-gray-500`,{height: 500}]}>
                <TouchableOpacity
                    style={[tw`bg-red-500 items-center justify-center mb-5`, {height: 100, width: 300}]}
                >
                    <Text style={tw`text-white text-center`}>Upload ID Card Image</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[tw`bg-blue-500 items-center justify-center`, {height: 80, width: 150}]}
                >
                    <Text style={tw`text-white text-center`}>Scan</Text>
                </TouchableOpacity>
            </View>
            <View style={[tw`mr-4 mt-6 p-4`, styles.cameraContainer]}>
                <TouchableOpacity
                    style={[tw`bg-green-500 items-center justify-center`, {height: 80, width: 150}]}
                >
                        <Text style={tw`text-white text-center`}>Camera</Text>
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