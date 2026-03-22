import React, { useEffect } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Colors from "@/constants/colors";

interface ProgressBarProps {
  progress: number;
  total: number;
  color?: string;
  height?: number;
  style?: ViewStyle;
}

export default function ProgressBar({
  progress,
  total,
  color = Colors.primary,
  height = 8,
  style,
}: ProgressBarProps) {
  const width = useSharedValue(0);

  useEffect(() => {
    const pct = total > 0 ? Math.min(progress / total, 1) : 0;
    width.value = withSpring(pct * 100, { damping: 20, stiffness: 200 });
  }, [progress, total]);

  const animStyle = useAnimatedStyle(() => ({
    width: `${width.value}%`,
  }));

  return (
    <View
      style={[
        styles.track,
        { height, borderRadius: height / 2, backgroundColor: Colors.border },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.fill,
          animStyle,
          {
            height,
            borderRadius: height / 2,
            backgroundColor: color,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: "100%",
    overflow: "hidden",
  },
  fill: {
    position: "absolute",
    left: 0,
  },
});
