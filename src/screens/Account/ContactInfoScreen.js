import * as React from 'react';
import { Text, View, Image,Dimensions,ScrollView, StyleSheet, Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ContactInfoScreen({navigation,route}){
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle:"Contact Us",

        })
    },[navigation])

    const handleMainWarehouseDirections = () => {
      const googleMapsUrl = 'https://maps.app.goo.gl/mGZ5YgLEsqd1dAud8?g_st=ic';
      Linking.openURL(googleMapsUrl).catch((err) => console.error("Failed to open URL:", err));
    };

    const handleMainWarehouseCall = () => {
      const phoneNumber = 'tel:+441914479589';
      Linking.openURL(phoneNumber).catch((err) => console.error("Failed to make a call:", err));
    };

    const handleLondonWarehouseDirections = () => {
      const googleMapsUrl = 'https://maps.app.goo.gl/N5U5gB35zC8JaQvb9';
      Linking.openURL(googleMapsUrl).catch((err) => console.error("Failed to open URL:", err));
    };

    const handleLondonWarehouseCall = () => {
      const phoneNumber = 'tel:+447492352003';
      Linking.openURL(phoneNumber).catch((err) => console.error("Failed to make a call:", err));
    };


    return(
       <ScrollView style={styles.container}>

        <View style={styles.item}>
          <View style={styles.itemTop}>
            <Icon name={'warehouse'} size={40} color={'#000'} />
            <View>
              <Text style={styles.itemTitle}>Newcastle Warehouse (Main)</Text>
              <Text style={styles.itemAdress}>Unit 3G, Plymouth Rd, North Shields NE29 7TY, United Kingdom</Text>
              <Text style={styles.itemAdress}>Mon - Fri: 9:30am to 4:30pm</Text>
            </View>
          </View>
          <View style={styles.buttonsArea}>
            <TouchableOpacity style={styles.button} onPress={handleMainWarehouseDirections}>
              <Text style={styles.buttonText}>Directions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleMainWarehouseCall}>
              <Text style={styles.buttonText}>Call Us</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.item, {marginTop: 0}]}>
          <View style={styles.itemTop}>
            <Icon name={'warehouse'} size={40} color={'#000'} />
            <View>
              <Text style={styles.itemTitle}>London Warehouse</Text>
              <Text style={[styles.itemAdress, {width: '45%'}]}>Unit 1&2, Twickenham trading Estate, Rugby Rd, Twickenham TW1 1DQ, United Kingdom</Text>
              <Text style={styles.itemAdress}>Mon - Fri: 9:30am to 4:30pm</Text>
            </View>
          </View>
          <View style={styles.buttonsArea}>
            <TouchableOpacity style={styles.button} onPress={handleLondonWarehouseDirections}>
              <Text style={styles.buttonText}>Directions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLondonWarehouseCall}>
              <Text style={styles.buttonText}>Call Us</Text>
            </TouchableOpacity>
          </View>
        </View>

       </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#f7f7f7'
    },
    item: {
      display: 'flex',
      margin: 20,
      padding: 20,
      backgroundColor: '#fff',
      flexDirection: 'column',
      gap: 15,
      alignItems: 'flex-start'
    },
    itemTop: {
      display: 'flex',
      flexDirection: 'row',
      gap: 15,
      alignItems: 'flex-start'
    },
    itemTitle: {
      color: '#1b1b1b',
      fontWeight: 'bold',
      fontSize: 18,
      fontFamily: 'Titillium Web SemiBold',
      flexShrink: 1,
      width: '70%'
    },
    itemAdress: {
      color: '#666',
      fontSize: 14,
      fontFamily: 'Roboto',
      flexShrink: 1,
      width: '60%',
      marginTop: 10
    },
    buttonsArea: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      gap: 10
    },
    button: {
      marginTop: 10,
      backgroundColor: '#71be1a',
      paddingVertical: 10,
      paddingHorizontal: 30
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontFamily: 'Titillium Web SemiBold',
      textAlign: 'center'
    }
});
