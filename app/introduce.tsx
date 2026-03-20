import { OnboardingSlideCard } from "@/components/auth/onboarding-slide-card";
import { ScreenContainer } from "@/components/common/screen-container";
import { AUTH_COPY } from "@/features/auth/data/copy";
import { authStyles } from "@/features/auth/styles/auth.styles";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
  View,
} from "react-native";

type Slide = (typeof AUTH_COPY.introSlides)[number];

export default function IntroduceScreen() {
  const { width } = useWindowDimensions();
  const listRef = useRef<FlatList<Slide>>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = width - 40;
  const isLast = activeIndex === AUTH_COPY.introSlides.length - 1;

  const handleMomentumEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const nextIndex = Math.round(event.nativeEvent.contentOffset.x / cardWidth);
    setActiveIndex(nextIndex);
  };

  const handleNext = () => {
    if (isLast) {
      router.replace("/login");
      return;
    }

    const nextIndex = activeIndex + 1;
    listRef.current?.scrollToOffset({
      offset: nextIndex * cardWidth,
      animated: true,
    });
    setActiveIndex(nextIndex);
  };

  return (
    <ScreenContainer>
      <View style={authStyles.introContainer}>
        <View style={authStyles.introCarouselWrap}>
          <FlatList
            ref={listRef}
            data={AUTH_COPY.introSlides}
            horizontal
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => String(index)}
            snapToInterval={cardWidth}
            decelerationRate="fast"
            contentContainerStyle={authStyles.introCardListContent}
            onMomentumScrollEnd={handleMomentumEnd}
            renderItem={({ item, index }) => (
              <View style={[{ width: cardWidth }]}>
                <OnboardingSlideCard
                  item={item}
                  isActive={index === activeIndex}
                  onNext={handleNext}
                  isLast={index === AUTH_COPY.introSlides.length - 1}
                />
              </View>
            )}
          />
        </View>

        <View style={authStyles.dotsWrap}>
          {AUTH_COPY.introSlides.map((_, i) => (
            <View
              key={i}
              style={[
                authStyles.dot,
                i === activeIndex && authStyles.dotActive,
              ]}
            />
          ))}
        </View>
      </View>
    </ScreenContainer>
  );
}
