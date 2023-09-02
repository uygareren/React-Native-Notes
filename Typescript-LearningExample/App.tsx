import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter  from './components/Counter';

export default function App() {


  const startCountValue = 5;
  const IncrementCountValue = 10;

  return (
    <View style={styles.container}>
      <Counter startValue = {startCountValue} incrementValue = {IncrementCountValue}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
