import { SafeAreaView, TextInput, StyleSheet, Text } from "react-native";

const MeuInput = (props) => {
  return (
    <SafeAreaView>
      <Text>{ props.label }</Text>
      <TextInput
        style={style.input}
        placeholder={props.placeholder}
        secureTextEntry={props.comMascara}
      />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
    color: '#1a1a1a'
  }
})

export default MeuInput;
