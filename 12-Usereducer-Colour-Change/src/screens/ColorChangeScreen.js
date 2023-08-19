import { StyleSheet, Text, View } from 'react-native';
import React, { useReducer, useEffect } from 'react';
import ColorChange from '../../components/ColorChange';

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeRed':
      return state.red + action.payload > 256 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case 'changeBlue':
      return state.blue + action.payload > 256 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };

    case 'changeGreen':
      return state.green + action.payload > 256 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };

    default:
      return state;
  }
};

export default function ColorChangeScreen() {
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });

  useEffect(() => {
    // Başlangıçta rastgele bir renk oluştur
    const randomColor = () => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      dispatch({ type: 'changeRed', payload: red });
      dispatch({ type: 'changeGreen', payload: green });
      dispatch({ type: 'changeBlue', payload: blue });
    };

    randomColor();
  }, []);

  return (
    <View>
      <ColorChange
        color="Red"
        onIncrease={() => dispatch({ type: 'changeRed', payload: 20 })}
        onDecrease={() => dispatch({ type: 'changeRed', payload: -20 })}
      />
      <ColorChange
        color="Blue"
        onIncrease={() => dispatch({ type: 'changeBlue', payload: 20 })}
        onDecrease={() => dispatch({ type: 'changeBlue', payload: -20 })}
      />
      <ColorChange
        color="Green"
        onIncrease={() => dispatch({ type: 'changeGreen', payload: 20 })}
        onDecrease={() => dispatch({ type: 'changeGreen', payload: -20 })}
      />
      <View
        style={{
          ...styles.container,
          backgroundColor: `rgb(${state.red}, ${state.blue}, ${state.green})`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    marginTop: 50,
  },
});
