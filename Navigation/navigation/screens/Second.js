import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Second(props) {

  function goBackFirst(){
    props.navigation.goBack();
  }

  const username = props.route.params ? props.route.params.username : 'N/A';

  return (
    <View>
      <Text>Second</Text>
      <Button title="Go Back First" onPress={goBackFirst}></Button>
      <Text>{username}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})