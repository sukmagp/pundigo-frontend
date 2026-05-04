import { COLORS } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

export default function BudgetScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Bulanan</Text>
      <Text style={styles.desc}>
        Nanti isi kategori budget dan progress penggunaan dana.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  desc: {
    color: COLORS.textMuted,
    textAlign: "center",
  },
});
