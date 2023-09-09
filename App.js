import 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'

import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'

const Stack = createNativeStackNavigator();

function FirstDrawer(){
    return(
        <Stack.Navigator
        screenOptions={{
        headerStyle:{
          backgroundColor:'#8b000b'
        },
        headerTintColor:'#ffff',
        headerTitleStyle:{
          fontWeight:'bold'
        }
        }}>
            <Stack.Screen name='FirstPage' component={FirstPage}/>
        </Stack.Navigator>
    )
}

function SecondDrawer(){
    return(
        <Stack.Navigator
        screenOptions={{
        headerStyle:{
          backgroundColor:'#8b000b'
        },
        headerTintColor:'#ffff',
        headerTitleStyle:{
          fontWeight:'bold'
        }
        }}>
            <Stack.Screen name='SecondPage' component={SecondPage}/>
        </Stack.Navigator>
    )
}

const Drawer =createDrawerNavigator();

function MyDrawer(){
    return(
        <Drawer.Navigator
        screenOptions={{
            drawerStyle:{
                backgroundColor:'#c6cbef',
                width:240
            },
            headerStyle:{
                backgroundColor:'#000'
            },
            headerTintColor:'#fff'
        }}>
            <Drawer.Screen name='FirstDrawer' component={FirstDrawer} options={{drawerLabel:'First Page option'}}/>
            <Drawer.Screen name='SecondDrawer' component={SecondDrawer} options={{drawerLabel:'Second Page option'}}/>
        </Drawer.Navigator>
    )
}

const App = () => {
  return (
    <NavigationContainer>
        <MyDrawer/>
    </NavigationContainer>
  )
}

export default App