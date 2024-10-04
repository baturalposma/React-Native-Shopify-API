import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Icon için gerekli import

const width = Dimensions.get("window").width;

const Item = ({ item, index, onQuantityChange, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(item.id, newQuantity);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(item.id, quantity);
  };

  return (
    <View style={[styles.item, index === 0 && { marginLeft: 20 }]}>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('ProductDetail',{item});
        }}
      >
        <View style={{ borderRadius: 5 }}>
          <Image
            style={styles.image}
            source={{ uri: item.image[0].src }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.itemTxt}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.itemBottom}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}><Text>-</Text></TouchableOpacity>
          <Text style={styles.quantityTxt}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}><Text>+</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addToCartBtn} onPress={handleAddToCart}>
          <Icon name={'basket-plus-outline'} size={16} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: width / 2.6,
    backgroundColor: '#fff',
    padding: 7,
    marginHorizontal: 5,
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: 140,
    objectFit: 'contain',
    borderRadius: 5,
  },
  itemTxt: {
    textAlign: 'center'
  },
  title: {
    color: '#1b1b1b',
    fontSize: 11,
    flex: 1,
    fontWeight: 'bold',
    fontFamily: 'Titillium Web SemiBold',
    lineHeight: 14,
    letterSpacing: 0.4
  },
  price: {
    marginTop: 10,
    fontSize: 12,
    color: '#307a07',
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },
  itemBottom: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityContainer: {
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#f7f7f7',
    maxHeight: 35,
  },
  quantityButton: {
    color: '#000',
    paddingHorizontal: 8,
    paddingVertical: 7,
    backgroundColor: '#f7f7f7',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quantityTxt: {
    fontSize: 12
  },
  addToCartBtn: {
    padding: 10,
    backgroundColor: '#6FBE1A',
    maxHeight: 35,
  }
});

export default Item;
