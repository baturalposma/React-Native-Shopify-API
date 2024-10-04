import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, Image, Dimensions } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import axios from 'react-native-axios';

import Item from '../ProductDetail/ProductVariantCard'

import productsData from '../../data/Products'


export default function ProductVariants({heading, screen}) {

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingTitle}>{heading}</Text>
      </View>
      <FlatList
        data={productsData}
        renderItem={({ item, index }) => (
          <Item item={item} index={index} />
        )}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
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
