import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React from "react";
import { PanResponder, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import Colors from "@/constants/colors";

interface SwipeCardProps {
  text: string;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  index: number;
}

export default function SwipeCard({
  text,
  onSwipeLeft,
  onSwipeRight,
  index,
}: SwipeCardProps) {
  const translateX = useSharedValue(0);
  const rotate = useSharedValue(0);
  const opacity = useSharedValue(1);

  const SWIPE_THRESHOLD = 80;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, state) => {
      translateX.value = state.dx;
      rotate.value = state.dx * 0.05;
    },
    onPanResponderRelease: (_, state) => {
      if (state.dx > SWIPE_THRESHOLD) {
        translateX.value = withTiming(400, { duration: 300 }, () => {
          opacity.value = 0;
          runOnJS(onSwipeRight)();
          runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Medium);
        });
      } else if (state.dx < -SWIPE_THRESHOLD) {
        translateX.value = withTiming(-400, { duration: 300 }, () => {
          opacity.value = 0;
          runOnJS(onSwipeLeft)();
          runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Medium);
        });
      } else {
        translateX.value = withSpring(0, { damping: 20, stiffness: 300 });
        rotate.value = withSpring(0, { damping: 20, stiffness: 300 });
      }
    },
  });

  const animStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { rotate: `${rotate.value}deg` },
    ],
    opacity: opacity.value,
  }));

  const leftIndicatorStyle = useAnimatedStyle(() => ({
    opacity: Math.max(0, (-translateX.value - 20) / 60),
  }));

  const rightIndicatorStyle = useAnimatedStyle(() => ({
    opacity: Math.max(0, (translateX.value - 20) / 60),
  }));

  return (
    <Animated.View
      style={[styles.card, animStyle]}
      {...panResponder.panHandlers}
    >
      <Animated.View style={[styles.indicator, styles.leftIndicator, leftIndicatorStyle]}>
        <Feather name="x" size={28} color={Colors.error} />
        <Text style={[styles.indicatorText, { color: Colors.error }]}>Bad</Text>
      </Animated.View>

      <Animated.View style={[styles.indicator, styles.rightIndicator, rightIndicatorStyle]}>
        <Feather name="check" size={28} color={Colors.success} />
        <Text style={[styles.indicatorText, { color: Colors.success }]}>Good</Text>
      </Animated.View>

      <Text style={styles.number}>{index + 1}</Text>
      <Text style={styles.text}>{text}</Text>

      <View style={styles.hint}>
        <View style={styles.hintItem}>
          <Feather name="chevron-left" size={16} color={Colors.error} />
          <Text style={[styles.hintText, { color: Colors.error }]}>Bad AI</Text>
        </View>
        <View style={styles.hintItem}>
          <Text style={[styles.hintText, { color: Colors.success }]}>Good AI</Text>
          <Feather name="chevron-right" size={16} color={Colors.success} />
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.backgroundCard,
    borderRadius: 24,
    padding: 28,
    alignItems: "center",
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
    minHeight: 200,
    justifyContent: "center",
    position: "relative",
  },
  indicator: {
    position: "absolute",
    top: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  leftIndicator: {
    left: 16,
    borderColor: Colors.error,
  },
  rightIndicator: {
    right: 16,
    borderColor: Colors.success,
  },
  indicatorText: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
  },
  number: {
    fontFamily: "Inter_700Bold",
    fontSize: 13,
    color: Colors.textMuted,
  },
  text: {
    fontFamily: "Inter_500Medium",
    fontSize: 17,
    color: Colors.text,
    textAlign: "center",
    lineHeight: 26,
  },
  hint: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 8,
  },
  hintItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  hintText: {
    fontFamily: "Inter_500Medium",
    fontSize: 12,
  },
});
