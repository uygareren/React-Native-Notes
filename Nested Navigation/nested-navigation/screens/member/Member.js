import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function Member({navigation}) {
  return (
    <View>
      <Text>Member</Text>
      <Button title='Go To MemberDetail' onPress={() => navigation.navigate("MemberDetail")}></Button>

    </View>
  )
}

const styles = StyleSheet.create({})