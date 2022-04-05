import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { Icon } from 'react-native-elements';
import ExternalLink from './ExternalLink';

const bg = require('./bg.png')
const data = [
    {
        id: "123",
        title: 'Github',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
        screen: 'GithubScreen',
        link: 'https://github.com/CodeBot-del/Fake-ID-Detector',
    },
    {
        id: "456",
        title: 'Medium',
        image: 'https://cdn-icons-png.flaticon.com/512/5968/5968854.png',
        screen: 'QRCodeScreen',
    }
]
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
                    <View style={tw`p-5`}><Text style={tw`font-bold text-lg text-gray-700`}>Donate or contribute to the project</Text></View>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={tw`p-6 pl-4 pb-8 pt-4 m-2 ml-12`}
                            >
                                <View>
                                    <Image
                                        style={{ width: 60, height: 60, }}
                                        source={{ uri: item.image }}
                                    />
                                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
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
        flexDirection: 'column',
    },
    

})