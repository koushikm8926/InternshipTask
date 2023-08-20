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
                {/* {route.params.name} */}
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
                {/* {route.params.rating} */}
              </Text>
              <Text style={{ marginLeft: 3 }}>.</Text>
              <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: 400 }}>
                {/* {route.params.time} mins */}
              </Text>
            </View>

            <Text style={{ fontSize: 17, marginTop: 7, color: "grey" }}>
              {/* {route.params.cuisines} */}
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
                {/* {route.params.adress} */}
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
                       
                        <Text>{item.ratings}</Text>
            
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




 
 
//   return (
//     <>
     
//       <Pressable
//       onPress={toggleModal}
//         style={{
//           height: 60,
//           width: 60,
//           justifyContent: "center",
//           borderRadius: 40,
//           backgroundColor: "black",
//           alignItems: "center",
//           marginLeft: "auto",
//           position: "absolute",
//           bottom: 35,
//           right: 25,
//           alignContent: "center",
//         }}
//       >
//         <MaterialIcons
//           style={{ alignItems: "center" }}
//           name="menu-book"
//           size={23}
//           color="white"
//         />
//         <Text
//           style={{ textAlign: "center", color: "white", fontWeight: "500" }}
//         >
//           MENU
//         </Text>
//       </Pressable>

//         <Modal isVisible={modalVisible} onBackButtonPress={toggleModal}>
//         <View style={{height:190, width:250, backgroundColor:'black', position:'absolute', borderRadius:7, right:10, bottom:35,}}>
//         {menu.map((item,i)=>(
//           <View key={i} style={{flexDirection:'row', padding:10, alignItems:'center',  justifyContent:'space-between', }}>
//               <Text style={{color:'#ff8702', fontWeight:'600', fontSize:17,}}>{item.name}</Text>
//               <Text style={{color:'#ff8702', fontWeight:'600', fontSize:17,}}>{item.items.length}</Text>
//           </View>
//         ))}
//         <View style={{justifyContent:'center', alignItems:'center', }}>
//           <Image style={{width:120, height:70, resizeMode:'contain'}} source={{uri:"https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo-768x432.png"}}/>
//         </View>
//         </View>
//         </Modal>



//     </>
//   );
// };


