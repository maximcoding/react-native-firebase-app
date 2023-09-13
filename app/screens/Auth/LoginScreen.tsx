import React, { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, ViewStyle } from "react-native";
import { ScreenX } from "../../components";
import { AppStackScreenProps } from "../../navigators";
import { colors, spacing } from "../../theme";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../../store/useStore";
import { SCREENS } from "../index";
import { useTranslation } from "react-i18next";
import { palette } from "../../theme/themes";


interface LoginScreenProps extends AppStackScreenProps<any> {
}

type FormData = {
  email: string;
  password: string;
};

export const LoginScreen: FC<LoginScreenProps> = () => {

  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const login = useStore(state => state.login);

  const authPasswordInput = useRef<TextInput>();
  const { handleSubmit } = useForm<FormData>();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [attemptsCount, setAttemptsCount] = useState(0);
  const [error, setError] = useState("");

  const emailValidationError = () => {
    if (email.length === 0) return "can't be blank";
    if (email.length < 6) return "must be at least 6 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "must be a valid email address";
    return "";
  };

  // after component did mount
  useLayoutEffect(() => {
    // return () => resetStatus()
  }, []);

  useEffect(() => {
    // pre-fill from keychain or storage
    setEmail("maximcoding@gmail.com");
    setPassword("Maxim123");
    // cleanup on unmount
    return () => {
      setPassword("");
      setEmail("");
    };
  }, []);

  const onLogin = async () => {
    const error = isSubmitted ? emailValidationError() : "";
    if (error) {
      setError(error);
      alert(error);
      return;
    }
    try {
      await login({ email, password });
    } catch (error) {
      alert(error.message);
    }
  };

  const goSignupScreen = () => {
    navigate(SCREENS.Signup);
  };

  return (
    <ScreenX style={$root} preset="scroll">
      <TextInput
        style={$textField}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={$textField}
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={$loginButton} onPress={handleSubmit(onLogin)}>
        <Text style={$loginButtonText}>{t("login")}</Text>
      </TouchableOpacity>
    </ScreenX>
  );
};


const $root: ViewStyle = {
  flex: 1
};


const $textField: ViewStyle = {
  margin: spacing.md,
  borderWidth: 1,
  padding: 10
};

const $loginButton: ViewStyle = {
  margin: spacing.md,
  alignItems: "center",
  backgroundColor: palette.primary,
  padding: spacing.md
};
const $loginButtonText: ViewStyle = {
  color: palette.white
};

const $signupButton: ViewStyle = {
  marginTop: spacing.xs,
  backgroundColor: colors.palette.secondary500
};
