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
            description:'Jeera Bhaat or Jeera Rice is an Indian dish consisting of rice and cumin seeds.',
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xukq8swrwct8usmg4cjv",
            menu:[
                {
                    id:"20",
                    name:"Recommended",
                    items:[
                        {
                            id:"101",
                            name:"Paneer 65",
                            price:275,
                            description:"E: 723.82 KCal (241.27 KCal), C: 30.89 Grams (10.30 Grams), P: 32.95 Grams (10.98 Grams), F: 51.82 Grams (17.27 Grams)",
                            rating:4.1,
                            ratings:43,
                            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/druwjzmfmz7qvepq3bkr",
                            veg:true,
                            bestSeller:false,
                            quantity:1,
                        },
                        {
                            id:"102",
                            name:"Chilly Chicken (Boneless)",
                            price:285,
                            description:"E: 604.42 KCal (163.36 KCal), C: 29.67 Grams (8.02 Grams), P: 50.63 Grams (13.68 Grams), F: 30.94 Grams (8.36 Grams)",
                            rating:4.3,
                            ratings:34,
                            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ry3c3f518z10t4olu4l7",
                            veg:false,
                            bestSeller:true,
                            quantity:1,
                        },
                        {
                            id:"103",
                            name:"Spl Veg Biryani",
                            price:250,
                            description:"E: 1327.35 KCal (126.41 KCal), C: 213.24 Grams (20.31 Grams), P: 26.99 Grams (2.57 Grams), F: 38.46 Grams (3.66 Grams)",
                            rating:4.5,
                            ratings:56,
                            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fsitbray4gq1kxcndqqx",
                            veg:true,
                            bestSeller:false,
                            quantity:1,
                        },
                        {
                            id:"104",
                            name:"Chilly Paneer",
                            price:220,
                            description:"E: 871.69 KCal (272.40 KCal), C: 21.54 Grams (6.73 Grams), P: 51.90 Grams (16.22 Grams), F: 64.36 Grams (20.11 Grams",
                            rating:3.8,
                            ratings:22,
                            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/byonwwb8mzxyqluxlqpq",
                            veg:true,
                            bestSeller:true,
                            quantity:1,
                        },
                        {
                            id:"105",
                            name:"Chicken 65",
                            price:300,
                            description:"E: 544.39 KCal (155.54 KCal), C: 25.11 Grams (7.17 Grams), P: 45.15 Grams (12.90 Grams), F: 27.91 Grams (7.97 Grams)",
                            rating:4.5,
                            ratings:45,
                            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/x0jegvlf4h7wrgaaqdqi",
                            veg:false,
                            bestSeller:true,
                            quantity:1,
                        }
                    ]
                },
               
            ]
        },
        {
            id:"102",
            name:"Chilly Chicken (Boneless)",
            description:'Crispy and flavorful is how I would describe this Chilli Chicken. Boneless chicken is marinated in flavorful sauces, fried until crispy,',
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



