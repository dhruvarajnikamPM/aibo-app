import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import Colors from "@/constants/colors";

interface XPBadgeProps {
  xp: number;
  size?: "sm" | "md";
  style?: ViewStyle;
}

export default function XPBadge({ xp, size = "md", style }: XPBadgeProps) {
  const fontSize = size === "sm" ? 11 : 13;
  const padding = size === "sm" ? 4 : 6;

  return (
    <View
      style={[
        styles.badge,
        {
          paddingHorizontal: padding + 4,
          paddingVertical: padding,
        },
        style,
      ]}
    >
      <Text style={[styles.text, { fontSize }]}>+{xp} XP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: Colors.xpGold,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Inter_700Bold",
  },
});
