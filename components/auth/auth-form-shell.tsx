import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ReactNode } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { ScreenContainer } from "@/components/common/screen-container";
import { GlassCard } from "@/components/glass/glass-card";
import { COLORS } from "@/constants/colors";
import { authStyles } from "@/features/auth/styles/auth.styles";

type AuthFormShellProps = {
  title: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  logo?: ReactNode;
  logoSource?: ImageSourcePropType;
  showBackButton?: boolean;
  onBackPress?: () => void;
};

export function AuthFormShell({
  title,
  subtitle,
  description,
  children,
  footer,
  logo,
  logoSource,
  showBackButton = false,
  onBackPress,
}: AuthFormShellProps) {
  const helperText = description ?? subtitle;

  return (
    <ScreenContainer variant="dark">
      <View style={authStyles.authDecorTopLeft} />
      <View style={authStyles.authDecorTopRight} />
      <View style={authStyles.authGlowBottomLeft} />
      <View style={authStyles.authGlowCenterRight} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={authStyles.authRoot}
      >
        <View style={authStyles.authContent}>
          {showBackButton && (
            <Pressable
              onPress={() => router.replace("/login")}
              style={authStyles.authBackButton}
            >
              <Ionicons name="arrow-back" size={22} color={COLORS.white} />
            </Pressable>
          )}

          <View style={authStyles.authTopContent}>
            {!!logoSource && (
              <View style={authStyles.authLogoWrap}>
                <Image
                  source={logoSource}
                  resizeMode="contain"
                  style={authStyles.authLogo}
                />
              </View>
            )}

            {!logoSource && !!logo && (
              <View style={authStyles.authLogoWrap}>{logo}</View>
            )}

            <View style={authStyles.authHeadingWrap}>
              <Text style={authStyles.authTitle}>{title}</Text>

              {!!helperText && (
                <Text style={authStyles.authSubtitle}>{helperText}</Text>
              )}
            </View>
          </View>

          <View style={authStyles.authCardWrap}>
            <GlassCard style={authStyles.authCard}>
              {children}
              {!!footer && <View style={authStyles.footer}>{footer}</View>}
            </GlassCard>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
