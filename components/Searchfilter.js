import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'

const Searchfilter = ({data,input, setInput }) => {
 //console.log(data);
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
                <View>
                <Text style={{fontSize:14}}>{item.name}</Text>
                <Image source={{uri:item.image}} style={{height:60, width:90,}}/>
                </View>
            )
        }



      }}/>
    </View>
  )
}

export default Searchfilter

const styles = StyleSheet.create({})