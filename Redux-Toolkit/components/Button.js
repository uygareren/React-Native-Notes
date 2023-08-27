import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


export default function Button({title, onPress}) {
    

  return (
    <View style = {styles.buttonContainer}>
        <TouchableOpacity>
            <Text style = {styles.buttonText} onPress={onPress}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: "black",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText:{
        color: "white",
        fontSize: 18
    }
})