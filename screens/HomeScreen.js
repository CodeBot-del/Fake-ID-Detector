import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { Icon } from 'react-native-elements';


const data = [
    {
        id: "123",
        title: 'Github',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
        screen: 'GithubScreen',
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
                <NavOptions/>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={({item}) => (
                    <TouchableOpacity
                    style={tw`p-6 pl-4 pb-8 pt-4 m-2 ml-12`}
                    >
                        <View>
                        <Image
                        style={{width: 60, height: 60,}}
                        source={{uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
})