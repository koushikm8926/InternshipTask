import { StyleSheet, Text, View, Image ,Pressable} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";

const Searchfilter = ({data,input, setInput }) => {
 console.log(data);
    return (
    <View style={{marginTop:20, }}>
      
      <FlatList data={data} renderItem={({item})=>{
        if(input===""){
            return(
                <View/> 
            )
        }

        if(item.name.toLowerCase().includes(input.toLowerCase())){
            return(
                <View style={{ flexDirection: "row",margin:10,   justifyContent: "space-between", }}>
                  <View style={{width:160,}}>
                    <View style={{flexDirection:'row', justifyContent: "space-between",  alignItems: "center",}}>
                      <Text style={{fontSize:17,fontWeight: "600",}}>{item.name}</Text>
                      <MaterialIcons name="stars" size={24} color="green" />
                      </View>
                    <Text>{item.description}</Text>
                  </View>
                  
                  <Pressable style={{ marginRight: 10, }}>
                  <Image source={{uri:item.image}} style={{height:100, width:150, borderRadius: 7,}}/>
                      <Pressable
                          style={{
                            position: "absolute",
                            top: 70,
                            left: 35,
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
                    </Pressable>
                </View>
            )
        }



      }}/>
    </View>
  )
}

export default Searchfilter

const styles = StyleSheet.create({})