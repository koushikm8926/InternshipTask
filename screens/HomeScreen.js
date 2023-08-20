import { Platform, StyleSheet,ScrollView, View, TextInput} from 'react-native'
import React, {useState} from 'react'
import { Feather } from "@expo/vector-icons";

import Carousel from '../components/Carousel';
import FoodTypes from '../components/FoodTypes';
import QuickFood from '../components/QuickFood';
import FilterSection from '../components/FilterSection';
import Searchfilter from '../components/Searchfilter';
import SearchFoodItems from '../data/SearchFoodItems';

import HotelsFoodList from '../data/HotelsFoodList';
import MenuItem from '../components/MenuItem';
import PopularFood from '../components/PopularFood';
import SecondCarousel from '../components/SecondCarousel';
const HomeScreen = () => {
  const [input, setInput]= useState("");
  console.log(input);

  const fooditem=[
    {
      id:0,
      name:"Jeera Rice",
      description:'Jeera Bhaat or Jeera Rice is an Indian dish consisting of rice and cumin seeds.',
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xukq8swrwct8usmg4cjv",
  },
  {
      id:"102",
      name:"Chilly Chicken (Boneless)",
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ry3c3f518z10t4olu4l7",
  },
  {
      id:1,
      name:"Veg Fried Rice",
      description:'Veg fried rice is a popular Asian recipe made with cooked rice stir-fried with various vegetables and seasoned with soy sauce',
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pycpbzawueci1dvhmkr3",

  },
  {
      id:"103",
      name:"Spl Veg Biryani",
      description:'Vegetable Biryani is an aromatic rice dish made with basmati rice, mix veggies, herbs & biryani spices',
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fsitbray4gq1kxcndqqx",
  },
  {
      id:2,
      name:"Egg Fried Rice",
      description:'Egg fried rice recipe made in restaurant style, simple, quick and easy. The smoky aroma of the egg fried rice is great & delicious!!',
      description:'This easy egg fried rice is a no-fuss weeknight meal that is better than takeout! ',
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lv6jl9qdscekjmwkxm9l",
  },
  {
      id:"101",
      name:"Paneer 65",
      description:'Paneer 65 is a spicy South Indian appetizer made with Paneer aka Indian cheese, flour, spices and herbs like curry leaves.',
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/druwjzmfmz7qvepq3bkr",
  },
  {
      id:3,
      name:"Chicken Fried Rice",
      description:'Chicken fried rice is a take-out classic and an easy weeknight meal! ',
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/akmx533z73jjbq8avy6v",
  },
  {
      id:"104",
      name:"Chilly Paneer",
      description:'Chilli Paneer is an Indo-Chinese appetizer where crisp batter fried paneer is tossed in slightly sweet, spicy, hot and tangy chilli sauce.',
      image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/byonwwb8mzxyqluxlqpq",
  }
  ]

  const data= HotelsFoodList;
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

      
      {data.map((item, index)=>(
        <MenuItem key={index} item={item}/>
      ))}

  <SecondCarousel/>

      <PopularFood/>

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