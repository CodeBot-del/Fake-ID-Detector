import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';


const data = [
    {
        id: "123",
        title: 'Facial Scan',
        image: 'https://www.womanthology.co.uk/wp-content/uploads/2017/06/facescan.gif',
        screen: 'FaceScreen',
    },
    {
        id: "456",
        title: 'QR and Bar Code',
        image: 'https://st2.depositphotos.com/3205185/7919/v/380/depositphotos_79194166-stock-illustration-qr-code-icon-vector-illustration.jpg?forcejpeg=true',
        screen: 'QRCodeScreen',
    }
]

const NavOptions = () => {
  return (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity 
            style={tw`p-2 pl-4 pb-8 pt-4 m-2`}
            >
                <View>
                    <Image
                        style={{width: 240, height: 160,}}
                        source={{uri: item.image}}
                    />
                    <View style={tw`items-center`}><Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text></View>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

// const styles = StyleSheet.create({})