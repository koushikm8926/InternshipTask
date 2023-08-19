import { StyleSheet, Text, View, Image ,} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'

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
                  <View style={{width:150,}}>
                    <Text style={{fontSize:14,fontWeight: "600",}}>{item.name}</Text>
                    <Text>{item.description}</Text>
                  </View>
                  
                  <Image source={{uri:item.image}} style={{height:100, width:150, borderRadius: 7,}}/>
                </View>
            )
        }



      }}/>
    </View>
  )
}

export default Searchfilter

const styles = StyleSheet.create({})