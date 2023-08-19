import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'

const Searchfilter = ({data,input, setInput }) => {
  return (
    <View style={{marginTop:20, }}>
      
      <FlatList data={data} renderItem={({item})=>{
        if(input===""){
            return(
                <View>
                </View>
            )
        }

        if(item.name.toLowerCase().includes(input.toLowerCase())){
            return(
                <View style={{marginVertical:12, }}>
                <Text style={{fontSize:14,fontWeight:'bold'}}>{item.name}</Text>
                </View>
            )
        }



      }}/>
    </View>
  )
}

export default Searchfilter

const styles = StyleSheet.create({})