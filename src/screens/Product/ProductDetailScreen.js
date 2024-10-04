import React, { useRef, useState } from 'react';
import { Dimensions, Text, View, ScrollView, Image, SafeAreaView, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Icon için gerekli import
import ProductVariants from '../../components/ProductDetail/ProductVariants';

const width = Dimensions.get("window").width;

export default function ProductDetailScreen({navigation,route}) {

  const { item } = route.params;
  const ref = React.useRef(null);

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

  const handleMultiBuy = (quantityValue) => {
    setQuantity(quantityValue);
  };

  const handleAddToCart = () => {
    // onAddToCart(item.id, quantity);
  };

  console.log(item);

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1}}>
    <ScrollView>
      <View style={{ backgroundColor: '#f7f7f7', flex: 1}}>
        <Carousel
            ref={ref}
            width={width}
            height={width}
            data={item.image}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{height: '100%', width: '100%', objectFit: 'contain', borderRadius: 20}}
                  source={{ uri: item.src }}
                  resizeMode="contain"
                />
              </View>
            )}
          />

      </View>
      <View style={styles.contentBody}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.itemDetails}>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <Text style={styles.itemSku}>{item.sku}</Text>
        </View>
        <View>
          <Text style={styles.multiBuyTitle}>Save up to 15% with Multi-buy</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.multibuyScroll}
          >
            <TouchableOpacity style={styles.multibuyItem} onPress={() => handleMultiBuy(3)}>
              <Text style={styles.multibuyItemTitle}>Buy 3+</Text>
              <Text style={styles.multibuyItemRate}>3% Off</Text>
              <Text style={styles.multibuyItemPrice}>£{(parseFloat(item.price.replace('£', '')) * 0.97).toFixed(2)} Each</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.multibuyItem} onPress={() => handleMultiBuy(6)}>
              <Text style={styles.multibuyItemTitle}>Buy 6+</Text>
              <Text style={styles.multibuyItemRate}>5% Off</Text>
              <Text style={styles.multibuyItemPrice}>£{(parseFloat(item.price.replace('£', '')) * 0.95).toFixed(2)} Each</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.multibuyItem} onPress={() => handleMultiBuy(12)}>
              <Text style={styles.multibuyItemTitle}>Buy 12+</Text>
              <Text style={styles.multibuyItemRate}>7% Off</Text>
              <Text style={styles.multibuyItemPrice}>£{(parseFloat(item.price.replace('£', '')) * 0.93).toFixed(2)} Each</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.multibuyItem} onPress={() => handleMultiBuy(24)}>
              <Text style={styles.multibuyItemTitle}>Buy 24+</Text>
              <Text style={styles.multibuyItemRate}>10% Off</Text>
              <Text style={styles.multibuyItemPrice}>£{(parseFloat(item.price.replace('£', '')) * 0.90).toFixed(2)} Each</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.multibuyItem} onPress={() => handleMultiBuy(48)}>
              <Text style={styles.multibuyItemTitle}>Buy 48+</Text>
              <Text style={styles.multibuyItemRate}>12% Off</Text>
              <Text style={styles.multibuyItemPrice}>£{(parseFloat(item.price.replace('£', '')) * 0.88).toFixed(2)} Each</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.multibuyItem, {marginRight: 40}]} onPress={() => handleMultiBuy(96)}>
              <Text style={styles.multibuyItemTitle}>Buy 96+</Text>
              <Text style={styles.multibuyItemRate}>15% Off</Text>
              <Text style={styles.multibuyItemPrice}>£{(parseFloat(item.price.replace('£', '')) * 0.85).toFixed(2)} Each</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.itemActions}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={[styles.quantityButton, {borderEndStartRadius: 10, borderStartStartRadius: 10}]} onPress={handleDecrease}><Text>-</Text></TouchableOpacity>
            <Text style={styles.quantityTxt}>{quantity}</Text>
            <TouchableOpacity style={[styles.quantityButton, {borderStartEndRadius: 10, borderEndEndRadius: 10}]} onPress={handleIncrease}><Text>+</Text></TouchableOpacity>
          </View>
          <View style={styles.addToCartBtnArea}>
            <TouchableOpacity style={styles.addToCartBtn}>
              <Icon name={'basket-plus-outline'} size={24} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <ProductVariants heading={'Variants'} />
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contentBody: {
    zIndex: 1,
    marginTop: -10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    height: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.10,
    shadowRadius: 5,
    elevation: 1,
    borderRadius: 10
  },
  itemTitle: {
    color: '#1b1b1b',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Titillium Web SemiBold',
    paddingHorizontal: 20,
  },
  itemDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  itemPrice: {
    color: '#307a07',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 16
  },
  itemSku: {
    color: '#666',
    fontSize: 12,
    fontFamily: 'Roboto',
  },
  multiBuyTitle: {
    marginTop: 10,
    marginBottom: 10,
    color: '#E14701',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Titillium Web SemiBold',
  },
  multibuyScroll: {
    paddingLeft: 15,
  },
  multibuyItem: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginHorizontal: 5,
  },
  multibuyItemTitle: {
    fontWeight: 'bold',
    fontSize: 11,
    textAlign: 'center',
    color: '#888',
    fontFamily: 'Roboto',
  },
  multibuyItemRate: {
    fontWeight: 'bold',
    fontSize: 11,
    textAlign: 'center',
    color: '#1b1b1b',
    marginVertical: 5,
    fontFamily: 'Roboto',
  },
  multibuyItemPrice: {
    fontWeight: 'bold',
    fontSize: 11,
    textAlign: 'center',
    color: '#3fb401',
    fontFamily: 'Roboto',
  },
  itemActions: {
    paddingHorizontal: 20,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityContainer: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#f7f7f7',
    maxHeight: 50,
    borderRadius: 10
  },
  quantityButton: {
    color: '#000',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f7f7f7',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quantityTxt: {
    fontSize: 16
  },
  addToCartBtnArea: {
    width: '60%',
    paddingLeft: 20
  },
  addToCartBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#6FBE1A',
    borderRadius: 10,
    maxHeight: 50,
    height: 50
  }
})
