import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile({navigation}) {
  return (
    <View>
      <Text>Profile</Text>
      <Button title='Go To ProfileDetail' 
      onPress={() => navigation.navigate("ProfileDetail")}>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})