import * as React from 'react';
import { Text, View, Image,AppState, Linking } from 'react-native';
import { NavigationContainer,getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {AuthContext} from './src/contexts/context';

/* General Screens */
import HomeScreen from './src/screens/Home/HomeScreen';
import CartScreen from './src/screens/Cart/CartScreen';
import CollectionsScreen from './src/screens/Collections/CollectionsScreen';
import ProductScreen from './src/screens/Product/ProductScreen';
import ProductListScreen from './src/screens/Product/ProductListScreen';
import ProductDetailScreen from './src/screens/Product/ProductDetailScreen';

/* Account Screens */
import AccountScreen from './src/screens/Account/AccountScreen';
import AccountInfoScreen from './src/screens/Account/AccountInfoScreen';
import OrderListScreen from './src/screens/Account/OrderListScreen';
import OrderDetailScreen from './src/screens/Account/OrderDetailScreen';
import PasswordChangeScreen from './src/screens/Account/PasswordChangeScreen';
import ContactInfoScreen from './src/screens/Account/ContactInfoScreen';
import ContactScreen from './src/screens/Account/ContactScreen';

/* Auth Screens */
import LoginScreen from './src/screens/Account/LoginScreen';
import RegisterScreen from './src/screens/Account/RegisterScreen';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'react-native-axios';

const TopTap = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const NewStack = createStackNavigator();
const ContactStack = createStackNavigator();
const StackProfile = createStackNavigator();

function MyTabs({ navigation, route }) {
  const routeName = getFocusedRouteNameFromRoute(route);

  React.useEffect(() => {
    let title = "";
    if(routeName == "Account"){
       title = "Account"
    }else if(routeName == "Cart"){
      title = "My Cart"
    }else{
      title = ''
    }

    function LogoTitle() {
      return (
        <Image
          style={{ width: 90, height: 50 }}
          source={{uri:'https://cdn.shopify.com/s/files/1/0592/8517/6364/files/eson-logo-black.png?v=1703760330'}}
        />
      );
    }

    navigation.setOptions({
      headerTitle: title != '' ? title : LogoTitle,
      headerRight: ''
    });

  }, [navigation, route]);
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home-circle'
                : 'home-circle-outline';
            } else if (route.name === 'Products') {
              iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted';
            } else if (route.name === 'Account') {
              iconName = focused ? 'account' : 'account';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'basket-outline' : 'basket-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarOnPress: ({ navigation }) => {
              console.log("pressed eson")
          }
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          headerTitle:'',
          headerShown:false
        }}/>
        <Tab.Screen name="Products" component={MyTopTabs} navigation={navigation} options={{
          headerShown:false
        }} />
        <Tab.Screen name="Cart" navigation={navigation} listeners={{
            tabPress: e => {

            }
          }}
          component={CartScreen} options={{
            headerShown:false
            // tabBarBadge: basketCount(),
        }} />
        <Tab.Screen name="Account" component={ProfileSnack} options={{
          headerShown:false
        }} />
      </Tab.Navigator>
  );
}

function ProfileSnack(){
  return(
    <StackProfile.Navigator screenOptions={{
      headerShown:false
    }}>
      <StackProfile.Screen name="Profile" component={AccountScreen} />
    </StackProfile.Navigator>
  )
}

function list(menu){

  if(menu){
    return menu.map(element => {
      return (
        <TopTap.Screen key={element._id} name={element.title} initialParams={{
          id:element.id,
        }} component={ProductListScreen} options={{
          tabBarLabel:element.title
        }} />
      );
    });
  }
}

function MyTopTabs({navigation,route}) {

  const categories = [
    {
      "id": 1,
      "title": "Hair Tools"
    },
    {
      "id": 2,
      "title": "Hair Style"
    },
    {
      "id": 3,
      "title": "Barbers"
    },
    {
      "id": 4,
      "title": "Electrical"
    },
    {
      "id": 5,
      "title": "Beauty"
    },
    {
      "id": 6,
      "title": "Furniture"
    },
    {
      "id": 7,
      "title": "New In"
    },
    {
      "id": 8,
      "title": "Top Sellers"
    }
  ]

  // React.useLayoutEffect(() => {
  //   axios.get('https://milanjewellery.com/api/get/category')
  //   .then(function (response) {
  //    setProduct(response.data)
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }, []);
  return (
    <TopTap.Navigator tabBarOptions={{
      labelStyle: { fontSize: 12, color:'#fff', fontWeight:"700"},
      scrollEnabled:true,
      lazy:true,
      tabStyle: {
      },
      indicatorStyle: { backgroundColor: '#fff',padding:2 },
      style: { backgroundColor: '#000' },
    }} >
      <TopTap.Screen name="Products" component={ProductScreen} options={{tabBarLabel:'All Products'}} />
      {
       list(categories)
      }

    </TopTap.Navigator>
  );
}

export default function App() {
  const [isLoading,setIsLoading] = React.useState(true);
  const [initialised, setInitialised] = React.useState(false); // Deep link universal check

  const authContext = React.useMemo(() => ({

  }),[])

  React.useEffect(() => {
    setIsLoading(false);
  },[])

  if( isLoading ) {
    return(
      <View style={{flex:1,backgroundColor:'#fff',zIndex:2,position:"absolute",left:0,top:0,bottom:0,right:0,alignItems:'center',justifyContent:'center'}}>
          <Image width={20} height={20} source={require('./src/assets/loading.gif')} />
      </View>
    );
  }
  return (
    <GestureHandlerRootView>

      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
              headerBackTitle:'Go Back',
            }}>
            <Stack.Screen name="Home" component={MyTabs}  options={{
              headerTitle:''
            }}/>
            <Stack.Screen name="ProductDetail" options={{headerShown:true, headerTitle:''}} component={ProductDetailScreen} />
            <Stack.Screen name="BasketScreen" options={{headerShown:false}} component={CartScreen} />
            <Stack.Screen name="OrderList" component={OrderListScreen} options={{ headerTitle: 'My Orders' }} />
            <Stack.Screen name="OrderDetail" component={OrderDetailScreen} options={{ headerTitle: 'Order Detail' }} />
            <Stack.Screen name="AccountInfo" component={AccountInfoScreen} options={{ headerTitle: 'My Account' }} />
            <Stack.Screen name="ContactInfo"  component={ContactInfoScreen} options={{ headerTitle: 'Contact Info' }} />
            <Stack.Screen name="ContactScreen"  component={ContactScreen} options={{ headerTitle: 'Contact Us' }} />
            <Stack.Screen name="PasswordChange" component={PasswordChangeScreen} options={{ headerTitle: 'Change Password' }} />
            <Stack.Screen name="Login" options={{headerShown:false}}  component={LoginScreen} />
            <Stack.Screen name="Register"  options={{headerShown:false}}component={RegisterScreen} />
        </Stack.Navigator>



      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
