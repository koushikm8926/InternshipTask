import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.TopView}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  TopView:{
    marginTop:Platform.OS ==="android" ? 35:0 ,
  }
})