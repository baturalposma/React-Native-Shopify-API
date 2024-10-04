import { Text, View, SafeAreaView, StyleSheet, FlatList, Image } from 'react-native'
import React, { Component, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import productsData from '../../data/Products'

function ListItem({item}) {

  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  return(
    <View style={styles.cartItem}>
      <View style={styles.cartItemImageArea}>
        <Image
          style={styles.cartItemImage}
          source={{ uri: item.image[0].src }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.cartItemContentArea}>
        <Text style={styles.cartItemTitle} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
        <Text style={styles.cartItemPrice}>{item.price}</Text>
        <View style={styles.cartItemActions}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={[styles.quantityButton, {borderEndStartRadius: 10, borderStartStartRadius: 10}]} onPress={handleDecrease}><Text>-</Text></TouchableOpacity>
            <Text style={styles.quantityTxt}>{quantity}</Text>
            <TouchableOpacity style={[styles.quantityButton, {borderStartEndRadius: 10, borderEndEndRadius: 10}]} onPress={handleIncrease}><Text>+</Text></TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.cartItemRemoveBtn}>
            <Icon name={'trash-can-outline'} size={20} color={'#df2943'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default class CartScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.cartArea}>
        <FlatList
          horizontal={false}
          numColumns={"1"}
          data={productsData}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={item => item.id}
        />
        <View style={styles.bottomBar}>
          <View style={{width: '50%'}}>
            <Text style={{color: '#1b1b1b', fontSize: 16}}><Text style={{fontWeight: 'bold', fontSize: 14}}>Total:</Text> £120.00</Text>
            <Text style={{color: '#727272', fontSize: 10, marginTop: 5}}>Vat included. Shipping calculated at checkout.</Text>
          </View>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutBtnTxt}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  cartArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    padding: 20,
    backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  cartItemImageArea: {
    width: 60,
    height: 80
  },
  cartItemImage: {
    width: '100%',
    height: '100%'
  },
  cartItemContentArea: {
    flex: 1,
    paddingLeft: 20,
  },
  cartItemTitle: {
    width: '100%',
    fontSize: 12,
    color: '#1b1b1b',
    fontWeight: 'bold'
  },
  cartItemPrice: {
    marginTop: 5,
    fontSize: 12,
    color: '#307a07',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  cartItemActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  quantityContainer: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#f7f7f7',
    maxHeight: 35,
    borderRadius: 10
  },
  quantityButton: {
    color: '#000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f7f7f7',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityTxt: {
    fontSize: 12
  },
  cartItemRemoveBtn: {
    padding: 5,
  },
  bottomBar: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  checkoutBtn: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: '#3FB401'
  },
  checkoutBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})
