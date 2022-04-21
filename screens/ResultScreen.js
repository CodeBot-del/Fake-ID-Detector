import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Button, Image, FlatList } from 'react-native';
import React, {setState} from 'react';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';


// create list to be used for take again and ok buttons
const data = [
    {
        id: "123",
        title: 'Take Again',
        icon: 'plus',
        screen: 'FaceScreen',

    },
    {
        id: "456",
        title: 'OK',
        icon: 'thumbs-up',
        screen: 'HomeScreen',
    }
]

// pass route and navigation params for retrieving imageUri
const ResultScreen = ({ route, navigation }) => {
    const { imageUri } = route.params;
    // const url = JSON.stringify(imageUri);
    return (
        <View style={styles.container}>
            <Text style={tw`mt-6 p-2 pl-4 text-lg font-semibold`}>Scan Results</Text>

            <View style={[styles.imageContainer, tw`bg-gray-500 items-center justify-center m-2`]}>
                {/* Get the image url from passed imageUri */}
                <Image source={{ uri: imageUri }} style={[{ width: '100%', height: 300 }, tw``]} />
            </View>
            {/* create a flatlist for take again and okay buttons */}
            <FlatList
                data={data}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate(item.screen)}
                        style={[tw`p-2 pl-12 pb-8 pt-4 m-2 mr-20`, styles.actions]}
                    >
                        <View>
                            <Icon
                                name={item.icon}
                                type="entypo"
                                color="black"
                                size={30}
                            />
                            <View style={tw`items-center`}><Text style={tw`mt-2 font-semibold`}>{item.title}</Text></View>
                        </View>
                    </TouchableOpacity>
                )}
            />

            


        </View>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    imageContainer: {
        width: '95%',
        height: 300,
    },
    actions: {
        justifyContent: 'space-between',
    },

})