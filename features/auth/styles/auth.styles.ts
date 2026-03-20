import { COLORS } from "@/constants/colors";
import { SHADOWS, SPACING } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  form: {
    gap: 14,
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
    marginTop: 12,
    alignItems: "center",
  },

  footerText: {
    color: COLORS.textMuted,
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
  },

  footerLink: {
    color: COLORS.white,
    fontWeight: "800",
  },

  authRoot: {
    flexGrow: 1,
    justifyContent: "center",

    paddingVertical: 28,
  },

  authContent: {
    width: "100%",
    maxWidth: 380,
    alignSelf: "center",
  },

  authBackButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    zIndex: 9999999,
    elevation: 10,
  },

  authTopContent: {
    alignItems: "flex-start",
    marginBottom: 20,
    gap: 8,
  },

  brandText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 0.2,
    marginBottom: 10,
  },

  authLogoWrap: {
    height: 36,
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "flex-start",
  },

  authHeadingWrap: {
    gap: 6,
  },

  authLogo: {
    width: 126,
    height: 34,
  },

  authTitle: {
    color: COLORS.white,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "800",
    textAlign: "left",
    marginHorizontal: 10,
  },

  authSubtitle: {
    color: COLORS.textMuted,
    fontSize: 14,
    lineHeight: 22,
    textAlign: "left",
    maxWidth: "100%",
  },

  authCardWrap: {
    width: "100%",
    alignSelf: "center",
  },

  authCard: {
    width: "100%",
    maxWidth: 420,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    backgroundColor: "rgba(8, 14, 30, 0.28)",
    paddingHorizontal: 16,
    paddingVertical: 18,
    ...SHADOWS.soft,
  },

  orRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginVertical: 2,
  },

  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.14)",
  },

  orText: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: "600",
  },

  authDecorTopLeft: {
    position: "absolute",
    top: -120,
    left: -100,
    width: 260,
    height: 260,
    borderRadius: 999,
    backgroundColor: "rgba(51, 102, 255, 0.14)",
  },

  authDecorTopRight: {
    position: "absolute",
    top: -70,
    right: -120,
    width: 320,
    height: 320,
    borderRadius: 999,
    backgroundColor: "rgba(123, 160, 255, 0.10)",
  },

  authGlowBottomLeft: {
    position: "absolute",
    bottom: -130,
    left: -120,
    width: 260,
    height: 260,
    borderRadius: 999,
    backgroundColor: "rgba(73, 102, 255, 0.14)",
  },

  authGlowCenterRight: {
    position: "absolute",
    top: "42%",
    right: -90,
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: "rgba(52, 112, 255, 0.08)",
  },

  authHeader: {
    alignItems: "center",
    gap: 8,
    marginBottom: 22,
  },
  authLogoText: {
    width: 165,
    marginHorizontal: 10,
  },

  introContainer: {
    flex: 1,
    justifyContent: "space-between",
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

  introCard: {
    minHeight: 750,
    width: "100%",
    borderRadius: 34,
    padding: 22,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    ...SHADOWS.soft,
  },

  introCardVisualWrap: {
    height: 300,
    width: 300,
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
    width: 260,
    height: 260,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.03)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    transform: [{ rotate: "-8deg" }],
  },

  introImage: {
    width: 300,
    height: 300,
  },

  introCopyWrap: {
    gap: 0,
    marginTop: 100,
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
