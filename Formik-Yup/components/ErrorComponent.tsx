import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface ErrorComponentProps{
    message: string
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({message}) => {
    return (
        <Text style = {styles.message}>{message}</Text>
    )
}

const styles = StyleSheet.create({
    message:{
        color: "red",
        alignSelf: 'center',
        marginBottom: 15
    }
})

export default ErrorComponent;