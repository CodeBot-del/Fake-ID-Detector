import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';


const data = [
    {
        id: "123",
        title: 'Facial Scan',
        image: 'https://www.womanthology.co.uk/wp-content/uploads/2017/06/facescan.gif',
        screen: 'FacialScreen',
    },
    {
        id: "456",
        title: 'QR and Bar Code',
        image: 'https://i.ibb.co/KGJCkrS/qr-scan.gif',
        screen: 'QRCodeScreen',
    }
]

const NavOptions = () => {
  return (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity 
            style={tw`p-2 pl-4 pb-8 pt-4 m-2`}
            >
                <View>
                    <Image
                        style={{width: 120, height: 120,}}
                        source={{uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        type='antdesign'
                        name='arrowright'
                        color='white'
                    />
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

// const styles = StyleSheet.create({})