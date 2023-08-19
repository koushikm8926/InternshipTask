import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.TopView}>
      <Text>DetailsScreen</Text>
    </SafeAreaView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  TopView:{
    marginTop:Platform.OS ==="android" ? 35:0 ,
  }
})