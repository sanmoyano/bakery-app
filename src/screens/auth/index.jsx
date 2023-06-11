import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import Input from "../../components/input";
import { theme } from "../../constants";
import { signUp, signIn } from "../../store/actions/auth.action";

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const title = isLogin ? "Login" : "Register";
  const buttonTitle = isLogin ? "Login" : "Register";
  const messageText = isLogin ? "Don't have an account?" : "Already have an account";

  const onHandleOnchageAuth = () => {
    setIsLogin(!isLogin);
  };

  const onHandlerAuth = () => {
    dispatch(isLogin ? signIn({ email, password }) : signUp({ email, password }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Input
          placeholder="email@gmail.com"
          placeholderTextColor={theme.colors.transparent}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
          value={email}
          label="Email"
          error="Email is invalid"
          touched
          hasError
        />
        <Input
          placeholder="*******"
          placeholderTextColor={theme.colors.transparent}
          autoCapitalize="none"
          secureTextEntry
          autoCorrect={false}
          onChangeText={(text) => setPassword(text)}
          value={password}
          label="Password"
          error="Password is invalid"
          touched
          hasError
        />
        <View style={styles.linkContainer}>
          <TouchableOpacity style={styles.link} onPress={onHandleOnchageAuth}>
            <Text style={styles.linkText}>{messageText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submit}>
          <Button title={buttonTitle} onPress={onHandlerAuth} />
        </View>
      </View>
    </View>
  );
};
export default Auth;
