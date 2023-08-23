import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProfileDetail({navigation}) {
  return (
    <View>
      <Text>ProfileDetail</Text>
      <Button title='Go To ProfileUpdate' onPress={() => navigation.navigate("ProfileUpdate")}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})