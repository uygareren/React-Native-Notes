import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import UserCard from './components/UserCard';

export default function App() {

  const URL = "https://jsonplaceholder.typicode.com/users";
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(true)

  async function fetchingData() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setUserData(data);
      setloading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const renderUser = ({item}) => (
    <UserCard name={item.name} username={item.username} email={item.email} />
  );

  useEffect(() => {
    fetchingData();
  }, [])
  

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={"large"}/>
      ): (
        <FlatList
          data={userData}
          renderItem={renderUser}
          keyExtractor={(item) => item.id.toString()}
        />  
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50
  },
  
});
