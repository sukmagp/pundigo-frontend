import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

import { COLORS, GRADIENTS } from "@/constants/colors";
import { RADIUS } from "@/constants/theme";

type Props = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "light" | "ghost";
  loading?: boolean;
  icon?: ReactNode;
  style?: ViewStyle | ViewStyle[];
  disabled?: boolean;
};

export function AppButton({
  label,
  onPress,
  variant = "primary",
  loading,
  icon,
  style,
  disabled = false,
}: Props) {
  const isDisabled = disabled || loading;

  const labelStyle =
    variant === "light"
      ? styles.labelLight
      : variant === "ghost"
        ? styles.labelGhost
        : styles.labelPrimary;

  const loaderColor = variant === "primary" ? COLORS.background : COLORS.white;

  const content = (
    <View style={styles.content}>
      {loading ? (
        <ActivityIndicator color={loaderColor} />
      ) : (
        <>
          {icon}
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </>
      )}
    </View>
  );

  if (variant === "primary") {
    return (
      <Pressable
        onPress={onPress}
        disabled={isDisabled}
        style={({ pressed }) => [
          style,
          pressed && !isDisabled && styles.pressed,
          isDisabled && styles.disabled,
        ]}
      >
        <LinearGradient
          colors={[...GRADIENTS.buttonPrimary]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={[styles.button, styles.primary]}
        >
          {content}
        </LinearGradient>
      </Pressable>
    );
  }

  if (variant === "light") {
    return (
      <Pressable
        onPress={onPress}
        disabled={isDisabled}
        style={({ pressed }) => [
          style,
          pressed && !isDisabled && styles.pressed,
          isDisabled && styles.disabled,
        ]}
      >
        <View style={[styles.button, styles.light]}>{content}</View>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.button,
        styles.ghost,
        style,
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
      ]}
    >
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 54,
    borderRadius: RADIUS.md,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
  },

  primary: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
  },

  light: {
    backgroundColor: "#F7F8FA",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.20)",
  },

  ghost: {
    backgroundColor: "rgba(255,255,255,0.02)",
    borderWidth: 1.25,
    borderColor: "rgba(255,255,255,0.78)",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  label: {
    fontSize: 16,
    fontWeight: "700",
  },

  labelPrimary: {
    color: COLORS.white,
  },

  labelLight: {
    color: COLORS.background,
  },

  labelGhost: {
    color: COLORS.white,
  },

  pressed: {
    opacity: 0.94,
    transform: [{ scale: 0.995 }],
  },

  disabled: {
    opacity: 0.62,
  },
});
