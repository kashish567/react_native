import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    try {
      setLoading(true);
      if (!email || !password) {
        alert("Please fill all the fields");
        return;
      }
      setLoading(false);
      console.log("Login user", { email, password });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pagetitle}>Login</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
          inputTitle={"Email"}
          value={email}
          setValue={setEmail}
          keyboardType="email-address"
          autoComplete="email"
        />
        <InputBox
          inputTitle={"Password"}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          autoComplete="password"
        />
      </View>
      <SubmitButton
        btnTitle="Login"
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Text style={styles.linkText}>
        Not a User? {"  "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        >
          REGISTER
        </Text>
        {""}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e1d5c9",
  },
  pagetitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  linkText: {
    textAlign: "center",
    marginTop: 20,
  },
  link: {
    color: "red",
  },
});

export default Login;
