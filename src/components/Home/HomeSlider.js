import React from 'react'
import { Dimensions, Image, Text, View, StyleSheet } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const data = [
  {
    image: 'https://esondirect.co.uk/cdn/shop/files/eson-slider-haircut.jpg?v=1717943817',
  },
  {
    image: 'https://esondirect.co.uk/cdn/shop/files/eson-slider-haircolour.jpg?v=1717944241',
  },
  {
    image: 'https://esondirect.co.uk/cdn/shop/files/eson-slider-morfose.png?v=1718456979&',
  }
];

export default function HomeSlider() {

  return (
    // <View style={{ flex: 1 }}>
    //   <Carousel
    //     width={width}
    //     height={width / 2}
    //     loop
    //     autoPlay={true}
    //     autoPlayInterval={5000}
    //     data={data}
    //     renderItem={({ item }) => (
    //       <View
    //         style={{
    //           flex: 1,
    //           justifyContent: "center",
    //           backgroundColor: '#fff'
    //         }}
    //       >
    //         <Image
    //           style={{ width: '100%', height: '100%' }}
    //           source={{ uri: item.image }}
    //           resizeMode="cover"
    //         />
    //       </View>
    //     )}
    //     mode="parallax"
    //     modeConfig={{
    //       parallaxScrollingScale: 0.9,
    //       parallaxScrollingOffset: 50,
    //     }}
    //   />
    // </View>
    <View style={ styles.slideArea }>
      <Image
        style={{ width: width, height: height / 2 }}
        source={require('../../assets/images/home-slide.png')}
        resizeMode="cover"
      />
      <View style={ styles.textArea }>
        <Text style={ styles.h1 }>Transform Your{"\n"}Barbershop & Salon</Text>
        <Text style={ styles.h2 }>Discover the latest trends</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  slideArea: {
    position: 'relative',
    zIndex: 0
  },
  textArea: {
    position: 'absolute',
    top: (height / 2) / 2.2,
    left: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  h1: {
    color: '#fff',
    fontSize: width / 13,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Titillium Web Bold'
  },
  h2: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Titillium Web SemiBold'
  }
})
