import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { Icon } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';

const bg = require('./bg.png');
const _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://github.com/CodeBot-del/Fake-ID-Detector');
};


const HomeScreen = () => {

    return (
        <SafeAreaView style={[tw`bg-white h-full`, styles.container]}>
            <View style={tw`p-5`}>
                <Image
                    source={
                        require('./logo2.png')
                    }
                    style={{
                        width: 80,
                        height: 80,
                        resizeMode: 'contain'
                    }}
                />
                <NavOptions />
            </View>

            <View style={styles.container2}>
                <ImageBackground source={bg} style={styles.image}>
                    <View style={tw`p-5 items-center`}><Text style={tw`font-bold text-sm text-gray-700`}>Donate or contribute to the project</Text></View>
                    <View style={tw`items-center`}>
                        <TouchableOpacity 
                        style={tw`p-6`}
                        onPress={_handleOpenWithWebBrowser}
                        >
                            <Image
                                style={{ width: 60, height: 60, }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png' }}
                            />
                            <Text style={tw`mt-2 text-lg font-semibold pl-2`}>Github</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`p-5 items-center`}><Text style={tw`font-bold text-lg text-gray-700`}>@Alpha AI</Text></View>

                </ImageBackground>
            </View>


        </SafeAreaView>
    )
}



export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        
    },


})