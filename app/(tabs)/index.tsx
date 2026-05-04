import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const quickActions = [
  { label: "Pemasukan", icon: "arrow-down-circle-outline" as const },
  { label: "Pengeluaran", icon: "arrow-up-circle-outline" as const },
  { label: "Scan", icon: "scan-outline" as const },
  { label: "Budget", icon: "wallet-outline" as const },
];

const statisticBars = [
  { label: "Dec 27", income: 92, expense: 18 },
  { label: "Dec 28", income: 68, expense: 54 },
  { label: "Dec 29", income: 30, expense: 72 },
  { label: "Dec 30", income: 42, expense: 56 },
  { label: "Dec 31", income: 84, expense: 44 },
  { label: "Jan 1", income: 0, expense: 70, striped: true },
];

const budgets = [
  {
    name: "Transport",
    total: "Rp 1.000.000",
    used: "Rp 320.000",
    progress: 32,
    color: COLORS.secondaryGlow,
  },
  {
    name: "Vacation",
    total: "Rp 1.500.000",
    used: "Rp 1.170.000",
    progress: 78,
    color: "#72E6A4",
  },
  {
    name: "Makan",
    total: "Rp 600.000",
    used: "Rp 430.000",
    progress: 72,
    color: "#F3A6B2",
  },
  {
    name: "Belanja",
    total: "Rp 400.000",
    used: "Rp 56.000",
    progress: 14,
    color: COLORS.accentGold,
  },
];

const transactions = [
  {
    title: "Alfamart",
    category: "Makan",
    amount: "- Rp 85.000",
    type: "expense",
    time: "Hari ini",
  },
  {
    title: "Gaji Bulanan",
    category: "Pemasukan",
    amount: "+ Rp 7.500.000",
    type: "income",
    time: "Kemarin",
  },
  {
    title: "Gojek",
    category: "Transport",
    amount: "- Rp 32.000",
    type: "expense",
    time: "Kemarin",
  },
  {
    title: "Transfer Masuk",
    category: "Pemasukan",
    amount: "+ Rp 500.000",
    type: "income",
    time: "2 hari lalu",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Selamat datang!</Text>
            <Text style={styles.username}>Sukmagp 👋</Text>
          </View>

          <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
            <Ionicons
              name="notifications-outline"
              size={20}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.balanceCard}>
          <View style={styles.balanceTopRow}>
            <View>
              <Text style={styles.balanceLabel}>Saldo Saat Ini</Text>
              <Text style={styles.balanceAmount}>Rp 12.450.000</Text>
            </View>

            <TouchableOpacity
              style={styles.editBalanceButton}
              activeOpacity={0.8}
            >
              <Ionicons name="create-outline" size={16} color={COLORS.white} />
              <Text style={styles.editBalanceText}>Ubah</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.summaryRow}>
            <View style={[styles.summaryItem, styles.summaryIncome]}>
              <Text style={styles.summaryTitle}>Pemasukan</Text>
              <Text style={styles.summaryValue}>Rp 8.200.000</Text>
            </View>

            <View style={[styles.summaryItem, styles.summaryExpense]}>
              <Text style={styles.summaryTitle}>Pengeluaran</Text>
              <Text style={styles.summaryValue}>Rp 3.750.000</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Aksi Cepat</Text>
          </View>

          <View style={styles.quickActionRow}>
            {quickActions.map((item) => (
              <TouchableOpacity
                key={item.label}
                style={styles.quickActionCard}
                activeOpacity={0.8}
              >
                <View style={styles.quickActionIcon}>
                  <Ionicons name={item.icon} size={22} color={COLORS.white} />
                </View>
                <Text style={styles.quickActionText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Statistik Bulan Ini</Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.sectionLink}>Lihat Detail</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.chartCard}>
            <View style={styles.chartHeaderRow}>
              <View>
                <Text style={styles.chartMiniLabel}>Cashflow</Text>
                <Text style={styles.chartMainValue}>Rp 4.450.000</Text>
              </View>

              <View style={styles.chartLegendRow}>
                <View style={styles.legendItem}>
                  <View
                    style={[
                      styles.legendDot,
                      { backgroundColor: COLORS.primarySoft },
                    ]}
                  />
                  <Text style={styles.legendText}>Masuk</Text>
                </View>

                <View style={styles.legendItem}>
                  <View
                    style={[
                      styles.legendDot,
                      { backgroundColor: "rgba(248,250,255,0.88)" },
                    ]}
                  />
                  <Text style={styles.legendText}>Keluar</Text>
                </View>
              </View>
            </View>

            <View style={styles.chartCanvas}>
              <View style={styles.chartScale}>
                <Text style={styles.chartScaleText}>40K</Text>
                <Text style={styles.chartScaleText}>20K</Text>
              </View>

              <View style={styles.chartGrid}>
                <View style={styles.chartGuideLineTop} />
                <View style={styles.chartGuideLineMid} />

                <View style={styles.chartBarsRow}>
                  {statisticBars.map((item) => (
                    <View key={item.label} style={styles.chartItem}>
                      <View style={styles.chartBarPair}>
                        {item.income > 0 ? (
                          <View
                            style={[
                              styles.chartBarBlue,
                              { height: item.income },
                            ]}
                          />
                        ) : (
                          <View style={styles.chartBarPlaceholder} />
                        )}

                        {item.striped ? (
                          <View
                            style={[
                              styles.chartBarStriped,
                              { height: item.expense },
                            ]}
                          >
                            <View style={styles.chartBarStripeOverlay} />
                          </View>
                        ) : (
                          <View
                            style={[
                              styles.chartBarWhite,
                              { height: item.expense },
                            ]}
                          />
                        )}
                      </View>

                      <Text style={styles.chartLabelX}>{item.label}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Budget Bulanan</Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.sectionLink}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.budgetGrid}>
            {budgets.map((item) => (
              <TouchableOpacity
                key={item.name}
                style={styles.budgetGridCard}
                activeOpacity={0.88}
              >
                <View style={styles.budgetGridTop}>
                  <Text style={styles.budgetGridName} numberOfLines={1}>
                    {item.name}
                  </Text>

                  <View style={styles.budgetChevronWrap}>
                    <Ionicons
                      name="chevron-forward"
                      size={18}
                      color={COLORS.textSoft}
                    />
                  </View>
                </View>

                <View style={styles.budgetTextWrap}>
                  <Text style={styles.budgetGridUsed}>{item.used} /</Text>
                  <Text style={styles.budgetGridTotal}>{item.total}</Text>
                </View>

                <View style={styles.budgetMiniTrack}>
                  <View
                    style={[
                      styles.budgetMiniFill,
                      {
                        width: `${item.progress}%`,
                        backgroundColor: item.color,
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Template Keuangan</Text>
            <TouchableOpacity>
              <Text style={styles.sectionLink}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.templateCard}>
            <View style={styles.templateIcon}>
              <Ionicons
                name="document-text-outline"
                size={24}
                color={COLORS.white}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.templateTitle}>Template Hemat Bulanan</Text>
              <Text style={styles.templateDesc}>
                Cocok untuk atur pemasukan, tabungan, dan limit pengeluaran
                rutin.
              </Text>
            </View>
            <TouchableOpacity style={styles.useButton} activeOpacity={0.8}>
              <Text style={styles.useButtonText}>Pakai</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.section, { paddingBottom: 120 }]}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Riwayat Terbaru</Text>
            <TouchableOpacity>
              <Text style={styles.sectionLink}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.filterRow}>
            <TouchableOpacity
              style={[styles.filterChip, styles.filterChipActive]}
            >
              <Text style={[styles.filterText, styles.filterTextActive]}>
                Daily
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterText}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterText}>Monthly</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cardGroup}>
            {transactions.map((item, index) => (
              <TouchableOpacity
                key={`${item.title}-${index}`}
                style={styles.transactionCard}
                activeOpacity={0.8}
              >
                <View
                  style={[
                    styles.transactionIcon,
                    {
                      backgroundColor:
                        item.type === "income"
                          ? "rgba(34,197,94,0.16)"
                          : "rgba(251,113,133,0.16)",
                    },
                  ]}
                >
                  <Ionicons
                    name={item.type === "income" ? "arrow-down" : "arrow-up"}
                    size={18}
                    color={
                      item.type === "income" ? COLORS.success : COLORS.danger
                    }
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.transactionTitle}>{item.title}</Text>
                  <Text style={styles.transactionMeta}>
                    {item.category} • {item.time}
                  </Text>
                </View>

                <Text
                  style={[
                    styles.transactionAmount,
                    {
                      color:
                        item.type === "income" ? COLORS.success : COLORS.danger,
                    },
                  ]}
                >
                  {item.amount}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    marginVertical: 32,
  },
  greeting: {
    color: COLORS.textSoft,
    fontSize: 14,
  },
  username: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: "700",
    marginTop: 4,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.glass,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },
  balanceCard: {
    backgroundColor: COLORS.backgroundSoft,
    borderRadius: 28,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 24,
  },
  balanceTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  balanceLabel: {
    color: COLORS.textMuted,
    fontSize: 14,
    marginBottom: 8,
  },
  balanceAmount: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: "800",
  },
  editBalanceButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(255,255,255,0.08)",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 14,
  },
  editBalanceText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "600",
  },
  summaryRow: {
    flexDirection: "row",
    gap: 12,
  },
  summaryItem: {
    flex: 1,
    borderRadius: 20,
    padding: 16,
  },
  summaryIncome: {
    backgroundColor: "rgba(34,197,94,0.14)",
  },
  summaryExpense: {
    backgroundColor: "rgba(251,113,133,0.14)",
  },
  summaryTitle: {
    color: COLORS.textMuted,
    fontSize: 13,
    marginBottom: 6,
  },
  summaryValue: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },
  sectionLink: {
    color: COLORS.primarySoft,
    fontSize: 13,
    fontWeight: "600",
  },
  quickActionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  quickActionCard: {
    flex: 1,
    backgroundColor: COLORS.glass,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  quickActionIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.08)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  quickActionText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
  },

  chartCard: {
    backgroundColor: "rgba(11, 18, 40, 0.92)",
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    overflow: "hidden",
  },

  chartHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 18,
  },

  chartMiniLabel: {
    color: COLORS.textSoft,
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 6,
  },

  chartMainValue: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "800",
  },

  chartLegendRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
  },

  legendText: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: "600",
  },

  chartCanvas: {
    flexDirection: "row",
    alignItems: "stretch",
    width: "100%",
  },

  chartScale: {
    width: 34,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingTop: 8,
    paddingBottom: 28,
  },

  chartScaleText: {
    color: COLORS.textSoft,
    fontSize: 10,
    fontWeight: "600",
  },

  chartGrid: {
    flex: 1,
    minWidth: 0,
    position: "relative",
    height: 170,
    justifyContent: "flex-end",
    paddingLeft: 8,
  },

  chartGuideLineTop: {
    position: "absolute",
    top: 16,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.06)",
  },

  chartGuideLineMid: {
    position: "absolute",
    top: 78,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.05)",
  },

  chartBarsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: "100%",
    width: "100%",
  },

  chartItem: {
    width: 34,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  chartBarPair: {
    height: 132,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 5,
    marginBottom: 10,
  },

  chartBarBlue: {
    width: 8,
    borderRadius: 999,
    backgroundColor: COLORS.primarySoft,
  },

  chartBarWhite: {
    width: 8,
    borderRadius: 999,
    backgroundColor: "rgba(248,250,255,0.92)",
  },

  chartBarPlaceholder: {
    width: 8,
  },

  chartBarStriped: {
    width: 8,
    borderRadius: 999,
    overflow: "hidden",
    backgroundColor: "rgba(129,140,248,0.2)",
    borderWidth: 1,
    borderColor: "rgba(136,169,255,0.65)",
  },

  chartBarStripeOverlay: {
    flex: 1,
    backgroundColor: "transparent",
    borderRadius: 999,
  },

  chartLabelX: {
    color: COLORS.textSoft,
    fontSize: 9,
    fontWeight: "600",
    textAlign: "center",
  },

  cardGroup: {
    gap: 12,
  },

  budgetCard: {
    backgroundColor: COLORS.glass,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  budgetTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 12,
  },
  budgetName: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "700",
  },
  budgetAmount: {
    color: COLORS.textMuted,
    fontSize: 12,
    textAlign: "right",
  },
  budgetGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 14,
  },

  budgetGridCard: {
    width: "48.2%",
    minHeight: 158,
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 18,
    justifyContent: "space-between",
    backgroundColor: "rgba(11, 18, 40, 0.92)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  budgetGridTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 14,
  },

  budgetGridName: {
    flex: 1,
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 20,
    paddingRight: 8,
  },

  budgetChevronWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.03)",
  },

  budgetTextWrap: {
    marginBottom: 18,
  },

  budgetGridTotal: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 18,
  },

  budgetGridUsed: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 20,
    marginBottom: 2,
  },

  budgetMiniTrack: {
    height: 9,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.12)",
    overflow: "hidden",
  },

  budgetMiniFill: {
    height: "100%",
    borderRadius: 999,
  },
  progressTrack: {
    height: 10,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.08)",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 999,
  },
  templateCard: {
    backgroundColor: COLORS.backgroundSoft,
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  templateIcon: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: COLORS.primaryStrong,
    alignItems: "center",
    justifyContent: "center",
  },
  templateTitle: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
  },
  templateDesc: {
    color: COLORS.textMuted,
    fontSize: 12,
    lineHeight: 18,
  },
  useButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
  },
  useButtonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "700",
  },
  filterRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 14,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 999,
    backgroundColor: COLORS.glass,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  filterChipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  filterText: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: "600",
  },
  filterTextActive: {
    color: COLORS.white,
  },
  transactionCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: COLORS.glass,
    borderRadius: 20,
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  transactionIcon: {
    width: 42,
    height: 42,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  transactionTitle: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 4,
  },
  transactionMeta: {
    color: COLORS.textMuted,
    fontSize: 12,
  },
  transactionAmount: {
    fontSize: 13,
    fontWeight: "700",
  },
});
