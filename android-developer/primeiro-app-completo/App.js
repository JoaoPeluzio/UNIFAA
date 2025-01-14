import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import  Login  from './src/screens/Login/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
