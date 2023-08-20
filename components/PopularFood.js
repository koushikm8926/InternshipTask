import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const PopularFood = () => {
    const navigation= useNavigation();
    const navigateToScreenB = () => {
        navigation.navigate('Details', { food });
      };
    const food=[
        {
            id:0,
            name:"Jeera Rice",
            rating:4.1,
            ratings:43,
            price:275,
            description:'Jeera Bhaat or Jeera Rice is an Indian dish consisting of rice and cumin seeds.',
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xukq8swrwct8usmg4cjv",
           
        },
        {
            id:"102",
            name:"Chilly Chicken (Boneless)",
            rating:4.1,
            ratings:43,
            price:275,
            description:'Crispy and flavorful is how I would describe this Chilli Chicken. Boneless chicken is marinated in flavorful sauces, fried until crispy,',
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ry3c3f518z10t4olu4l7",
        },
        {
            id:1,
            name:"Veg Fried Rice",
            rating:4.1,
            ratings:43,
            price:275,
            description:'Veg fried rice is a popular Asian recipe made with cooked rice stir-fried with various vegetables and seasoned with soy sauce',
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pycpbzawueci1dvhmkr3",
      
        },
        {
            id:"103",
            name:"Spl Veg Biryani",
            rating:4.1,
            ratings:43,
            price:275,
            description:'Vegetable Biryani is an aromatic rice dish made with basmati rice, mix veggies, herbs & biryani spices',
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fsitbray4gq1kxcndqqx",
        },
        {
            id:2,
            name:"Egg Fried Rice",
            rating:4.1,
            ratings:43,
            price:275,
            description:'Egg fried rice recipe made in restaurant style, simple, quick and easy. The smoky aroma of the egg fried rice is great & delicious!!',
            description:'This easy egg fried rice is a no-fuss weeknight meal that is better than takeout! ',
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lv6jl9qdscekjmwkxm9l",
        },
        {
            id:"101",
            name:"Paneer 65",
            rating:4.1,
            ratings:43,
            price:275,
            description:'Paneer 65 is a spicy South Indian appetizer made with Paneer aka Indian cheese, flour, spices and herbs like curry leaves.',
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/druwjzmfmz7qvepq3bkr",
        },
        {
            id:3,
            name:"Chicken Fried Rice",
            rating:4.1,
            ratings:43,
            price:275,
            description:'Chicken fried rice is a take-out classic and an easy weeknight meal! ',
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/akmx533z73jjbq8avy6v",
        },
        {
            id:"104",
            name:"Chilly Paneer",
            rating:4.1,
            ratings:43,
            price:275,
            description:'Chilli Paneer is an Indo-Chinese appetizer where crisp batter fried paneer is tossed in slightly sweet, spicy, hot and tangy chilli sauce.',
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/byonwwb8mzxyqluxlqpq",
        }
    ]
  return (
    <View>
      <Text style={styles.text}>Popular Food</Text>
      <ScrollView >
        <Pressable onPress={navigateToScreenB}>
        {food.map((item, index) => (  
         <View style={{ margin: 10, flexDirection:'row', }} key={index}>
            <Image source={{ uri: item.image }} style={{ height: 150,   borderRadius: 7,  width:120, }}/>
                <View style={{flexDirection:'column',}}>
                    <View style={{position: "absolute",left:10,}}>
                        <Text style={{ marginTop: 6, textAlign: "center" ,fontSize:17,fontWeight: "600",}}>{item.name}</Text>
                    </View>
                    <View style={{marginTop:30,marginLeft:10,width:250,}}>
                        <Text>{item.description}</Text>
                    </View>
            </View>
          </View>   
       ))}
       </Pressable>
      </ScrollView>
    </View>
  )
}

export default PopularFood

const styles = StyleSheet.create({
    text:{
        fontWeight:'bold',
        fontSize:16,
        margin:10,  
    }
})



