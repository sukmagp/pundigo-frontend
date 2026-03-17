import { COLORS } from "@/constants/colors";
import { ReactNode } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

type AppInputProps = TextInputProps & {
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onRightPress?: () => void;
  prefix?: ReactNode;
  variant?: "glass" | "underline" | "soft";
};

export function AppInput({
  label,
  error,
  leftIcon,
  rightIcon,
  onRightPress,
  prefix,
  variant = "glass",
  ...props
}: AppInputProps) {
  const isGlass = variant === "glass";

  return (
    <View style={styles.wrapper}>
      {!!label && (
        <Text style={[styles.label, isGlass && styles.labelGlass]}>
          {label}
        </Text>
      )}

      <View
        style={[
          styles.inputRow,
          variant === "underline" && styles.inputRowUnderline,
          variant === "soft" && styles.inputRowSoft,
          variant === "glass" && styles.inputRowGlass,
        ]}
      >
        {!!prefix && <View style={styles.prefixWrap}>{prefix}</View>}

        {!prefix && !!leftIcon && (
          <View style={styles.iconWrap}>{leftIcon}</View>
        )}

        <TextInput
          placeholderTextColor={
            isGlass ? "rgba(255,255,255,0.42)" : COLORS.inkSoft
          }
          style={[
            styles.input,
            variant === "glass" && styles.inputGlass,
            variant !== "glass" && styles.inputLight,
          ]}
          {...props}
        />

        {!!rightIcon && (
          <Pressable
            onPress={onRightPress}
            style={styles.iconButton}
            disabled={!onRightPress}
            hitSlop={8}
          >
            {rightIcon}
          </Pressable>
        )}
      </View>

      {!!error && (
        <Text style={[styles.error, isGlass && styles.errorGlass]}>
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.inkSoft,
  },

  labelGlass: {
    color: COLORS.textMuted,
  },

  inputRow: {
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
  },

  inputRowSoft: {
    borderRadius: 14,
    backgroundColor: "#F5F7FA",
    borderWidth: 1,
    borderColor: "#E8ECF2",
    paddingHorizontal: 14,
  },

  inputRowUnderline: {
    borderBottomWidth: 1,
    borderBottomColor: "#D8E0EA",
    paddingHorizontal: 2,
    borderRadius: 0,
  },

  inputRowGlass: {
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.035)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    paddingHorizontal: 14,
  },

  prefixWrap: {
    justifyContent: "center",
  },

  iconWrap: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  iconButton: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 14,
  },

  inputGlass: {
    color: COLORS.white,
  },

  inputLight: {
    color: COLORS.ink,
  },

  error: {
    fontSize: 12,
    color: "#DC2626",
    marginTop: -2,
  },

  errorGlass: {
    color: "#FF9A9A",
  },
});
