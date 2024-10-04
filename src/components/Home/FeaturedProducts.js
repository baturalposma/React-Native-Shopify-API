import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, Image, Dimensions } from 'react-native'

/* API */
import { fetchCollectionByHandle } from '../../api/shopifyApi'

import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Item from '../Product/ProductCard'

import productsData from '../../data/Products'

export default function FeaturedProducts({handle, title, screen}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchCollectionByHandle(handle);
      setProducts(fetchedProducts);
    };

    getProducts();
  }, [handle]);

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
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingTitle}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.headingButton}>View All</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item, index }) => (
            <Item item={item} index={index} onQuantityChange={handleQuantityChange} onAddToCart={handleAddToCart} />
          )}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headingTitle: {
    fontSize: 20,
    fontFamily: 'Titillium Web SemiBold',
    color: '#1b1b1b'
  },
  headingButton: {
    color: '#929BA5',
    fontFamily: 'Titillium Web SemiBold',
    fontSize: 13,
    letterSpacing: 1
  }
});
