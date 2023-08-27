import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import Foo from './components/Foo';
import Button from './components/Button';
import { Provider } from 'react-redux'; // react-redux'den sadece Provider'ı içe aktarın
import Store from './redux/Store';
import UserInfo from './components/UserInfo';

export default function App() {

  

  return (
    <Provider store={Store}> 
      <View style={styles.container}>
        <StatusBar style="auto" />
        <UserInfo/>
        <Foo/>
        <Counter />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
