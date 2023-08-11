import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import { FC } from 'react'
import { appStyles } from './styles/appStyles';
import { Header } from './components/Header';
import { IProduct } from './types/productTypes';
import { Product } from './components/Product/Product';
import { Categories } from './components/Categories/Categories';

const items: IProduct[] = [
  { name: 'Чебурек сытный', description: 'Румяный, аппетитный чебурек с говядиной и свининой с добавлением лука, пряностей и зелени, 150 г', id: 1, price: 360, imgUrl: 'https://cafebrynza.ru/goods/789.jpg' },
  { name: 'Чебурек сытный', description: 'Румяный, аппетитный чебурек с говядиной и свининой с добавлением лука, пряностей и зелени, 150 г', id: 1, price: 360, imgUrl: 'https://cafebrynza.ru/goods/789.jpg' },
  { name: 'Чебурек 4 сыра', description: 'С гаудой, сулугуни, фетой и дорблю, дополняется ананасом, подается с медом', id: 2, price: 360, imgUrl: 'https://cafebrynza.ru/goods/330.jpg', },
  { name: 'Чебурек 4 сыра', description: 'С гаудой, сулугуни, фетой и дорблю, дополняется ананасом, подается с медом', id: 2, price: 360, imgUrl: 'https://cafebrynza.ru/goods/330.jpg', },
  { name: 'Чебурек сытный', description: 'Румяный, аппетитный чебурек с говядиной и свининой с добавлением лука, пряностей и зелени, 150 г', id: 1, price: 360, imgUrl: 'https://cafebrynza.ru/goods/789.jpg' },
  { name: 'Чебурек сытный', description: 'Румяный, аппетитный чебурек с говядиной и свининой с добавлением лука, пряностей и зелени, 150 г', id: 1, price: 360, imgUrl: 'https://cafebrynza.ru/goods/789.jpg' },
  { name: 'Чебурек сытный', description: 'Румяный, аппетитный чебурек с говядиной и свининой с добавлением лука, пряностей и зелени, 150 г', id: 1, price: 360, imgUrl: 'https://cafebrynza.ru/goods/789.jpg' },
  { name: 'Чебурек сытный', description: 'Румяный, аппетитный чебурек с говядиной и свининой с добавлением лука, пряностей и зелени, 150 г', id: 1, price: 360, imgUrl: 'https://cafebrynza.ru/goods/789.jpg' },
  { name: 'Чебурек 4 сыра', description: 'С гаудой, сулугуни, фетой и дорблю, дополняется ананасом, подается с медом', id: 2, price: 360, imgUrl: 'https://cafebrynza.ru/goods/330.jpg', },
  { name: 'Чебурек 4 сыра', description: 'С гаудой, сулугуни, фетой и дорблю, дополняется ананасом, подается с медом', id: 2, price: 360, imgUrl: 'https://cafebrynza.ru/goods/330.jpg', }
]

const renderItem = ({ item }: { item: IProduct }) => <Product item={item} />

const App: FC = () => {



  return <>
    <StatusBar style='auto' />

    <Header />
    <View style={appStyles.container}>

      <Categories />

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, i) => i.toString()}
        numColumns={2}
        columnWrapperStyle={appStyles.columnWrapper}
      />
    </View>

    <View style={appStyles.tabs}>
      <Text>there will be tab buttons</Text>
    </View>
  </>
}

export default App