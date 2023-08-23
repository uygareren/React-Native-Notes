import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function ProfileUpdate({navigation}) {
  return (
    <View>
      <Text>ProfileUpdate</Text>
      <Button title='Go To Profile' onPress={() => navigation.navigate("Profile")}></Button>

    </View>
  )
}

const styles = StyleSheet.create({})