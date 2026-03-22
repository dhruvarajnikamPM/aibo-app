import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/colors";

interface FeedbackBarProps {
  isCorrect: boolean;
  explanation: string;
  onContinue: () => void;
}

export default function FeedbackBar({
  isCorrect,
  explanation,
  onContinue,
}: FeedbackBarProps) {
  const insets = useSafeAreaInsets();
  const translateY = useSharedValue(200);

  useEffect(() => {
    translateY.value = withSpring(0, { damping: 20, stiffness: 300 });
    if (isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  }, []);

  const animStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const bg = isCorrect ? Colors.successLight : Colors.errorLight;
  const textColor = isCorrect ? Colors.success : Colors.error;
  const iconName = isCorrect ? "check-circle" : "x-circle";

  return (
    <Animated.View
      style={[animStyle, styles.container, { backgroundColor: bg }]}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Feather name={iconName} size={22} color={textColor} />
          <Text style={[styles.title, { color: textColor }]}>
            {isCorrect ? "Correct!" : "Not quite"}
          </Text>
        </View>
        <Text style={[styles.explanation, { color: textColor + "CC" }]}>
          {explanation}
        </Text>
        <Pressable
          onPress={onContinue}
          style={[styles.btn, { backgroundColor: textColor }]}
        >
          <Text style={styles.btnText}>Continue</Text>
        </Pressable>
      </View>
      <View style={{ height: insets.bottom }} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 20,
    paddingHorizontal: 24,
    paddingBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  content: {
    gap: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 18,
  },
  explanation: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  btn: {
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 4,
  },
  btnText: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    color: "#FFFFFF",
  },
});
