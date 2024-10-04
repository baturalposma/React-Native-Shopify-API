import * as React from 'react';
import { Text, View, Image,Dimensions,FlatList, StyleSheet,ScrollView, Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Subheading,Card, Divider, Paragraph,Caption} from 'react-native-paper';
const { width, height } = Dimensions.get('window');
import {AuthContext} from './context';
import axios from 'react-native-axios';

import orders from '../../data/Orders'

export default function OrderDetailScreen({navigation,route}){
    const unix = Date.parse(new Date());
    const [token,setToken] = React.useState();
    const [order,setOrder] = React.useState();
    const [product,setProduct] = React.useState([]);
    const [result,setResult] = React.useState([]);
    const {id} = route.params;
    React.useEffect(() => {
        navigation.setOptions({
            headerTitle:'Order Detail'
        })
        if(id){
          setResult(orders[0]);
          setProduct(orders[0]['products']);
        }
    },[])

    const handleInvoiceURL = () => {
      const invoiceURL = `https://esondirect.co.uk/apps/download-pdf/orders/835a6a3a6af27ddebecd/${ result.code * 2994 }/${ result.code }.pdf`;
      Linking.openURL(invoiceURL).catch((err) => console.error("Failed to open URL:", err));
    };


    return(
       <View style={styles.conatiner}>
            <ScrollView>

            {
                result ? <View style={styles.item}>
                <Caption>Order Date</Caption>
                <Paragraph style={styles.paragraph}> {result.order_date ?? ""} </Paragraph>
                <Divider />

                <Caption>Order Status</Caption>
                <Paragraph style={styles.paragraph}> {result.order_status ?? ""} </Paragraph>
                <Divider />

                <Caption>Order No</Caption>
                <Paragraph style={styles.paragraph}>{result.code ?? "" }</Paragraph>
                <Divider />

                <Caption>Total</Caption>
                <Paragraph style={styles.paragraph}>{result.total_price ?? "" }</Paragraph>
                <Divider />
                <TouchableOpacity style={styles.button} onPress={handleInvoiceURL}>
                  <Text style={styles.buttonText}>View PDF Invoice</Text>
                </TouchableOpacity>
            </View> : <View></View>
            }
            {
                product ? product.map((item) => {

                    return (
                        <View key={item.id} style={styles.itemList}>
                            <View style={styles.image}>
                                <Image style={{width:"100%",height:"100%"}} source={{uri:item.image[0].src}} />
                            </View>
                            <View style={styles.itemName}>
                                <View>
                                    <View style={{flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start'}}>
                                        <Text style={{fontWeight:'600',  color: '#1b1b1b'}}>{item.title}</Text>
                                        <Text style={{fontWeight:'700',fontSize:13, marginTop: 10, color: '#1b1b1b'}}>{item.price}</Text>
                                        <Text style={{fontWeight:'400',fontSize:13, marginTop: 10, color: '#565656'}}>Quantity: 5</Text>
                                    </View>
                                    <Text style={{fontSize:11,color:'#aaa',paddingVertical:2}}>{item.desc}</Text>
                                </View>
                                <View>
                                    {
                                        // item.variant.map((res) => {
                                        //     return (
                                        //        <View key={res.id}>
                                        //             <View style={styles.pieces}>
                                        //                 <Text style={styles.colorStyle}>{res.po_title_tr}</Text>
                                        //                 <Text style={styles.pieceStyle}> {res.piece} </Text>
                                        //             </View>
                                        //             <Divider style={{marginVertical:2}}></Divider>
                                        //        </View>
                                        //     )
                                        // })
                                    }


                                </View>
                            </View>
                        </View>
                    )
                }) : <View style={{margin:20}}><Text style={{padding:10,textAlign:'center',fontSize:12,backgroundColor:'#000',color:'#fff'}}>An unexpected problem occurred while loading order details.</Text></View>
            }
            </ScrollView>
       </View>
    )
}
const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'#eee'
    },
    item:{
        padding:20,
        marginVertical:20,
        backgroundColor: '#fff',
    },
    itemList:{
        borderBottomColor:'#eee',
        borderBottomWidth:1,
        padding:15,
        flexDirection:'row',
        backgroundColor: '#fff',
    },
    paragraph:{
        fontSize:12,
    },
    image:{
        width:100,
        marginRight:20,
        height:100
    },
    itemName:{
        flex:1,
        justifyContent:'space-between'
    },
    pieces:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    colorStyle:{
        fontSize:12,
        color:'#aaa'
    },
    pieceStyle:{
      fontSize:12,
      color:'#000',
      fontWeight:'600'
    },
    button: {
      marginTop: 20,
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
