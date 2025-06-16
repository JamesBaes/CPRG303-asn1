import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'

const SearchPage = () => {
  return (
    <SafeAreaView>

    </SafeAreaView>
  )
}

export default SearchPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Adjust for Android status bar
    },

})