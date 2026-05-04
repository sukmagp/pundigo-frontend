import { COLORS } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

export default function ScanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Bukti / Struk</Text>
      <Text style={styles.desc}>
        Nanti halaman ini untuk OCR scan struk dan bukti transfer.
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
