import * as React from 'react';
import { Text, View, Image,Dimensions,FlatList, StyleSheet,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HelperText, TextInput, Divider, Paragraph,Caption} from 'react-native-paper';
const { width, height } = Dimensions.get('window');
import {AuthContext} from './context';
import axios from 'react-native-axios';

export default function OrderDetailScreen({navigation,route}){
    const [name, setName] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [isLoading,setIsLoading] = React.useState(false);

    const onChangeText = text => setText(text);
    const hasErrors = () => {
        return !text.includes('@');
    };
    React.useLayoutEffect(() => {
        // const user = AsyncStorage.getItem('userData');
        // user.then((res) => {
        //     const data = JSON.parse(res);
        //     if(data){
        //         setName(data.u_name)
        //         setLastname(data.u_username)
        //         setEmail(data.u_email)
        //         setPhone(data.u_phone)
        //     }
        // })
        navigation.setOptions({
            headerTitle:"My Account",
            headerRight:() => (
                <TouchableOpacity style={{marginRight:15}} onPress={() => {
                    setIsLoading(true)
                }}>
                    <Text style={{fontSize:13}}>Save</Text>
                </TouchableOpacity>
            )
        })
    },[navigation])
    if( isLoading ) {
        return(
            <View style={{flex:1,backgroundColor:'#fff',zIndex:2,position:"absolute",left:0,top:0,bottom:0,right:0,alignItems:'center',justifyContent:'center'}}>

            </View>
        );
    }
    return(
       <View style={styles.conatiner}>
            <View style={styles.item}>

                <Caption style={{fontWeight:'700',fontSize:12}}>AD</Caption>
                <TextInput
                    style={{
                        height:40,
                        paddingHorizontal:0,
                        marginBottom:5,
                        fontSize:14,
                        backgroundColor: '#fff',
                    }}
                    theme={{ colors: { placeholder: '#d3d3d3', text: '#555', primary: '',underlineColor:'transparent',background : 'red'}}}
                    selectionColor={"#eee"}
                    underlineColor={"#eee"}
                    value={name}
                    onChangeText={setName}
                />


                <Caption style={{fontWeight:'700',fontSize:12}}>SOYAD</Caption>
                <TextInput
                    style={{
                        height:40,
                        fontSize:14,
                        margin: 0,
                        marginBottom:5,
                        paddingHorizontal:0,
                        backgroundColor: '#fff',
                    }}
                    theme={{ colors: { placeholder: '#d3d3d3', text: '#555', primary: '#eee',underlineColor:'transparent',background : 'red'}}}
                    selectionColor={"#eee"}
                    underlineColor={"#eee"}
                    value={lastname}
                    onChangeText={setLastname}
                />

                <Caption style={{fontWeight:'700',fontSize:12}}>E-POSTA</Caption>
                <TextInput
                    style={{
                        height:40,
                        paddingHorizontal:0,
                        fontSize:14,
                        marginBottom:5,
                        backgroundColor: '#fff',
                    }}
                    theme={{ colors: { placeholder: '#d3d3d3', text: '#555', primary: '#eee',underlineColor:'transparent',background : 'red'}}}
                    selectionColor={"#eee"}
                    underlineColor={"#eee"}
                    value={email}
                    onChangeText={setEmail}
                />

                <Caption style={{fontWeight:'700',fontSize:12}}>CEP TELEFONU</Caption>
                <TextInput
                    style={{
                        height:40,
                        paddingHorizontal:0,
                        marginBottom:5,
                        fontSize:14,
                        backgroundColor: '#fff',
                    }}
                    theme={{ colors: { placeholder: '#d3d3d3', text: '#555', primary: '#eee',underlineColor:'transparent',background : 'red'}}}
                    selectionColor={"#eee"}
                    underlineColor={"#eee"}
                    value={phone}
                    onChangeText={setPhone}
                />
            </View>

       </View>
    )
}
const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'#e8e8e8'
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
    }
});
