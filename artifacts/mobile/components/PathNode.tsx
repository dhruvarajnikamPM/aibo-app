import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Colors from "@/constants/colors";
import { LessonNode } from "@/types";

type NodeState = "locked" | "current" | "completed";

interface PathNodeProps {
  node: LessonNode;
  state: NodeState;
  onPress: (node: LessonNode) => void;
  isLeft?: boolean;
}

function NodeIcon({ state, icon }: { state: NodeState; icon: string }) {
  const iconName =
    state === "locked" ? "lock" :
    state === "completed" ? "check" :
    (icon as "code" | "zap" | "layers" | "cpu" | "git-branch" | "shield" | "alert-triangle" | "message-circle" | "bar-chart" | "binary");

  const color =
    state === "locked" ? Colors.nodeLocked :
    state === "completed" ? Colors.textOnPrimary :
    "#FFFFFF";

  return <Feather name={iconName as any} size={24} color={color} />;
}

export default function PathNode({
  node,
  state,
  onPress,
  isLeft = false,
}: PathNodeProps) {
  const scale = useSharedValue(1);
  const glowOpacity = useSharedValue(0.5);

  React.useEffect(() => {
    if (state === "current") {
      glowOpacity.value = withRepeat(
        withSequence(
          withTiming(1, { duration: 800 }),
          withTiming(0.3, { duration: 800 })
        ),
        -1,
        true
      );
    }
  }, [state]);

  const glowStyle = useAnimatedStyle(() => ({
    opacity: glowOpacity.value,
  }));

  const animStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    if (state === "locked") return;
    scale.value = withSpring(0.9, { damping: 10 }, () => {
      scale.value = withSpring(1, { damping: 10 });
    });
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress(node);
  };

  const nodeBg =
    state === "locked"
      ? Colors.nodeLockedBg
      : state === "completed"
        ? Colors.nodeCompleted
        : Colors.nodeCurrent;

  const cardBg =
    state === "locked"
      ? Colors.backgroundCard
      : state === "completed"
        ? Colors.nodeCompletedBg
        : Colors.nodeCurrentBg;

  return (
    <View style={[styles.container, isLeft ? styles.left : styles.right]}>
      <Animated.View style={animStyle}>
        <Pressable
          onPress={handlePress}
          disabled={state === "locked"}
          style={styles.pressable}
        >
          {state === "current" && (
            <Animated.View style={[styles.glow, glowStyle]} />
          )}
          <View style={[styles.node, { backgroundColor: nodeBg }]}>
            <NodeIcon state={state} icon={node.icon} />
          </View>

          <View style={[styles.card, { backgroundColor: cardBg }]}>
            <Text
              style={[
                styles.title,
                { color: state === "locked" ? Colors.textMuted : Colors.text },
              ]}
              numberOfLines={1}
            >
              {node.title}
            </Text>
            <Text
              style={[
                styles.subtitle,
                {
                  color:
                    state === "locked"
                      ? Colors.textLight
                      : Colors.textSecondary,
                },
              ]}
              numberOfLines={1}
            >
              {node.subtitle}
            </Text>
            {state === "completed" && (
              <View style={styles.xpChip}>
                <Text style={styles.xpText}>+{node.xpReward} XP</Text>
              </View>
            )}
            {state === "current" && (
              <View style={[styles.xpChip, { backgroundColor: Colors.nodeCurrent + "33" }]}>
                <Text style={[styles.xpText, { color: Colors.nodeCurrent }]}>
                  Start
                </Text>
              </View>
            )}
          </View>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    paddingVertical: 8,
  },
  left: {
    paddingRight: 16,
    alignItems: "flex-end",
  },
  right: {
    paddingLeft: 16,
    alignItems: "flex-start",
    alignSelf: "flex-end",
  },
  pressable: {
    alignItems: "center",
    gap: 8,
  },
  glow: {
    position: "absolute",
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.nodeCurrent,
    zIndex: 0,
  },
  node: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  card: {
    width: 130,
    borderRadius: 14,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  title: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 10,
    textAlign: "center",
    marginTop: 2,
  },
  xpChip: {
    marginTop: 6,
    backgroundColor: Colors.nodeCompletedBg,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  xpText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 10,
    color: Colors.nodeCompleted,
  },
});
