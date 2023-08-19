import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useReducer} from 'react'


// Reducer fonksiyonunu tanımlayın
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default function CounterScreen() {

  const [state, dispatch] = useReducer(reducer, {count:0});

  return (
    <View>
        <Button title='arttır' onPress={() => {
          dispatch({type: 'increment', payload:1});
        }}>
        </Button>

        <Button title='azalt' onPress={() => {
          dispatch({type: 'decrement', payload:1});
        }}>

        </Button>
        <Text>Sayı: {state.count}</Text>
        {/* <Text>Sayı: {counter}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({})