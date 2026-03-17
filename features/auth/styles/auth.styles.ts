import { COLORS } from "@/constants/colors";
import { SHADOWS, SPACING } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  form: {
    gap: 16,
  },

  metaRow: {
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  linkText: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: "700",
  },

  footer: {
    marginTop: 8,
    alignItems: "center",
  },

  footerText: {
    color: COLORS.textMuted,
    fontSize: 14,
    textAlign: "center",
    lineHeight: 22,
  },

  footerLink: {
    color: COLORS.text,
    fontWeight: "800",
  },

  authRoot: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 22,
    paddingVertical: 28,
  },

  authTopContent: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 24,
    paddingHorizontal: 8,
  },

  authLogo: {
    width: 150,
    height: 44,
    marginBottom: 18,
  },

  authTitle: {
    color: COLORS.white,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "800",
    textAlign: "left",
    marginBottom: 8,
    marginTop: 100,
  },

  authSubtitle: {
    color: COLORS.textMuted,
    fontSize: 14,
    lineHeight: 22,
    textAlign: "left",
    maxWidth: 300,
  },

  authCardWrap: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  authCard: {
    width: "100%",
    maxWidth: 420,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    backgroundColor: "rgba(8, 14, 30, 0.26)",
  },

  authDecorTopLeft: {
    position: "absolute",
    top: -120,
    left: -100,
    width: 260,
    height: 260,
    borderRadius: 999,
    backgroundColor: "rgba(51, 102, 255, 0.16)",
  },

  authDecorTopRight: {
    position: "absolute",
    top: -60,
    right: -120,
    width: 320,
    height: 320,
    borderRadius: 999,
    backgroundColor: "rgba(123, 160, 255, 0.12)",
  },

  authGlowBottomLeft: {
    position: "absolute",
    bottom: -120,
    left: -100,
    width: 260,
    height: 260,
    borderRadius: 999,
    backgroundColor: "rgba(73, 102, 255, 0.14)",
  },

  authGlowCenterRight: {
    position: "absolute",
    top: "40%",
    right: -80,
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: "rgba(52, 112, 255, 0.10)",
  },

  authHeader: {
    alignItems: "center",
    gap: 8,
    marginBottom: 22,
  },

  introContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: SPACING.lg,
  },

  introTopBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SPACING.lg,
  },

  introBrandText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 0.3,
  },

  introSkip: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: "600",
  },

  introCarouselWrap: {
    flex: 1,
    justifyContent: "center",
  },

  introCardListContent: {
    paddingVertical: 8,
  },

  introCardItemWrap: {
    paddingRight: 18,
  },

  introCard: {
    minHeight: 560,
    borderRadius: 34,
    padding: 22,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    ...SHADOWS.soft,
  },

  introCardVisualWrap: {
    height: 280,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  introVisualOrb: {
    position: "absolute",
    width: 240,
    height: 240,
    borderRadius: 999,
    backgroundColor: "rgba(43,108,255,0.22)",
    top: 20,
  },

  introImageFrame: {
    width: 220,
    height: 220,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.03)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    transform: [{ rotate: "-8deg" }],
  },

  introImage: {
    width: 160,
    height: 160,
    transform: [{ rotate: "8deg" }],
  },

  introCopyWrap: {
    gap: 12,
    marginTop: 8,
  },

  introCardTitle: {
    color: COLORS.white,
    fontSize: 34,
    lineHeight: 41,
    fontWeight: "800",
  },

  introCardDescription: {
    color: COLORS.textMuted,
    fontSize: 15,
    lineHeight: 24,
  },

  introCardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SPACING.lg,
  },

  introDotsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  introDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.28)",
  },

  introDotActive: {
    width: 28,
    backgroundColor: COLORS.white,
  },

  introDotSmall: {
    width: 6,
    height: 6,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.76)",
  },

  introNextButton: {
    width: 52,
    height: 52,
    borderRadius: 999,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.18)",
  },

  introActionWrap: {
    gap: 14,
    marginTop: SPACING.xl,
  },

  dotsWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 24,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.25)",
  },

  dotActive: {
    width: 18,
    backgroundColor: "#2B6CFF",
  },

  startWrap: {
    marginTop: 28,
  },
});
