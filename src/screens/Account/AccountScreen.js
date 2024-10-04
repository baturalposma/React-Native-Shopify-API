import * as React from 'react';
import { Text, View, Image,Dimensions,FlatList, StyleSheet,ScrollView,TouchableWithoutFeedback} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar,List,Divider,TouchableRipple, Title} from 'react-native-paper';
const { width, height } = Dimensions.get('window');

export default function AccountScreen({navigation,route}){
    const unix = Date.parse(new Date());
    const [refPicker,setRef] = React.useState();
    const [token,setToken] = React.useState('1234');
    const [deleteToken,getToken] = React.useState();
    // const {deleteToken,getToken} = React.useContext();
    // getToken().then((res) => {
    //    if(res){
    //     setToken(res);
    //    }else {
    //      setToken('');
    //    }
    // });
    console.log(token)
    return(
       <ScrollView style={styles.conatiner}>
           {
               token ?
               <View>
                    <View style={styles.profileHeader}>
                      <Avatar.Text color={"#fff"} style={{backgroundColor:'#000'}} size={60} label="E" />
                      <View>
                          <Text style={styles.profileText}>Eson Direct</Text>
                      </View>
                    </View>
                    <View>
                    {/* <TouchableOpacity onPress={() => {
                        navigation.navigate('CustomProduct')
                    }}>
                        <List.Item
                            title="Bana özel ürünler"
                            titleStyle={{
                                fontSize:14
                            }}
                            left={props => <List.Icon {...props} icon="account-details" />}
                        />
                    </TouchableOpacity>
                    <Divider /> */}
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('OrderList')
                    }}>
                        <List.Item
                            title="My Orders"
                            titleStyle={{
                                fontSize:14
                            }}
                            left={props => <List.Icon {...props} icon="file-eye-outline" />}
                        />
                    </TouchableOpacity>
                    <Divider />
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('AccountInfo')
                    }}>
                        <List.Item
                            titleStyle={{
                                fontSize:14
                            }}
                            title="My Account"
                            left={props => <List.Icon {...props} icon="shield-account" />}
                        />
                    </TouchableOpacity>
                    <Divider />
                    {/* <TouchableOpacity onPress={() => {
                        navigation.navigate('PasswordChange')
                    }}>
                        <List.Item
                            titleStyle={{
                                fontSize:14
                            }}
                            title="Change Password"
                            left={props => <List.Icon {...props} icon="lock-reset" />}
                        />
                    </TouchableOpacity>
                    <Divider /> */}
                    <TouchableOpacity onPress={() => {
                        deleteToken();
                        setToken('')
                    }}>
                        <List.Item
                            titleStyle={{
                                fontSize:14,
                                color:'#fff',
                                fontWeight:'600'
                            }}
                            style={{
                                backgroundColor:'#f94747'
                            }}
                            title="Logout"
                            left={props => <List.Icon {...props} color={"#fff"} icon="logout" />}
                        />
                    </TouchableOpacity>
                    <Divider />
                </View>
              </View>
           :
           <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Login')
                }}>
                    <List.Item
                        title="Login"
                        titleStyle={{
                            fontSize:14
                        }}
                        left={props => <List.Icon {...props} icon="account-arrow-right" />}
                    />
                </TouchableOpacity>
                <Divider />
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Register')
                }}>
                    <List.Item
                        title="Register"
                        titleStyle={{
                            fontSize:14
                        }}
                        left={props => <List.Icon {...props} icon="account-multiple-plus" />}
                    />
                </TouchableOpacity>
                <Divider />
            </View>
           }
                <Divider style={{height:25,backgroundColor: '#eee',}} />

            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ContactInfo')
                }}>
                    <List.Item
                        title="Contact Info"
                        titleStyle={{
                            fontSize:14
                        }}
                        left={props => <List.Icon {...props} icon="information-variant" />}
                    />
                </TouchableOpacity>
                {/* <Divider />
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ContactScreen')
                }}>
                    <List.Item
                        title="Contact Us"
                        titleStyle={{
                            fontSize:14
                        }}
                        left={props => <List.Icon {...props} icon="cellphone" />}
                    />
                </TouchableOpacity> */}
                {/* <Divider />
                <View>
                    <RNPickerSelect
                        items={sports}
                        placeholder=""
                        onValueChange={value => {
                            setSort(value)
                        }}
                        onUpArrow={""}
                        doneText={"Uygula"}
                        value={sort}
                        Icon={() => {
                            return (
                                <Icon name={"google-translate"} color={"#757575"} size={20} />
                            )
                        }}
                        style={{
                            ...pickerSelectStyles,
                                iconContainer: {
                                    top: 13,
                                    left: 17,
                                },
                            }}
                        InputAccessoryView={() => InputAccessoryView(refPicker)}
                        ref={ref => {
                            setRef(ref);
                          }}
                        useNativeAndroidPickerStyle={false}
                        touchableDoneProps={true}
                        textInputProps={{ underlineColor: 'yellow' }}
                    />
                </View> */}

                <Divider />
            </View>

       </ScrollView>
    )
}
const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'#fff'
    },
   profileHeader:{
       flex:1,
       padding:30,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#f7f7f7',
        borderBottomColor:'#eee',
        borderBottomWidth:1,
   },
   profileText:{
       marginTop:20,
       fontSize:15,

   }
});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      color: 'black',
      textAlignVertical:'center',
      paddingLeft:12,
      fontSize:12,
      paddingVertical:15,
      paddingLeft:73,
      borderBottomColor:'#eee',
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });
