import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import {increase, decrease, refresh } from '../redux/Slice'; // Eksik olan içe aktarmaları ekleyin


export default function Counter() {
  
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
    <View style = {styles.container}>
      <Text style = {styles.counterText}>{counter.count}</Text>
      <Button title={"Increase"} onPress={() => dispatch(increase())} />
      <Button title={"Decrease"} onPress={() => dispatch(decrease())} />
      <Button title={"Refresh"} onPress={() => dispatch(refresh())} />
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
      width: 150,
      height:150,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50
    },
    counterText : {
      fontSize: 35
    }

})