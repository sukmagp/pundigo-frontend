import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";

type Props = {
  checked: boolean;
  label: string;
  onPress: () => void;
  tone?: "dark" | "light";
};

export function AppCheckbox({ checked, label, onPress, tone = "dark" }: Props) {
  const isLight = tone === "light";

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View
        style={[
          styles.box,
          isLight && styles.boxLight,
          checked && styles.boxChecked,
          checked && isLight && styles.boxCheckedLight,
        ]}
      >
        {checked ? (
          <Ionicons
            name="checkmark"
            size={14}
            color={isLight ? COLORS.white : COLORS.background}
          />
        ) : null}
      </View>
      <Text style={[styles.label, isLight && styles.labelLight]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  box: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
    backgroundColor: "rgba(253, 251, 251, 0.02)",
    alignItems: "center",
    justifyContent: "center",
  },
  boxLight: {
    borderColor: COLORS.divider,
    backgroundColor: COLORS.surface,
  },
  boxChecked: {
    backgroundColor: COLORS.surface,
    borderColor: COLORS.primary,
  },
  boxCheckedLight: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  label: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: "600",
  },
  labelLight: {
    color: COLORS.inkMuted,
    fontWeight: "500",
  },
});
