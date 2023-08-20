import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DetailsScreen = ({ route }) => {
  const navigation= useNavigation();
  const { food } = route.params;
  console.log(food);
  return (
    <View>

    <View style={{ marginTop: Platform.OS === "android" ? 35 : 0 }}>
        <View
          style={{
            height: 300,
            backgroundColor: "#B4C0DE",
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Ionicons
              name="arrow-back-circle"
              size={40}
              color="black"
              onPress={() => navigation.navigate("Home")}
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="search1" size={24} color="black" />
              <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 7 }}>
                Search
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 210,
              backgroundColor: "white",
              marginHorizontal: 20,
              marginVertical: 5,
              padding: 10,
              borderRadius: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                Arsalan Restarunt
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign
                  style={{ marginHorizontal: 7 }}
                  name="sharealt"
                  size={24}
                  color="black"
                />
                <AntDesign name="hearto" size={24} color="black" />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 7,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: 400 }}>
             4.4 || 30-40 
              </Text>
              <Text style={{ marginLeft: 3 }}>.</Text>
              <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: 400 }}>
              Minute
              </Text>
            </View>

            <Text style={{ fontSize: 17, marginTop: 7, color: "grey" }}>
            North Indian || South Indian
            </Text>

            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text>Outlet</Text>
              <Text
                style={{ marginLeft: 15, fontSize: 14, fontWeight: "bold" }}
              >
               Kolkata,SaltLake Sector || .
              </Text>
            </View>

            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text>22 mins</Text>
              <Text
                style={{ marginLeft: 15, fontSize: 14, fontWeight: "bold" }}
              >
                Home
              </Text>
            </View>

            <Text
              style={{
                borderColor: "grey",
                height: 1,
                borderWidth: 0.6,
                marginTop: 12,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 7,
              }}
            >
              <Ionicons name="bicycle" size={24} color="orange" />
              <Text style={{ marginLeft: 4, color: "grey", fontSize: 15 }}>
                0-3 KM |
              </Text>
              <Text style={{ marginLeft: 4, fontSize: 15, fontWeight: "bold" }}>
                35 Delivery Fee Will Apply
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: 17,
            textAlign: "center",
            fontWeight: "500",
            marginTop: 10,
          }}
        >
          MENU
        </Text>
        <Text
          style={{
            borderColor: "grey",
            height: 1,
            borderWidth: 0.6,
            marginTop: 12,
          }}
        />
       
      </View>
    
     <ScrollView style={{margin:10,}} showsVerticalScrollIndicator={false}>
      {food.map((item,index)=>(
      <View key={index}>
          <View style={{flexDirection:'row', marginBottom:30,}}>
            <View style={{flexDirection:'column', width:250,}}>

                <View style={{flexDirection:'row',}}>
                        <Text style={{fontSize: 16 ,  fontWeight: "bold",}}>{item.name}</Text>
                            <View style={{marginLeft:10,flexDirection:'row',marginRight:10,}}>
                              <Text style={{fontSize: 16, fontWeight: "bold",}}>{item.rating}</Text>
                              <MaterialIcons name="stars" size={24} color="green" />
                            </View>
                </View>
              
                        <Text>{item.description}</Text>
                <View style={{flexDirection:'row',marginTop:5,}}>
                        <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
                        <Text style={{ marginLeft: 6, fontSize: 16,  fontWeight:'400' }}>FREE DELIVERY</Text>
                        <Text style={{fontSize: 16}}>|| {item.time} Minute</Text>
                </View>

             <View style={{flexDirection:'row',marginTop:5,}} >
                <View style={{
                                  alignItems: "center",
                                  justifyContent: "center",
                                  borderRadius: 11,
                                  height: 22,
                                  width: 22,
                                  backgroundColor: "#FFB6C1",
                                }}>
                  <Text style={{  fontWeight: "bold",color: "white",fontSize: 13,}}>$</Text>
                </View>
                <View style={{marginLeft:10,}}>
                   <Text style={{fontSize: 16, fontWeight:'bold'}}>{item.price} Rupees</Text>
                </View>
               
              </View>   
           
            
            </View>
            <View>
              <Image source={{uri:item.image}} style={{height:120,width:120,borderRadius:7, }}/>
              <Pressable
                          style={{
                            position: "absolute",
                            top: 90,
                            left: 25,
                            flexDirection: "row",
                            paddingHorizontal: 25,
                            paddingVertical: 10,
                            alignItems: "center",
                            backgroundColor: "white",
                            borderRadius: 5,
                          }}
                        >
                      <Text style={{ fontSize: 15, fontWeight: "800", color: "#018749" }}>
                        Add
                      </Text>
              </Pressable>
            </View>
          </View>
      </View>
      ))}
     </ScrollView>

    </View>
  )
}

export default DetailsScreen




 
 