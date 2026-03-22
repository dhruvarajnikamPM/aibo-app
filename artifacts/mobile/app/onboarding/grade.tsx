import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Colors from "@/constants/colors";
import { GRADES } from "@/data/curriculum";
import { useApp } from "@/context/AppContext";
import { Grade } from "@/types";

const GRADE_DESCRIPTIONS: Record<Grade, string> = {
  5: "Beginner explorer",
  6: "Data discoverer",
  7: "Logic builder",
  8: "Language learner",
  9: "Algorithm thinker",
  10: "AI ethicist",
};

export default function GradeScreen() {
  const insets = useSafeAreaInsets();
  const { setGrade, completeOnboarding } = useApp();
  const [selected, setSelected] = useState<Grade | null>(null);

  const handleSelect = (grade: Grade) => {
    setSelected(grade);
    Haptics.selectionAsync();
  };

  const handleContinue = () => {
    if (!selected) return;
    setGrade(selected);
    completeOnboarding();
    router.replace("/(home)/dashboard");
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top + 20 }]}>
      <Animated.View entering={FadeInUp.duration(500)} style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
        >
          <Feather name="arrow-left" size={22} color={Colors.text} />
        </Pressable>
        <Text style={styles.title}>What class are you in?</Text>
        <Text style={styles.subtitle}>
          We will customize your AI learning journey
        </Text>
      </Animated.View>

      <View style={styles.gradesContainer}>
        {GRADES.map((grade, idx) => {
          const isSelected = selected === grade;
          return (
            <Animated.View
              key={grade}
              entering={FadeInDown.delay(idx * 80).duration(400)}
            >
              <Pressable
                onPress={() => handleSelect(grade)}
                style={[styles.card, isSelected && styles.cardSelected]}
              >
                <View style={[styles.gradeNumWrap, isSelected && styles.gradeNumWrapSelected]}>
                  <Text style={[styles.gradeNum, isSelected && styles.gradeNumSelected]}>
                    {grade}
                  </Text>
                </View>
                <View style={styles.cardContent}>
                  <Text style={[styles.gradeLabel, isSelected && styles.gradeLabelSelected]}>
                    Class {grade}
                  </Text>
                  <Text style={[styles.gradeDesc, isSelected && styles.gradeDescSelected]}>
                    {GRADE_DESCRIPTIONS[grade]}
                  </Text>
                </View>
                {isSelected && (
                  <Feather name="check-circle" size={22} color={Colors.primary} />
                )}
              </Pressable>
            </Animated.View>
          );
        })}
      </View>

      <View style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}>
        <PrimaryButton
          label="Start Learning"
          onPress={handleContinue}
          disabled={!selected}
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
  header: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    gap: 8,
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -8,
    marginBottom: 8,
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 26,
    color: Colors.text,
  },
  subtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    color: Colors.textSecondary,
  },
  gradesContainer: {
    flex: 1,
    paddingHorizontal: 24,
    gap: 10,
  },
  card: {
    backgroundColor: Colors.backgroundCard,
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    borderWidth: 2,
    borderColor: "transparent",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryPale,
  },
  gradeNumWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  gradeNumWrapSelected: {
    backgroundColor: Colors.primary,
  },
  gradeNum: {
    fontFamily: "Inter_700Bold",
    fontSize: 22,
    color: Colors.textSecondary,
  },
  gradeNumSelected: {
    color: "#FFFFFF",
  },
  cardContent: {
    flex: 1,
    gap: 2,
  },
  gradeLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    color: Colors.text,
  },
  gradeLabelSelected: {
    color: Colors.primaryDark,
  },
  gradeDesc: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    color: Colors.textSecondary,
  },
  gradeDescSelected: {
    color: Colors.primary,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 12,
  },
});
