import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";

import { AuthFormShell } from "@/components/auth/auth-form-shell";
import { AppButton } from "@/components/common/app-button";
import { AppCheckbox } from "@/components/common/app-checkbox";
import { AppInput } from "@/components/common/app-input";
import { COLORS } from "@/constants/colors";
import { AUTH_COPY } from "@/features/auth/data/copy";
import { authStyles } from "@/features/auth/styles/auth.styles";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    return {
      username: !username.trim() ? "Username atau email wajib diisi" : "",
      password: password.length < 6 ? "Password minimal 6 karakter" : "",
    };
  }, [password, username]);

  const handleLogin = () => {
    setSubmitted(true);
    if (errors.username || errors.password) return;
    router.replace("/(tabs)");
  };

  return (
    <AuthFormShell
      title={AUTH_COPY.loginTitle}
      description={AUTH_COPY.loginDescription}
      footer={
        <Text style={authStyles.footerText}>
          Belum punya akun?{" "}
          <Text
            style={authStyles.footerLink}
            onPress={() => router.replace("/register")}
          >
            Sign Up
          </Text>
        </Text>
      }
    >
      <View style={authStyles.form}>
        <AppInput
          label="Username"
          placeholder="masukkan username atau email"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          keyboardType="email-address"
          leftIcon={
            <Ionicons
              name="person-outline"
              size={18}
              color={COLORS.textMuted}
            />
          }
          error={submitted ? errors.username : ""}
        />

        <AppInput
          label="Password"
          placeholder="masukkan password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          leftIcon={
            <Ionicons
              name="lock-closed-outline"
              size={18}
              color={COLORS.textMuted}
            />
          }
          rightIcon={
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={18}
              color={COLORS.textMuted}
            />
          }
          onRightPress={() => setShowPassword((prev) => !prev)}
          error={submitted ? errors.password : ""}
        />

        <View style={authStyles.metaRow}>
          <AppCheckbox
            checked={rememberMe}
            label="Remember me"
            onPress={() => setRememberMe((prev) => !prev)}
          />
          <Pressable>
            <Text style={authStyles.linkText}>Forgot login?</Text>
          </Pressable>
        </View>

        <AppButton label="Sign In" variant="primary" onPress={handleLogin} />

        <AppButton
          label="Login with Google"
          variant="ghost"
          onPress={() => {}}
          icon={<Ionicons name="logo-google" size={18} color={COLORS.white} />}
        />
      </View>
    </AuthFormShell>
  );
}
