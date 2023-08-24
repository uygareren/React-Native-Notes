import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function UserCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.username}>{props.username}</Text>
        <Text style={styles.email}>{props.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems: "stretch"
  },
  textContainer:{
      marginTop: 15,
      backgroundColor: "#faf8f5",
      padding: 10
  },
  name:{
    fontSize:24,
    fontWeight:'600',
    color: 'black'
  },
  username:{
    fontSize:17,
    color: "#1333d4"
  },
  email:{
    color: "#d41350"
  }
});
