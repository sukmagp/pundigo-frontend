import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import { COLORS, GRADIENTS } from "@/constants/colors";

type Props = PropsWithChildren<{
  padded?: boolean;
  variant?: "dark" | "light";
}>;

export function ScreenContainer({ children, padded = true, variant = "dark" }: Props) {
  const isLight = variant === "light";

  return (
    <View style={styles.root}>
      {isLight ? (
        <View style={[styles.container, styles.lightContainer]}>
          <StatusBar style="dark" />
          <View style={styles.lightBlobTop} />
          <View style={styles.lightBlobBottom} />
          <SafeAreaView style={[styles.safeArea, padded && styles.padded]}>{children}</SafeAreaView>
        </View>
      ) : (
        <LinearGradient colors={[...GRADIENTS.screen]} style={styles.container}>
          <StatusBar style="light" />
          <View style={styles.darkOrbTop} />
          <View style={styles.darkOrbBottom} />
          <SafeAreaView style={[styles.safeArea, padded && styles.padded]}>{children}</SafeAreaView>
        </LinearGradient>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  padded: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  lightContainer: {
    backgroundColor: COLORS.surfaceSoft,
  },
  darkOrbTop: {
    position: "absolute",
    top: -120,
    right: -80,
    width: 320,
    height: 320,
    borderRadius: 999,
    backgroundColor: "rgba(127,141,254,0.24)",
    transform: [{ scaleX: 1.15 }],
  },
  darkOrbBottom: {
    position: "absolute",
    left: -110,
    bottom: -120,
    width: 280,
    height: 280,
    borderRadius: 999,
    backgroundColor: "rgba(43,108,255,0.22)",
  },
  lightBlobTop: {
    position: "absolute",
    top: -46,
    left: -44,
    width: 180,
    height: 180,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(43,108,255,0.12)",
    backgroundColor: "rgba(136,169,255,0.18)",
  },
  lightBlobBottom: {
    position: "absolute",
    top: 58,
    right: -70,
    width: 220,
    height: 140,
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    borderTopLeftRadius: 120,
    borderTopRightRadius: 120,
    backgroundColor: "rgba(43,108,255,0.08)",
    transform: [{ rotate: "-8deg" }],
  },
});
