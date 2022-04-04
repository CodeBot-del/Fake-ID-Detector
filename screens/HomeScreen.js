import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';


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