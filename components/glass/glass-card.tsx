import { BlurView } from "expo-blur";
import { PropsWithChildren } from "react";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";

import { RADIUS, SHADOWS } from "@/constants/theme";

type Props = PropsWithChildren<{
  style?: ViewStyle | ViewStyle[];
}>;

export function GlassCard({ children, style }: Props) {
  if (Platform.OS === "ios") {
    return (
      <View style={[styles.wrapper, style]}>
        <BlurView intensity={42} tint="dark" style={styles.blur}>
          <View style={styles.content}>{children}</View>
        </BlurView>
      </View>
    );
  }

  return (
    <View style={[styles.wrapper, styles.androidFallback, style]}>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    backgroundColor: "rgba(9, 14, 30, 0.58)",
    ...SHADOWS.soft,
  },

  blur: {
    backgroundColor: "rgba(9, 14, 30, 0.42)",
  },

  content: {
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.02)",
  },

  androidFallback: {
    backgroundColor: "rgba(10, 16, 34, 0.88)",
  },
});
