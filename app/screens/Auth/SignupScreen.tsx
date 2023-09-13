import React, { FC, useEffect, useRef, useState } from "react";
import { Text, TextInput, TextStyle, View, ViewStyle } from "react-native";
import { colors, spacing } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface SignupScreenProps {
}

export const SignupScreen: FC<SignupScreenProps> = function SignupScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const passwordInput = useRef<TextInput>();
  const confirmPasswordInput = useRef<TextInput>();
  const { handleSubmit } = useForm<FormData>();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [attemptsCount, setAttemptsCount] = useState(0);

  function goLoginScreen() {
    navigation.navigate("Login");
  }

  const validationError = () => {
    if (email.length === 0) return "can't be blank";
    if (email.length < 6) return "must be at least 6 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "must be a valid email address";
    return "";
  };

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

  const error = isSubmitted ? validationError() : "";

  const onSignup = async () => {
    // signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
  };


  return (
    <View>
      <Text>SIGN UP SCREEN</Text>
      <Text>SIGN UP SCREEN</Text>
      <Text>SIGN UP SCREEN</Text>
    </View>
  );
};

const $root: ViewStyle = {
  flex: 1
};

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg
};

const $signUp: TextStyle = {
  marginBottom: spacing.sm
};

const $hint: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.md
};

const $textField: ViewStyle = {
  marginBottom: spacing.lg
};

const $loginButton: ViewStyle = {
  marginTop: spacing.xs,
  backgroundColor: colors.palette.secondary500
};

const $signupButton: ViewStyle = {
  marginTop: spacing.xs
};
