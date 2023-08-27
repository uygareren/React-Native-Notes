import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Foo() {

    const counter = useSelector((state) => state.counter)

  return (
    <View>
        <Text style={styles.text}>{counter.count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
  text:{
    fontSize: 35,
    marginBottom: 20
  }
})