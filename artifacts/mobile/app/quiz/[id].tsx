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
import FeedbackBar from "@/components/FeedbackBar";
import SwipeCard from "@/components/SwipeCard";
import ProgressBar from "@/components/ui/ProgressBar";
import Colors from "@/constants/colors";
import { CURRICULUM } from "@/data/curriculum";
import { useApp } from "@/context/AppContext";
import { Grade, LessonNode, QuizQuestion } from "@/types";

function findLesson(id: string): LessonNode | null {
  for (const grade of Object.values(CURRICULUM)) {
    const found = grade.find((l) => l.id === id);
    if (found) return found;
  }
  return null;
}

export default function QuizScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const { markLessonComplete, saveQuizScore } = useApp();
  const lesson = findLesson(id);

  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const [swipeAnswers, setSwipeAnswers] = useState<("good" | "bad")[]>([]);
  const [swipeIndex, setSwipeIndex] = useState(0);

  if (!lesson) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Quiz not found</Text>
        <Pressable onPress={() => router.back()}>
          <Text style={{ color: Colors.primary }}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  const questions = lesson.quiz;
  const currentQ = questions[qIndex];
  const topInset = Platform.OS === "web" ? 67 : insets.top;
  const botInset = Platform.OS === "web" ? 34 : insets.bottom;

  const handleMCQSelect = (idx: number) => {
    if (showFeedback) return;
    setSelected(idx);
    const correct = idx === currentQ.correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore((s) => s + 1);
    setShowFeedback(true);
  };

  const handleSwipeLeft = () => {
    setSwipeAnswers((prev) => [...prev, "bad"]);
    advanceSwipe();
  };

  const handleSwipeRight = () => {
    setSwipeAnswers((prev) => [...prev, "good"]);
    advanceSwipe();
  };

  const advanceSwipe = () => {
    const opts = currentQ.options ?? [];
    if (swipeIndex + 1 >= opts.length) {
      const expectedArr = (currentQ.correctAnswer as string).split(",");
      const answers = [...swipeAnswers, swipeIndex % 2 === 0 ? "good" : "bad"];
      const correct = answers.filter(
        (a, i) => a === expectedArr[i]
      ).length;
      const total = expectedArr.length;
      const allCorrect = correct === total;
      setIsCorrect(allCorrect);
      if (allCorrect) setScore((s) => s + 1);
      setShowFeedback(true);
    } else {
      setSwipeIndex((i) => i + 1);
    }
  };

  const handleContinue = () => {
    setShowFeedback(false);
    setSelected(null);
    setSwipeAnswers([]);
    setSwipeIndex(0);

    if (qIndex + 1 >= questions.length) {
      const finalScore = score + (isCorrect ? 0 : 0);
      const pct = Math.round((score / questions.length) * 100);
      saveQuizScore(lesson.id, pct);
      markLessonComplete(lesson.id, lesson.xpReward);
      router.replace(`/reward/${lesson.id}?score=${score}&total=${questions.length}`);
    } else {
      setQIndex((q) => q + 1);
    }
  };

  const renderSwipe = () => {
    const opts = currentQ.options ?? [];
    const current = opts[swipeIndex];
    if (!current) return null;

    return (
      <View style={styles.swipeContainer}>
        <Text style={styles.swipeInstruction}>
          Swipe Right for Good AI, Left for Bad AI
        </Text>
        <View style={{ gap: 12 }}>
          {opts.map((opt, i) => {
            if (i < swipeIndex) {
              return (
                <View key={i} style={[styles.answeredCard, { opacity: 0.5 }]}>
                  <Text style={styles.answeredText}>{opt}</Text>
                  <Text style={{ color: Colors.textMuted, fontSize: 12 }}>
                    {swipeAnswers[i] === "good" ? "Good" : "Bad"}
                  </Text>
                </View>
              );
            }
            if (i === swipeIndex) {
              return (
                <SwipeCard
                  key={i}
                  text={opt}
                  index={i}
                  onSwipeLeft={handleSwipeLeft}
                  onSwipeRight={handleSwipeRight}
                />
              );
            }
            return null;
          })}
        </View>
      </View>
    );
  };

  const renderMCQ = () => {
    const opts = currentQ.options ?? [];
    return (
      <View style={styles.optionsContainer}>
        {opts.map((opt, i) => {
          const isSelected = selected === i;
          const correct = i === currentQ.correctAnswer;
          const showState = showFeedback && (isSelected || correct);

          let borderColor = Colors.border;
          let bgColor = Colors.backgroundCard;
          let textColor = Colors.text;

          if (showState) {
            if (correct) {
              borderColor = Colors.success;
              bgColor = Colors.successLight;
              textColor = Colors.success;
            } else if (isSelected) {
              borderColor = Colors.error;
              bgColor = Colors.errorLight;
              textColor = Colors.error;
            }
          } else if (isSelected) {
            borderColor = Colors.primary;
            bgColor = Colors.primaryPale;
            textColor = Colors.primaryDark;
          }

          return (
            <Pressable
              key={i}
              onPress={() => handleMCQSelect(i)}
              disabled={showFeedback}
              style={[
                styles.option,
                {
                  borderColor,
                  backgroundColor: bgColor,
                },
              ]}
            >
              <View style={[styles.optionLetter, { borderColor: borderColor === Colors.border ? Colors.border : borderColor }]}>
                <Text style={[styles.optionLetterText, { color: textColor }]}>
                  {String.fromCharCode(65 + i)}
                </Text>
              </View>
              <Text style={[styles.optionText, { color: textColor }]}>
                {opt}
              </Text>
              {showState && correct && (
                <Feather name="check-circle" size={18} color={Colors.success} />
              )}
              {showState && isSelected && !correct && (
                <Feather name="x-circle" size={18} color={Colors.error} />
              )}
            </Pressable>
          );
        })}
      </View>
    );
  };

  return (
    <View style={[styles.container, { paddingTop: topInset }]}>
      <View style={styles.topBar}>
        <Pressable onPress={() => router.back()} style={styles.closeBtn}>
          <Feather name="x" size={22} color={Colors.textSecondary} />
        </Pressable>
        <ProgressBar
          progress={qIndex + 1}
          total={questions.length}
          style={{ flex: 1, marginHorizontal: 12 }}
          height={8}
          color={Colors.xpGold}
        />
        <Text style={styles.counter}>
          {qIndex + 1}/{questions.length}
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, { paddingBottom: botInset + 100 }]}
      >
        <Animated.View
          key={qIndex}
          entering={FadeInRight.duration(300)}
          exiting={FadeOutLeft.duration(200)}
        >
          <View style={styles.scoreRow}>
            <View style={styles.scoreBadge}>
              <Feather name="star" size={14} color={Colors.xpGold} />
              <Text style={styles.scoreText}>{score} correct</Text>
            </View>
          </View>

          <Text style={styles.question}>{currentQ.question}</Text>

          {currentQ.type === "swipe" ? renderSwipe() : renderMCQ()}
        </Animated.View>
      </ScrollView>

      {showFeedback && (
        <FeedbackBar
          isCorrect={isCorrect}
          explanation={currentQ.explanation}
          onContinue={handleContinue}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
  counter: {
    fontFamily: "Inter_500Medium",
    fontSize: 13,
    color: Colors.textSecondary,
    width: 36,
    textAlign: "right",
  },
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 8,
    gap: 20,
  },
  scoreRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  scoreBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.warningLight,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    gap: 4,
  },
  scoreText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    color: Colors.xpGold,
  },
  question: {
    fontFamily: "Inter_700Bold",
    fontSize: 22,
    color: Colors.text,
    lineHeight: 32,
    marginBottom: 24,
  },
  optionsContainer: {
    gap: 12,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    padding: 16,
    gap: 12,
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  optionLetter: {
    width: 32,
    height: 32,
    borderRadius: 10,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  optionLetterText: {
    fontFamily: "Inter_700Bold",
    fontSize: 13,
  },
  optionText: {
    flex: 1,
    fontFamily: "Inter_500Medium",
    fontSize: 15,
    lineHeight: 22,
  },
  swipeContainer: {
    gap: 16,
  },
  swipeInstruction: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  answeredCard: {
    backgroundColor: Colors.backgroundCard,
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  answeredText: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: Colors.textSecondary,
    flex: 1,
  },
});
