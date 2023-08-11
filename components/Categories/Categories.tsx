import { FlatList, Text, View } from "react-native"
import { catStyles } from "../../styles/catStyles"
import { FC, useState, useEffect } from 'react'
import { ICategory } from "../../types/productTypes"
import instance from "../../store/api/axios"
import { Svg, Image, SvgUri } from "react-native-svg"

interface ICategoryItemProps {
    item: ICategory
}




const CategoryItem: FC<ICategoryItemProps> = ({ item }: ICategoryItemProps) => {


    return <>
        <View style={catStyles.cat}>
            <View style={catStyles.photoWrapper} >
                <Svg  width='50' style={catStyles.photo} >
                    <SvgUri uri={item.svg_icon} /* width={40} */ /* height={40} */ />
                </Svg>


            </View>

                 <Text style={catStyles.text}>{item.name}</Text>


        </View>

    </>
}



const renderItem = ({ item }: { item: ICategory }) => <CategoryItem item={item} />

export const Categories = () => {

    const [cats, setCats] = useState<ICategory[]>([])


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await instance.get('categories/')
                setCats(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    if (!cats.length) return null

    return <View style={catStyles.container}>

        <FlatList
            data={cats}
            renderItem={renderItem}
            keyExtractor={(item, i) => i.toString()}
            horizontal
        //numColumns={2}
        //columnWrapperStyle={appStyles.columnWrapper}
        />
        {/*  <View>
            {cats.map((el, i) => <Text key={i}>{el.name}</Text>)}
        </View> */}

    </View>
}