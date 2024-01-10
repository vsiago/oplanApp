import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
  Button,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthContext";
import CostumInputText from "../components/CustumInputText";

export default function SingIn() {
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (email === "" || password === "") {
      return;
    }

    await signIn({ email, password });
  }

  // Navegar para o Register
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("Register" as never);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo-oplan-slogan.png")} // Substitua pelo caminho da sua imagem
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Acessar conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#B1C0D7"
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#B1C0D7"
      />

      <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogin}>
        {loadingAuth ? (
          <ActivityIndicator size={20} color="#fff" />
        ) : (
          <Text style={styles.buttonEntrarText}>Entrar</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress} style={styles.buttonRegister}>
        <Text style={styles.buttonRegisterText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#2D384F",
  },
  logo: {
    width: 240,
    height: 65,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 26,
  },
  input: {
    height: 46,
    width: "90%",
    marginBottom: 10,
    paddingHorizontal: 14,
    backgroundColor: "#1E283C",
    fontSize: 18,
    color: "#fff",
    borderRadius: 6,
  },
  buttonEntrar: {
    width: "90%",
    marginTop: 16,
    backgroundColor: "#31A7E5",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonEntrarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 5,
    padding: 12,
  },
  buttonRegisterText: {
    color: "#fff",
    fontSize: 18,
  },
});
