import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function News({ news_data }) {
    return (
      <View style={styles.container}>
        <ScrollView vertical>
          {news_data.map(item => (
            <View key={item.u_id} style={styles.itemContainer}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <Text style={styles.author_title}>{item.author}</Text>
              <Text style={styles.news_title}>{item.title}</Text>
              <Text style={styles.news_description}>{item.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    itemContainer: {
      padding:10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    image: {
      width: 375,
      height: 250,
      alignSelf: 'center',
      marginBottom: 20
    },
    author_title: {
      fontSize: 24,
      fontWeight: '600',
      marginBottom: 5
    },
    news_title: {
      fontSize:16,
      fontWeight: '600',
      marginBottom: 5
    },
    news_description: {
        fontSize:15,
        marginBottom:10
    }
  });
  