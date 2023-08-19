import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to CoursesScreen"
        onPress={() => navigation.navigate('CoursesScreen')}
      />
      <Text>Go To Course Information Screen</Text>
      <Button
        title="Go to CoursesScreen"
        onPress={() => navigation.navigate('CoursesInformationScreen')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})