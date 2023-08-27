import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setUser} from "../redux/Slice"

export default function UserInfo() {

    const user = useSelector((state) => state.counter);
    const dispatch = useDispatch();

  return (
    <View style = {styles.infoContainer}>
      <Text>Name: {user.user.name}</Text>
      <Text>Surname: {user.user.surname}</Text>
      <Button title='Update User' onPress={() => dispatch(setUser({name: "xxxxx", surname: "bbbbbb"}))} />
    </View>
  )
}

const styles = StyleSheet.create({
    infoContainer:{
        marginBottom: 20
    },

})