import { BrandMark } from "@/components/auth/brand-mark";
import { ScreenContainer } from "@/components/common/screen-container";
import { COLORS } from "@/constants/colors";
import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SplashRoute() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/introduce");
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <BrandMark />
        <Text style={styles.text}>Preparing your finance workspace...</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
  },
  text: {
    color: COLORS.textMuted,
    fontSize: 14,
  },
  loader: {
    marginTop: 6,
  },
});
