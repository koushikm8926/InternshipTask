import { Platform, StyleSheet,ScrollView, View, TextInput} from 'react-native'
import React, {useState} from 'react'
import { Feather } from "@expo/vector-icons";

import Carousel from '../components/Carousel';
import FoodTypes from '../components/FoodTypes';
import QuickFood from '../components/QuickFood';
import FilterSection from '../components/FilterSection';
import Searchfilter from '../components/Searchfilter';
import SearchFoodItems from '../data/SearchFoodItems';

const HomeScreen = () => {
  const [input, setInput]= useState("");
  console.log(input);

  const fooditem=[
    {
      id:0,
      name:"Jeera Rice",
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xukq8swrwct8usmg4cjv",
  },
  {
      id:1,
      name:"Veg Fried Rice",
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pycpbzawueci1dvhmkr3",

  },
  {
      id:2,
      name:"Egg Fried Rice",
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lv6jl9qdscekjmwkxm9l",
  },
  {
      id:3,
      name:"Chicken Fried Rice",
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/akmx533z73jjbq8avy6v",
  }
  ]

  return (
    <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>     
      <View style={styles.TopView}>
        <TextInput
          placeholder="Search for Restaurent item or more"
          style={{ fontSize: 17, width: "90%" }}
          onChangeText={(text) => setInput(text)}
        />
        <Feather name="search" size={24} color="#E52B50" />
      </View>
      <Searchfilter input={input} setInput={setInput} data={fooditem} />  
      <Carousel/>
      <FoodTypes/>
      <QuickFood/>
      <FilterSection/>
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
})