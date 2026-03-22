import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useMemo } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PathNode from "@/components/PathNode";
import StatsCard from "@/components/StatsCard";
import ProgressBar from "@/components/ui/ProgressBar";
import Colors from "@/constants/colors";
import { CURRICULUM } from "@/data/curriculum";
import { useApp } from "@/context/AppContext";
import { Grade, LessonNode } from "@/types";

export default function DashboardScreen() {
  const insets = useSafeAreaInsets();
  const { profile } = useApp();
  const grade = (profile.grade ?? 5) as Grade;
  const lessons = CURRICULUM[grade] ?? [];

  const getNodeState = (lesson: LessonNode) => {
    if (profile.completedLessons.includes(lesson.id)) return "completed";
    const allPrev = lessons
      .slice(0, lesson.position)
      .every((l) => profile.completedLessons.includes(l.id));
    if (allPrev) return "current";
    return "locked";
  };

  const currentLesson = useMemo(
    () => lessons.find((l) => getNodeState(l) === "current"),
    [lessons, profile.completedLessons]
  );

  const topInset = Platform.OS === "web" ? 67 : insets.top;
  const botInset = Platform.OS === "web" ? 34 : insets.bottom;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.primaryPale, Colors.background]}
        locations={[0, 0.4]}
        style={StyleSheet.absoluteFill}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scroll,
          { paddingTop: topInset + 16, paddingBottom: botInset + 24 },
        ]}
      >
        <Animated.View entering={FadeInUp.duration(500)} style={styles.topRow}>
          <View>
            <Text style={styles.greeting}>Hello, Learner</Text>
            <Text style={styles.gradeTag}>Class {grade} · AI Learning Path</Text>
          </View>
          <Pressable
            onPress={() => router.push("/settings")}
            style={styles.avatarBtn}
          >
            <LinearGradient
              colors={[Colors.primary, Colors.primaryDark]}
              style={styles.avatar}
            >
              <Text style={styles.avatarText}>{grade}</Text>
            </LinearGradient>
          </Pressable>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(100).duration(500)} style={styles.statsRow}>
          <StatsCard
            icon="zap"
            iconColor={Colors.xpGold}
            iconBg={Colors.warningLight}
            label="Total XP"
            value={profile.totalXP}
          />
          <StatsCard
            icon="flame"
            iconColor={Colors.streakOrange}
            iconBg="#FEE2E2"
            label="Day Streak"
            value={profile.streakDays}
          />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(200).duration(500)}
          style={styles.goalCard}
        >
          <View style={styles.goalTop}>
            <View>
              <Text style={styles.goalLabel}>Daily Goal</Text>
              <Text style={styles.goalSub}>
                {profile.dailyGoalProgress} of {profile.dailyGoalTarget} lessons
              </Text>
            </View>
            <View style={styles.goalBadge}>
              <Feather name="target" size={16} color={Colors.primary} />
            </View>
          </View>
          <ProgressBar
            progress={profile.dailyGoalProgress}
            total={profile.dailyGoalTarget}
            height={10}
            style={{ marginTop: 12 }}
          />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300).duration(500)}>
          <Text style={styles.sectionTitle}>Your Learning Path</Text>
          <Text style={styles.sectionSub}>
            Complete lessons to unlock the next level
          </Text>
        </Animated.View>

        <View style={styles.pathContainer}>
          {lessons.map((lesson, idx) => {
            const state = getNodeState(lesson);
            const isLeft = idx % 2 === 0;
            return (
              <View key={lesson.id} style={styles.pathRow}>
                {isLeft ? (
                  <>
                    <PathNode
                      node={lesson}
                      state={state}
                      onPress={(n) => router.push(`/lesson/${n.id}`)}
                      isLeft
                    />
                    <View style={styles.pathConnector} />
                  </>
                ) : (
                  <>
                    <View style={styles.pathConnector} />
                    <PathNode
                      node={lesson}
                      state={state}
                      onPress={(n) => router.push(`/lesson/${n.id}`)}
                      isLeft={false}
                    />
                  </>
                )}
              </View>
            );
          })}

          {lessons.length === 0 && (
            <View style={styles.empty}>
              <Feather name="book-open" size={40} color={Colors.textLight} />
              <Text style={styles.emptyText}>
                No lessons available for this class yet.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    paddingHorizontal: 20,
    gap: 16,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontFamily: "Inter_700Bold",
    fontSize: 22,
    color: Colors.text,
  },
  gradeTag: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  avatarBtn: {
    borderRadius: 22,
    overflow: "hidden",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontFamily: "Inter_700Bold",
    fontSize: 18,
    color: "#FFFFFF",
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
  },
  goalCard: {
    backgroundColor: Colors.backgroundCard,
    borderRadius: 20,
    padding: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  goalTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    color: Colors.text,
  },
  goalSub: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  goalBadge: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: Colors.primaryPale,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    color: Colors.text,
  },
  sectionSub: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  pathContainer: {
    gap: 4,
  },
  pathRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  pathConnector: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.border,
    marginHorizontal: 4,
  },
  empty: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    gap: 12,
  },
  emptyText: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    color: Colors.textMuted,
    textAlign: "center",
  },
});
