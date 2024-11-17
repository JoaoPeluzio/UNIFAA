import { Text, View, StyleSheet } from "react-native";
import MeuInput from "../../components/MeuInput";
import SuperButton from "../../components/SuperButton";

export default function Login () {

  const login = () => {
    alert('Fui clicado!');
  };

  return (
    <View style={styles.boxLogin}>

      <Text style={styles.titulo}> Login </Text>
      <MeuInput
        label='E-mail' 
        placeholder='Digite seu e-mail'
        comMascara={false}
      />

      <MeuInput
        label='Senha'
        placeholder='Digite sua senha'
        comMascara={true}
      />

    <View>
      <Text style={styles.boxRecuperarSenha}>Esqueci minha senha?</Text>
    </View>

    <SuperButton 
    value = 'Entrar'
    onPress={login}
    type='primary' 
    />
    
    </View>

  );
}

const styles = StyleSheet.create({
  boxLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  titulo: {
    fontSize: 30,
    color: 'orange',
    fontWeight: '800',
    marginBottom: 30
    },

    boxRecuperarSenha: {
      justifyContent: 'flex-start',
      color: 'orange',
    }
});