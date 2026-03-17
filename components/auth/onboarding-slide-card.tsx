import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, Text, View } from "react-native";

import { COLORS, GRADIENTS } from "@/constants/colors";
import { authStyles } from "@/features/auth/styles/auth.styles";

type Props = {
  item: {
    title: string;
    description: string;
    image?: any;
    accent?: string;
  };
  isActive: boolean;
  onNext: () => void;
  isLast: boolean;
};

export function OnboardingSlideCard({ item, isActive, onNext, isLast }: Props) {
  return (
    <LinearGradient
      colors={[...GRADIENTS.introCard]}
      style={authStyles.introCard}
    >
      <View style={authStyles.introCardVisualWrap}>
        <View
          style={[
            authStyles.introVisualOrb,
            item.accent ? { backgroundColor: item.accent } : null,
          ]}
        />
        <View style={authStyles.introImageFrame}>
          <Image
            source={
              item.image ?? require("@/assets/images/logo-circle-small.png")
            }
            style={authStyles.introImage}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={authStyles.introCopyWrap}>
        <Text style={authStyles.introCardTitle}>{item.title}</Text>
        <Text style={authStyles.introCardDescription}>{item.description}</Text>
      </View>

      <View style={authStyles.introCardFooter}>
        <View style={authStyles.introDotsRow}>
          <View
            style={[authStyles.introDot, isActive && authStyles.introDotActive]}
          />
          <View style={authStyles.introDotSmall} />
          <View style={authStyles.introDotSmall} />
        </View>

        <Pressable onPress={onNext} style={authStyles.introNextButton}>
          <Ionicons
            name={isLast ? "checkmark" : "chevron-forward"}
            size={20}
            color={COLORS.background}
          />
        </Pressable>
      </View>
    </LinearGradient>
  );
}
