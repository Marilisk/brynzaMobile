import { FC } from 'react'
import { Button, Image, Text, View } from 'react-native';
import { headerStyles } from '../styles/headerStyles';


export const Header:FC  = () => {

return <View style={headerStyles.wrap}>
    

    <Image style={headerStyles.logo} source={require('./../assets/brynza.png')} />

</View>
}