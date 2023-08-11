import { Button, Image, Pressable, Text, View } from 'react-native';
import { darkGrayBackgroundColor, productStyles } from '../../styles/productStyles';
import { FC } from 'react';
import { IProduct } from '../../types/productTypes';

interface IProductProps {
    item: IProduct
}


export const Product: FC<IProductProps> = ({ item }: IProductProps) => {

    //console.log('in Product', item)
    const handlePress = () => {
        console.log('hm')
    }

    return <View style={productStyles.wrap} >
        <View style={productStyles.container}>
            <View style={productStyles.imageWrap}>

                <Image source={{ uri: item.imgUrl }}
                    style={productStyles.image}
                    defaultSource={require('./../../assets/splash.png')}
                    resizeMode='cover'
                    resizeMethod='scale' />
            </View>

            <View style={productStyles.description}>
                <View style={productStyles.title}>
                    <Text style={productStyles.name}>{item.name}</Text>
                </View>
                <View style={productStyles.orderLine}>
                    <Text style={productStyles.price}>{item.price} ₽</Text>

                    <Pressable style={productStyles.button}
                        onPress={() => handlePress()} >
                        <Text style={productStyles.buttonText}>выбрать</Text>
                    </Pressable>

                </View>
            </View>
        </View>

    </View>
}