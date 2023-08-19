import { Platform, StyleSheet, Text, View,  TextInput, ScrollView , Pressable} from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import Carousel from '../components/Carousel';
import FoodTypes from '../components/FoodTypes';
import QuickFood from '../components/QuickFood';
import { Ionicons } from '@expo/vector-icons';

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
      <FoodTypes/>
      <QuickFood/>

      
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
      <Pressable style={styles.Pressable}>
        <Text style={{marginRight:6}}>Filter</Text>
        <Ionicons name="filter" size={20} color="black" />
      </Pressable>

      <Pressable style={styles.Pressable}>
        <Text>Sort By Value</Text>
      </Pressable>

      <Pressable style={styles.Pressable}>
        <Text>Sort By Price</Text>
      </Pressable>
      </View>



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
  }, 
  Pressable:{
    marginHorizontal:10, 
    flexDirection:'row', 
    alignItems:'center', 
    borderWidth:1, 
    borderColor:'#d0d0d0', 
    padding:10, 
    borderRadius:20, 
    justifyContent:'center', 
    width:120
  }
})