import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Colors from "@/constants/colors";
import { CURRICULUM } from "@/data/curriculum";
import { Grade, LessonNode } from "@/types";
import { useApp } from "@/context/AppContext";

function findLesson(id: string): LessonNode | null {
  for (const grade of Object.values(CURRICULUM)) {
    const found = grade.find((l) => l.id === id);
    if (found) return found;
  }
  return null;
}

function Star({ delay, index }: { delay: number; index: number }) {
  const scale = useSharedValue(0);
  const rotate = useSharedValue(-30);

  useEffect(() => {
    scale.value = withDelay(delay, withSpring(1, { damping: 10, stiffness: 200 }));
    rotate.value = withDelay(delay, withSpring(0, { damping: 12, stiffness: 180 }));
  }, []);

  const style = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
  }));

  return (
    <Animated.View style={[style]}>
      <Feather name="star" size={36} color={Colors.xpGold} />
    </Animated.View>
  );
}

export default function RewardScreen() {
  const { id, score, total } = useLocalSearchParams<{
    id: string;
    score: string;
    total: string;
  }>();
  const insets = useSafeAreaInsets();
  const { profile } = useApp();
  const lesson = findLesson(id);

  const scoreNum = parseInt(score ?? "0");
  const totalNum = parseInt(total ?? "1");
  const pct = Math.round((scoreNum / totalNum) * 100);

  const starCount = pct >= 90 ? 3 : pct >= 60 ? 2 : 1;

  useEffect(() => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }, []);

  const topInset = Platform.OS === "web" ? 67 : insets.top;
  const botInset = Platform.OS === "web" ? 34 : insets.bottom;

  const xpEarned = lesson?.xpReward ?? 0;

  return (
    <View style={[styles.container, { paddingTop: topInset }]}>
      <LinearGradient
        colors={[Colors.primaryPale, "#FFFFFF"]}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.content}>
        <Animated.View entering={FadeInUp.duration(600)} style={styles.trophy}>
          <LinearGradient
            colors={[Colors.xpGold, "#F97316"]}
            style={styles.trophyCircle}
          >
            <Feather name="award" size={52} color="#FFFFFF" />
          </LinearGradient>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).duration(500)} style={styles.starsRow}>
          {Array.from({ length: 3 }).map((_, i) => (
            <Star
              key={i}
              delay={300 + i * 150}
              index={i}
            />
          ))}
          <View style={styles.starsOverlay}>
            {Array.from({ length: 3 }).map((_, i) => (
              <Feather
                key={`empty-${i}`}
                name={i < starCount ? "star" : "star"}
                size={36}
                color={i < starCount ? Colors.xpGold : Colors.border}
                style={{ opacity: i < starCount ? 0 : 1, position: "absolute", left: i * 48 }}
              />
            ))}
          </View>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(400).duration(500)}
          style={styles.textBlock}
        >
          <Text style={styles.congrats}>
            {pct >= 90 ? "Amazing work!" : pct >= 60 ? "Well done!" : "Keep going!"}
          </Text>
          <Text style={styles.lessonName}>{lesson?.title ?? "Lesson"}</Text>
          <Text style={styles.scoreText}>
            {scoreNum} of {totalNum} correct · {pct}%
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(600).duration(500)}
          style={styles.statsRow}
        >
          <View style={styles.stat}>
            <View style={[styles.statIcon, { backgroundColor: Colors.warningLight }]}>
              <Feather name="zap" size={20} color={Colors.xpGold} />
            </View>
            <Text style={styles.statValue}>+{xpEarned}</Text>
            <Text style={styles.statLabel}>XP Earned</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <View style={[styles.statIcon, { backgroundColor: "#FEE2E2" }]}>
              <Feather name="flame" size={20} color={Colors.streakOrange} />
            </View>
            <Text style={styles.statValue}>{profile.streakDays}</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <View style={[styles.statIcon, { backgroundColor: Colors.primaryPale }]}>
              <Feather name="book-open" size={20} color={Colors.primary} />
            </View>
            <Text style={styles.statValue}>{profile.completedLessons.length}</Text>
            <Text style={styles.statLabel}>Lessons Done</Text>
          </View>
        </Animated.View>
      </View>

      <Animated.View
        entering={FadeInDown.delay(800).duration(500)}
        style={[styles.footer, { paddingBottom: botInset + 24 }]}
      >
        <PrimaryButton
          label="Continue Learning"
          onPress={() => router.replace("/(home)/dashboard")}
        />
        <PrimaryButton
          label="Review Lesson"
          onPress={() => router.replace(`/lesson/${id}`)}
          variant="secondary"
          style={{ marginTop: 10 }}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 28,
    paddingTop: 40,
  },
  trophy: {
    alignItems: "center",
  },
  trophyCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.xpGold,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
  },
  starsRow: {
    flexDirection: "row",
    gap: 12,
    position: "relative",
  },
  starsOverlay: {
    position: "absolute",
    flexDirection: "row",
    gap: 12,
  },
  textBlock: {
    alignItems: "center",
    gap: 6,
  },
  congrats: {
    fontFamily: "Inter_700Bold",
    fontSize: 30,
    color: Colors.text,
    textAlign: "center",
  },
  lessonName: {
    fontFamily: "Inter_500Medium",
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  scoreText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    color: Colors.primary,
  },
  statsRow: {
    flexDirection: "row",
    backgroundColor: Colors.backgroundCard,
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 12,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  stat: {
    flex: 1,
    alignItems: "center",
    gap: 6,
  },
  statIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  statValue: {
    fontFamily: "Inter_700Bold",
    fontSize: 22,
    color: Colors.text,
  },
  statLabel: {
    fontFamily: "Inter_400Regular",
    fontSize: 11,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  statDivider: {
    width: 1,
    backgroundColor: Colors.border,
    height: "80%",
    alignSelf: "center",
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 12,
  },
});
