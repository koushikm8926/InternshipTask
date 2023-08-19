import { Platform, StyleSheet, Text, View,  TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import Carousel from '../components/Carousel';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
      
      <View style={styles.TopView}>
        <TextInput
          placeholder="Search for Restaurent item or more"
          style={{ fontSize: 17, width: "90%" }}
        />
        <Feather name="search" size={24} color="#E52B50" />
      </View>

      <Carousel/>

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  ScrollView:{
    paddingTop: Platform.OS === "android" ? 35 : 0 
  },
  TopView:{
    flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderColor: "#C0C0C0",
          borderWidth: 1,
          padding: 10,
          margin: 10,
          borderRadius: 7,  
  }
})