import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'


export default function CoursesScreen() {

  const courses = [
    {name:'React', id:'1'},
    {name:'Angular', id:'2'},
    {name:'Vue', id:'3'},
    {name:'Bootstrap', id:'4'}
  ];

  return (
    <FlatList 
    data={courses} 
    horizontal // yatay hizalar
    showsHorizontalScrollIndicator // scroll bar kaybolur
    keyExtractor={(item) => item.id}
    renderItem={({item}) => {
      return <Text style={styles.content}>{item.name}</Text>
    }}
    
    />
  )
}

const styles = StyleSheet.create({
  content : {
    fontSize: 25,
    backgroundColor: 'red',
    marginVertical: 10,
    padding: 25
  }

})