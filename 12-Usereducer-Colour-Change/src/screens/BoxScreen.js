import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function BoxScreen() {

    const [colors, setColors] = useState([]);

    const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
    }

    return (
        <View>
            <Button title='Add Box' onPress={() => {
                setColors([...colors, randomColor()])
            }}></Button>
            <FlatList
                data={colors}
                renderItem={({ item, index }) => {
                    if (index % 2 === 0) {
                        // Even index, start of a new row
                        return (
                            <View style={styles.row}>
                                <View style={{ ...styles.box, backgroundColor: item }} />
                                {colors[index + 1] && (
                                    <View style={{ ...styles.box, backgroundColor: colors[index + 1] }} />
                                )}
                            </View>
                        );
                    }
                    return null; 
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    box: {
        height: 150,
        width: '45%', // Adjust this value for spacing between boxes
        backgroundColor: 'red', // Default background color
    },
});
