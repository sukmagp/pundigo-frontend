import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

import { ScreenContainer } from "@/components/common/screen-container";
import { GlassCard } from "@/components/glass/glass-card";
import { AppButton } from "@/components/common/app-button";
import { COLORS } from "@/constants/colors";

export default function HomeTabScreen() {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={styles.eyebrow}>ROOT TABS DEMO</Text>
        <Text style={styles.title}>Berhasil masuk ke root `(tabs)`.</Text>
        <Text style={styles.description}>
          Ini placeholder home screen setelah auth. Nanti tinggal sambungkan ke state login, token, dan API backend.
        </Text>

        <GlassCard>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Next step yang enak dilanjutkan</Text>
            <Text style={styles.cardItem}>• integrate form validation pakai react-hook-form + zod</Text>
            <Text style={styles.cardItem}>• simpan session di secure storage</Text>
            <Text style={styles.cardItem}>• proteksi route auth vs app tabs</Text>
            <Text style={styles.cardItem}>• sambungkan login/register ke API</Text>
          </View>
        </GlassCard>

        <AppButton label="Kembali ke intro" variant="ghost" onPress={() => router.replace("/introduce")} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 18,
  },
  eyebrow: {
    color: COLORS.textSoft,
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: "800",
  },
  title: {
    color: COLORS.white,
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "800",
  },
  description: {
    color: COLORS.textMuted,
    fontSize: 15,
    lineHeight: 24,
  },
  cardContent: {
    gap: 10,
  },
  cardTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },
  cardItem: {
    color: COLORS.textMuted,
    fontSize: 14,
    lineHeight: 22,
  },
});
