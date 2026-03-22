import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Colors from "@/constants/colors";
import { useApp } from "@/context/AppContext";

export default function SplashScreen() {
  const { profile, isLoading } = useApp();

  const logoScale = useSharedValue(0.6);
  const logoOpacity = useSharedValue(0);

  useEffect(() => {
    logoOpacity.value = withTiming(1, { duration: 500 });
    logoScale.value = withSpring(1, { damping: 14, stiffness: 180 });

    const timer = setTimeout(() => {
      if (!isLoading) {
        navigate();
      }
    }, 1800);

    return () => clearTimeout(timer);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(navigate, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const navigate = () => {
    if (!profile.onboardingComplete) {
      router.replace("/onboarding/language");
    } else {
      router.replace("/(home)/dashboard");
    }
  };

  const logoStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [{ scale: logoScale.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoWrap, logoStyle]}>
        <Image
          source={require("@/assets/images/icon.png")}
          style={styles.logo}
          contentFit="contain"
        />
        <Animated.Text style={styles.brand}>aibo</Animated.Text>
        <Animated.Text style={styles.tagline}>
          AI learning made fun
        </Animated.Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logoWrap: {
    alignItems: "center",
    gap: 12,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 24,
  },
  brand: {
    fontFamily: "Inter_700Bold",
    fontSize: 36,
    color: Colors.primary,
    letterSpacing: -1,
  },
  tagline: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    color: Colors.textSecondary,
  },
});
