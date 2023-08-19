import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Information({title, imageSource, desc}) {
  return (
    <View>
      <Image style={styles.img} source={imageSource}/>
      <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  img:{
    width: '100%',
  },
  textContainer :{
    alignItems: 'center',
    paddingVertical : 20
  },
  title:{
    fontSize:30,
  },
  desc:{
    fontSize:20,
  }
})