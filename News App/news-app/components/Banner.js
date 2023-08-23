import React from 'react';
import { View, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

export default function Banner({ data }) {
  return (
    <SafeAreaView>
      <ScrollView horizontal>
        {data.map(imageItem => (
          <Image
            key={imageItem.id}
            style={styles.image}
            source={{ uri: imageItem.imageUrl }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginRight: 10, // Add some horizontal spacing between images
    marginTop: 25
  },
});
