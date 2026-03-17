import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";

import { AuthFormShell } from "@/components/auth/auth-form-shell";
import { AppButton } from "@/components/common/app-button";
import { AppInput } from "@/components/common/app-input";
import { COLORS } from "@/constants/colors";
import { AUTH_COPY } from "@/features/auth/data/copy";
import { authStyles } from "@/features/auth/styles/auth.styles";

export default function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    return {
      fullName: !fullName.trim() ? "Nama lengkap wajib diisi" : "",
      email: !/^\S+@\S+\.\S+$/.test(email) ? "Format email belum valid" : "",
      password: password.length < 6 ? "Password minimal 6 karakter" : "",
      confirmPassword:
        confirmPassword !== password ? "Konfirmasi password belum sama" : "",
    };
  }, [confirmPassword, email, fullName, password]);

  const handleRegister = () => {
    setSubmitted(true);
    if (Object.values(errors).some(Boolean)) return;
    router.replace("/(tabs)");
  };

  return (
    <AuthFormShell
      title={AUTH_COPY.registerTitle}
      description={AUTH_COPY.registerDescription}
      footer={
        <Text style={authStyles.footerText}>
          Sudah punya akun?{" "}
          <Text
            style={authStyles.footerLink}
            onPress={() => router.replace("/login")}
          >
            Sign In
          </Text>
        </Text>
      }
    >
      <View style={authStyles.form}>
        <AppInput
          label="Nama lengkap"
          placeholder="masukkan nama lengkap"
          value={fullName}
          onChangeText={setFullName}
          leftIcon={
            <Ionicons
              name="person-outline"
              size={18}
              color={COLORS.textMuted}
            />
          }
          error={submitted ? errors.fullName : ""}
        />

        <AppInput
          label="Email"
          placeholder="nama@email.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          leftIcon={
            <Ionicons name="mail-outline" size={18} color={COLORS.textMuted} />
          }
          error={submitted ? errors.email : ""}
        />

        <AppInput
          label="Password"
          placeholder="buat password"
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

        <AppInput
          label="Konfirmasi password"
          placeholder="ulang password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
          leftIcon={
            <Ionicons
              name="shield-checkmark-outline"
              size={18}
              color={COLORS.textMuted}
            />
          }
          rightIcon={
            <Ionicons
              name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
              size={18}
              color={COLORS.textMuted}
            />
          }
          onRightPress={() => setShowConfirmPassword((prev) => !prev)}
          error={submitted ? errors.confirmPassword : ""}
        />

        <AppButton label="Sign Up" variant="primary" onPress={handleRegister} />
      </View>
    </AuthFormShell>
  );
}
