import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.TopView}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  TopView:{
    marginTop:Platform.OS ==="android" ? 35:0 ,
  }
})