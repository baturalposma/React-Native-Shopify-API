import React from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, Image, Dimensions } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import collectionsData from '../../data/Collections'

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

export default function FeaturedCollections() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingTitle}>Top Categories</Text>
        <TouchableOpacity>
          <Text style={styles.headingButton}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={collectionsData}
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
    height: 140,
    objectFit: 'contain',
    borderRadius: 5,
  },
  itemTxt: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: '50%'
  },
  title: {
    fontSize: 15,
    fontFamily: 'Titillium Web SemiBold',
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#1b1b1b'
  }
});
