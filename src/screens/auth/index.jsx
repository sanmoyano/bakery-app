import React, { useReducer, useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import Input from "../../components/input";
import { theme } from "../../constants";
import { signUp, signIn } from "../../store/actions/auth.action";
import { UPDATE_FORM, onInputChange } from "../../utils/form";

const initialState = {
  email: { value: "", error: "", touched: false, hasError: true },
  password: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } = action.data; /*eslint-disable-line*/
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
  }
};

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const title = isLogin ? "Login" : "Register";
  const buttonTitle = isLogin ? "Login" : "Register";
  const messageText = isLogin ? "Don't have an account?" : "Already have an account";

  const onHandleOnchageAuth = () => {
    setIsLogin(!isLogin);
  };

  const onHandlerAuth = () => {
    dispatch(
      isLogin
        ? signIn({ email: formState.email.value, password: formState.password.value })
        : signUp({ email: formState.email.value, password: formState.password.value })
    );
  };

  const onHadleInputChange = ({ value, name }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState });
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
          onChangeText={(text) => onHadleInputChange({ value: text, name: "email" })}
          value={formState.email.value}
          label="Email"
          error={formState.email.error}
          touched={formState.email.touched}
          hasError={formState.email.hasError}
        />
        <Input
          placeholder="*******"
          placeholderTextColor={theme.colors.transparent}
          autoCapitalize="none"
          secureTextEntry
          autoCorrect={false}
          onChangeText={(text) => onHadleInputChange({ value: text, name: "password" })}
          value={formState.password.value}
          label="Password"
          error={formState.password.error}
          touched={formState.password.touched}
          hasError={formState.password.hasError}
        />
        <View style={styles.linkContainer}>
          <TouchableOpacity style={styles.link} onPress={onHandleOnchageAuth}>
            <Text style={styles.linkText}>{messageText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submit}>
          <Button title={buttonTitle} disabled={!formState.isFormValid} onPress={onHandlerAuth} />
        </View>
      </View>
    </View>
  );
};
export default Auth;
