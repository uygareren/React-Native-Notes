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
      <Text>Go To Counter Screen</Text>
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('CounterScreen')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})