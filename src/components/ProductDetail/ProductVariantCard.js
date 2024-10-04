import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Icon için gerekli import

const width = Dimensions.get("window").width;

const Item = ({ item, index }) => {

  return (
    <View style={[styles.item, index === 0 && { marginLeft: 20 }]}>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('ProductDetail',{item});
        }}
        style={styles.itemContent}
      >
        <View style={{ borderRadius: 5, width: '50%' }}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: width / 2.6,
    backgroundColor: '#fff',
    padding: 7,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: '100%',
    height: 50,
    objectFit: 'contain',
    borderRadius: 5,
  },
  itemTxt: {
    width: '50%',
    paddingRight: 10
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
    color: '#3FB401',
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  }
});

export default Item;
