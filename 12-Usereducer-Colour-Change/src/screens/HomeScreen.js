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
      <Text>Go To Box Screen</Text>
      <Button
        title="Go to Box"
        onPress={() => navigation.navigate('BoxScreen')}
      />
      <Text>Go To Color Change Screen</Text>
      <Button
        title="Go to Color Change"
        onPress={() => navigation.navigate('ColorChangeScreen')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})