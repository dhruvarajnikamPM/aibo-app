import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import * as Haptics from "expo-haptics";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Colors from "@/constants/colors";

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "ghost";
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  size?: "sm" | "md" | "lg";
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function PrimaryButton({
  label,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
  style,
  size = "lg",
}: PrimaryButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.96, { damping: 15, stiffness: 400 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 400 });
  };

  const handlePress = () => {
    if (disabled || loading) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress();
  };

  const bgColor =
    variant === "primary"
      ? Colors.primary
      : variant === "secondary"
        ? Colors.backgroundCard
        : "transparent";

  const textColor =
    variant === "primary"
      ? Colors.textOnPrimary
      : variant === "secondary"
        ? Colors.primary
        : Colors.primary;

  const borderColor =
    variant === "secondary" ? Colors.primary : "transparent";

  const paddingVertical =
    size === "sm" ? 10 : size === "md" ? 14 : 17;

  const fontSize = size === "sm" ? 14 : size === "md" ? 15 : 17;

  return (
    <AnimatedPressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled || loading}
      style={[
        animatedStyle,
        styles.base,
        {
          backgroundColor: bgColor,
          borderColor,
          borderWidth: variant === "secondary" ? 1.5 : 0,
          paddingVertical,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "primary" ? Colors.textOnPrimary : Colors.primary}
          size="small"
        />
      ) : (
        <Text style={[styles.label, { color: textColor, fontSize }]}>
          {label}
        </Text>
      )}
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  label: {
    fontFamily: "Inter_700Bold",
    letterSpacing: 0.2,
  },
});
