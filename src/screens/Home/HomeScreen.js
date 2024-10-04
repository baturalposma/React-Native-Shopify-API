import React, { Component } from 'react'
import { Text, View, Image, StyleSheet,ScrollView,StatusBar, Dimensions} from 'react-native';

/* COMPONENTS */
import HomeSlider from '../../components/Home/HomeSlider'
import FeaturedProducts from '../../components/Home/FeaturedProducts';
import FeaturedCollections from '../../components/Home/FeaturedCollections';
import FeaturedBrands from '../../components/Home/FeaturedBrands';


const width = Dimensions.get("window").width;


export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView
        style={{ backgroundColor: '#fff' }}
        showsVerticalScrollIndicator={false}
      >
        <HomeSlider />
        <View style={styles.body}>
          <FeaturedProducts handle={'hair-style'} title={'Hair Style Products'} />
          <FeaturedCollections />
          <FeaturedProducts handle={'new-arrivals'} title={'New Arrivals'} />
          <FeaturedBrands />
          <FeaturedProducts handle={'best-sellers'} title={'Best Sellers'} />
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  body: {
    zIndex: 1,
    marginTop: -30,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 40,
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
  }
})
