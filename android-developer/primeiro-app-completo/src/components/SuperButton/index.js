import {  StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SuperButton = (props) => {
  return (
    <View>
    <TouchableOpacity style={styles.button} onPress={props.onPress}>

      <Text style={styles.value}>{props.value}</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    alignItens: 'center'
  },

  value: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  }
  
});

export default SuperButton;