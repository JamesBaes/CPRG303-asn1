import { StyleSheet, Text, View } from 'react-native'
import { Tabs } from 'expo-router'
import {Ionicons, AntDesign, FontAwesome} from '@expo/vector-icons';

import React from 'react'

const Layout = () => {
  return (
    <Tabs 
    screenOptions={{
        tabBarStyle: {backgroundColor: "black", height: 60, paddingBottom: 10,},
        tabBarActiveTintColor: 'yellow',
        headerShown: false,
    }}
    >
    <Tabs.Screen
    name="index"
    options={{
        title: "Home",
        tabBarIcon: ({color, size}) => (<AntDesign name="home" size={24} color="grey"/>)
    }}
    />
    <Tabs.Screen
    name="searchPage"
    options={{
        title: "Search",
        tabBarIcon: ({color, size}) => (<FontAwesome name="search" size={24} color="grey" />)
    }}
    />
    </Tabs>
)
}

export default Layout

const styles = StyleSheet.create({})