import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';


export default function First(props) {

  function goToSecond(){
    props.navigation.navigate('Second', {username: "Uygar"})
  }

  return (
    <View>
      <Text>First</Text>
      <Button title="Go to Second" onPress={goToSecond}></Button>
    </View>
  )
}


const styles = StyleSheet.create({});
