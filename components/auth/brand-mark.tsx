import { COLORS } from "@/constants/colors";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

type Props = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Image
          source={require("@/assets/images/logo-circle-small.png")}
          style={[styles.logo, compact && styles.logoCompact]}
          resizeMode="contain"
        />

        <Text style={[styles.tagline, compact && styles.taglineCompact]}>
          smart finance experience
        </Text>
      </View>

      <ActivityIndicator
        size="small"
        color={COLORS.primarySoft}
        style={styles.loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 48,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },

  logo: {
    width: 160,
    height: 160,
  },
  logoCompact: {
    width: 96,
    height: 96,
  },

  tagline: {
    color: COLORS.textSoft,
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: 1.6,
  },
  taglineCompact: {
    fontSize: 11,
  },

  loading: {
    marginBottom: 8,
  },
});
