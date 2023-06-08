import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { theme } from "../../constants";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const title = isLogin ? "Login" : "Register";
  const buttonTitle = isLogin ? "Login" : "Register";
  const messageText = isLogin ? "Don't have an account?" : "Already have an account";

  const onHandleOnchageAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="email@gmail.com"
          placeholderTextColor={theme.colors.transparent}
          autoCapitalize="none"
          autoCorrect={false}
          onChange={() => null}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="*******"
          placeholderTextColor={theme.colors.transparent}
          autoCapitalize="none"
          autoCorrect={false}
          onChange={() => null}
        />
        <View style={styles.linkContainer}>
          <TouchableOpacity style={styles.link} onPress={onHandleOnchageAuth}>
            <Text style={styles.linkText}>{messageText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submit}>
          <Button title={buttonTitle} onPress={() => null} />
        </View>
      </View>
    </View>
  );
};

export default Auth;
