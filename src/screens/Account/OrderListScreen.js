import * as React from 'react';
import { Text, View, Image,Dimensions,FlatList, StyleSheet,ScrollView, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, List} from 'react-native-paper';
const { width, height } = Dimensions.get('window');
import axios from 'react-native-axios';

import orders from '../../data/Orders'

function listItem({item},navigation,token,setVisibleOrder,setIsLoading){
    return(
        <View style={styles.item}>

            <View style={styles.imageContainer}>
                <Image style={{width:"100%",height:"100%"}} source={{uri:'https://via.placeholder.com/90x90.png?text='+item.id}} />
            </View>
            <View style={styles.itemIn}>
                <View style={styles.itemInfo}>
                    <Text style={styles.itemText}>Order Status:</Text>
                    <View style={styles.statusText}>
                        <Text style={{fontSize:12, fontWeight: 'bold'}}>Fullfilled</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.itemInfo}>
                        <Text style={styles.itemText}>Order Date:</Text>
                        <Text style={{fontSize:12,marginLeft:5}}>{item.order_date}</Text>
                    </View>
                    <View style={styles.itemInfo}>
                        <Text style={styles.itemText}>Order Number:</Text>
                        <Text style={{fontSize:12,marginLeft:5}}> {item.code} </Text>
                    </View>
                    <View style={styles.itemInfo}>
                        <Text style={styles.itemText}>Total:</Text>
                        <Text style={{fontSize:12,marginLeft:5,fontWeight:'700'}}>{item.total_price}</Text>
                    </View>
                </View>
                <View style={[styles.itemInfo, {marginTop: 10}]}>
                    <Button labelStyle={{fontSize:11,color:'#1b1b1b'}} style={{marginRight:5}} theme={{colors:{primary:'#1b1b1b'}}} mode="outlined" onPress={() => {
                        navigation.navigate('OrderDetail',{
                            id:item.id
                        })
                    }}>
                        Detail
                    </Button>
                    <Button labelStyle={{fontSize:11,color:'#1b1b1b'}} theme={{colors:{primary:'#1b1b1b'}}} mode="outlined" onPress={() => {
                         Alert.alert(
                            "Are you sure you want to repeat this order?",
                            "",
                            [
                                {
                                    text: "Hayır",
                                    onPress: () => {

                                    },
                                    style: "destructive"
                                },
                                {
                                    text: "Evet",
                                    onPress: () => {
                                      setIsLoading(true);
                                    }
                                }
                            ],
                            { cancelable: false }
                        );
                    }}>
                      Repeat Order
                    </Button>
                </View>
            </View>
        </View>
    );
}
export default function OrderListScreen({navigation,route}){
    const unix = Date.parse(new Date());
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle:"My Orders",
        })
    },[navigation])
    const [isLoading,setIsLoading] = React.useState(false);

    const [token,setToken] = React.useState();
    const [order,setOrder] = React.useState();
    const [product,setProduct] = React.useState([]);
    const [result,setResult] = React.useState([]);
    const [visibleOrder,setVisibleOrder]  = React.useState(false);


    if( isLoading ) {
        return(
            <View style={{flex:1,backgroundColor:'#fff',zIndex:2,position:"absolute",left:0,top:0,bottom:0,right:0,alignItems:'center',justifyContent:'center'}}>

            </View>
        );
    }
    return(
       <View style={styles.conatiner}>
        <FlatList
          horizontal={false}
          numColumns={1}
          key={1}
          data={orders}
          renderItem={item => listItem(item,navigation,token,setVisibleOrder,setIsLoading)}
          keyExtractor={item => item.key}
        />
       </View>
    )
}
const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'#eee'
    },
    imageContainer:{
        width:90,
        height:90,
    },
    item:{
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        flexDirection:'row',
        backgroundColor: '#fff',
        padding:10
    },
    itemIn:{
        paddingHorizontal:10,
        justifyContent:'space-between',
    },
    itemText:{
        fontSize:12
    },
    itemInfo:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    statusText:{
        marginLeft:5,
        backgroundColor: 'orange',
        paddingHorizontal:10,
        paddingVertical:2,
        borderRadius:25,
    },
    modalContainer:{

        borderRadius:20,
        marginVertical:120,
        alignItems:'center',
        backgroundColor:'#fff'
    },
});
