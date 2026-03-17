import { ReactNode } from "react";
import {
  ImageSourcePropType,
  ScrollView,
  Text,
  View
} from "react-native";

import { ScreenContainer } from "@/components/common/screen-container";
import { GlassCard } from "@/components/glass/glass-card";
import { authStyles } from "@/features/auth/styles/auth.styles";

type AuthFormShellProps = {
  title: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  logoSource?: ImageSourcePropType;
};

export function AuthFormShell({
  title,
  subtitle,
  description,
  children,
  footer,
  logoSource = require("@/assets/images/logo-text-dark.png"),
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
      >
        <View style={authStyles.authTopContent}>
          <Text style={authStyles.authTitle}>{title}</Text>

          {!!helperText && (
            <Text style={authStyles.authSubtitle}>{helperText}</Text>
          )}
        </View>

        <View style={authStyles.authCardWrap}>
          <GlassCard style={authStyles.authCard}>
            {children}

            {!!footer && <View style={authStyles.footer}>{footer}</View>}
          </GlassCard>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
