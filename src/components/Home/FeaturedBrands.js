import React from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, Image, Dimensions } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import brandsData from '../../data/FeaturedBrands'

const width = Dimensions.get("window").width;

const Item = ({item, index }) => (
  <View style={[styles.item, index === 0 && { marginLeft: 20 }]}>
    <TouchableOpacity>
      <View style={{borderRadius: 5}}>
        <Image
          style={styles.image}
          source={{ uri: item.image }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.itemTxt}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{ item.title }</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default function FeaturedBrands() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingTitle}>Featured Brands</Text>
      </View>
      <FlatList
        data={brandsData}
        renderItem={({ item, index }) => (
          <Item item={item} index={index} />
        )}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
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
    justifyContent: 'space-between',
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
  },
  item: {
    width: width / 1.5,
    backgroundColor: '#fff',
    padding: 0,
    marginHorizontal: 5,
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: 360,
    objectFit: 'cover',
    borderRadius: 5,
  },
  itemTxt: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5
  },
  title: {
    fontSize: 20,
    fontFamily: 'Titillium Web SemiBold',
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#fff'
  }
});
