import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const FilterSection = () => {
  return (
    <View style={{marginTop:10,}}>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
        <Pressable style={styles.Pressable}>
          <Text style={{marginRight:6}}>Filter</Text>
          <Ionicons name="filter" size={20} color="black" />
        </Pressable>

        <Pressable style={styles.Pressable}>
          <Text>Sort By Price</Text>
        </Pressable>

        <Pressable style={styles.Pressable}>
          <Text> Veg / NonVeg</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default FilterSection

const styles = StyleSheet.create({
    Pressable:{
        marginHorizontal:10, 
        flexDirection:'row', 
        alignItems:'center', 
        borderWidth:1, 
        borderColor:'#d0d0d0', 
        padding:10, 
        borderRadius:20, 
        justifyContent:'center', 
        width:120
      }
})