import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

import { ScreenContainer } from "@/components/common/screen-container";
import { GlassCard } from "@/components/glass/glass-card";
import { AppButton } from "@/components/common/app-button";
import { COLORS } from "@/constants/colors";

export default function ProfileTabScreen() {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <GlassCard>
          <View style={styles.cardContent}>
            <Text style={styles.name}>Pundigo User</Text>
            <Text style={styles.email}>user@pundigo.app</Text>
            <Text style={styles.text}>
              Tab ini sengaja dibikin simple sebagai tempat profile / setting / logout.
            </Text>
          </View>
        </GlassCard>

        <AppButton label="Logout" variant="light" onPress={() => router.replace("/login")} />
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
  cardContent: {
    gap: 8,
  },
  name: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: "800",
  },
  email: {
    color: COLORS.textSoft,
    fontSize: 14,
    marginBottom: 10,
  },
  text: {
    color: COLORS.textMuted,
    fontSize: 15,
    lineHeight: 24,
  },
});
