import React, { useState } from 'react';
import { Text, View, Image, StyleSheet,ScrollView, FlatList,TouchableWithoutFeedback} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Item from '../../components/Product/ProductListCard'

import productsData from '../../data/Products'

export default function ProductListScreen({navigation,route}) {

  const [boxTypeCount, setBoxTypeCount] = React.useState(2);
  const [ItemHeight, setItemHeight] = React.useState(200);

  const [cart, setCart] = useState({});

  const handleQuantityChange = (productId, quantity) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: quantity,
    }));
  };

  const handleAddToCart = (productId, quantity) => {
    if (quantity > 0) {
      console.log(`Product ID: ${productId}, Quantity: ${quantity}`);
    } else {
      alert('Please select quantity to add the product to your cart.');
    }
  };

  return (
    <View>
      <FlatList
        horizontal={false}
        numColumns={boxTypeCount}
        key={boxTypeCount}
        data={productsData}
        renderItem={({ item, index }) => (
          <Item
            item={item}
            index={index}
            navigation={navigation}
            itemHeight={ItemHeight}
            boxTypeCount={boxTypeCount}
            onQuantityChange={handleQuantityChange}
            onAddToCart={handleAddToCart}
          />
        )}
        keyExtractor={item => item.id}

      />
    </View>
  )
}
