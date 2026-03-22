import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  FadeInRight,
  FadeOutLeft,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ProgressBar from "@/components/ui/ProgressBar";
import Colors from "@/constants/colors";
import { CURRICULUM } from "@/data/curriculum";
import { Grade, LessonNode, LessonStep } from "@/types";
import { useApp } from "@/context/AppContext";

const STEP_TYPE_LABEL: Record<LessonStep["type"], string> = {
  hook: "Hook",
  concept: "Concept",
  example: "Example",
  interaction: "Think",
  deeper: "Deep Dive",
  challenge: "Challenge",
};

const STEP_TYPE_COLOR: Record<LessonStep["type"], string> = {
  hook: Colors.info,
  concept: Colors.primary,
  example: Colors.mastery,
  interaction: Colors.xpGold,
  deeper: Colors.streakOrange,
  challenge: Colors.error,
};

function findLesson(id: string): LessonNode | null {
  for (const grade of Object.values(CURRICULUM)) {
    const found = grade.find((l) => l.id === id);
    if (found) return found;
  }
  return null;
}

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const { profile } = useApp();
  const lesson = findLesson(id);
  const [stepIndex, setStepIndex] = useState(0);

  if (!lesson) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Lesson not found.</Text>
        <Pressable onPress={() => router.back()}>
          <Text style={{ color: Colors.primary }}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  const steps = lesson.steps;
  const currentStep = steps[stepIndex];
  const isLast = stepIndex === steps.length - 1;
  const stepColor = STEP_TYPE_COLOR[currentStep.type];
  const topInset = Platform.OS === "web" ? 67 : insets.top;
  const botInset = Platform.OS === "web" ? 34 : insets.bottom;

  const goNext = () => {
    if (isLast) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      router.replace(`/quiz/${lesson.id}`);
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setStepIndex((p) => p + 1);
    }
  };

  return (
    <View style={[styles.container, { paddingTop: topInset }]}>
      <View style={styles.topBar}>
        <Pressable
          onPress={() => router.back()}
          style={styles.closeBtn}
        >
          <Feather name="x" size={22} color={Colors.textSecondary} />
        </Pressable>

        <ProgressBar
          progress={stepIndex + 1}
          total={steps.length}
          style={{ flex: 1, marginHorizontal: 12 }}
          height={8}
        />

        <Text style={styles.stepCounter}>
          {stepIndex + 1}/{steps.length}
        </Text>
      </View>

      <View style={styles.lessonHeader}>
        <Text style={styles.lessonTitle}>{lesson.title}</Text>
      </View>

      <Animated.View
        key={stepIndex}
        entering={FadeInRight.duration(300)}
        exiting={FadeOutLeft.duration(200)}
        style={styles.stepContainer}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.stepScroll}
        >
          <View style={[styles.typeBadge, { backgroundColor: stepColor + "22" }]}>
            <View style={[styles.typeDot, { backgroundColor: stepColor }]} />
            <Text style={[styles.typeLabel, { color: stepColor }]}>
              {STEP_TYPE_LABEL[currentStep.type]}
            </Text>
          </View>

          <Text style={styles.stepTitle}>{currentStep.title}</Text>
          <Text style={styles.stepContent}>{currentStep.content}</Text>

          {currentStep.type === "interaction" || currentStep.type === "challenge" ? (
            <View style={[styles.thinkBox, { borderLeftColor: stepColor }]}>
              <Feather name="edit-3" size={18} color={stepColor} />
              <Text style={[styles.thinkText, { color: stepColor }]}>
                Take a moment to think about this before continuing.
              </Text>
            </View>
          ) : null}
        </ScrollView>
      </Animated.View>

      <View style={[styles.footer, { paddingBottom: botInset + 16 }]}>
        <PrimaryButton
          label={isLast ? "Take the Quiz!" : "Continue"}
          onPress={goNext}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  errorText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 18,
    color: Colors.error,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  closeBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  stepCounter: {
    fontFamily: "Inter_500Medium",
    fontSize: 13,
    color: Colors.textSecondary,
    width: 36,
    textAlign: "right",
  },
  lessonHeader: {
    paddingHorizontal: 24,
    paddingBottom: 8,
  },
  lessonTitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 13,
    color: Colors.textMuted,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  stepContainer: {
    flex: 1,
  },
  stepScroll: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 16,
    gap: 16,
  },
  typeBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 6,
  },
  typeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  typeLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  stepTitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 26,
    color: Colors.text,
    lineHeight: 34,
  },
  stepContent: {
    fontFamily: "Inter_400Regular",
    fontSize: 17,
    color: Colors.text,
    lineHeight: 28,
  },
  thinkBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: Colors.backgroundCard,
    borderRadius: 14,
    borderLeftWidth: 4,
    padding: 16,
    gap: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  thinkText: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    lineHeight: 22,
    flex: 1,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 12,
  },
});
