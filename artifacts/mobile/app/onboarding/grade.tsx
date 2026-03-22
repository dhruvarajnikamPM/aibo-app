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
import { GRADES, CLASS_CONFIG } from "@/data/curriculum";
import { makeT } from "@/data/i18n";
import { useApp } from "@/context/AppContext";
import { Grade } from "@/types";

export default function GradeScreen() {
  const insets = useSafeAreaInsets();
  const { setGrade, completeOnboarding, profile } = useApp();
  const [selected, setSelected] = useState<Grade | null>(null);
  const t = makeT(profile.language);

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
        <Text style={styles.title}>{t("whichClass")}</Text>
        <Text style={styles.subtitle}>{t("gradeHint")}</Text>
      </Animated.View>

      <View style={styles.gradesContainer}>
        {GRADES.map((grade, idx) => {
          const isSelected = selected === grade;
          const config = CLASS_CONFIG[grade];
          return (
            <Animated.View
              key={grade}
              entering={FadeInDown.delay(idx * 80).duration(400)}
            >
              <Pressable
                onPress={() => handleSelect(grade)}
                style={[
                  styles.card,
                  isSelected && { borderColor: config.accent, backgroundColor: config.accentBg },
                ]}
              >
                <View style={[
                  styles.gradeNumWrap,
                  isSelected && { backgroundColor: config.accent },
                ]}>
                  <Text style={[styles.gradeNum, isSelected && styles.gradeNumSelected]}>
                    {grade}
                  </Text>
                </View>
                <View style={styles.cardContent}>
                  <Text style={[styles.gradeLabel, isSelected && { color: config.accent }]}>
                    {t("class_")} {grade}
                  </Text>
                  <Text style={[styles.gradeDesc, isSelected && { color: config.accent }]}>
                    {config.tag} · {config.tone}
                  </Text>
                </View>
                {isSelected && (
                  <Feather name="check-circle" size={22} color={config.accent} />
                )}
              </Pressable>
            </Animated.View>
          );
        })}
      </View>

      <View style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}>
        <PrimaryButton
          label={t("startLearning")}
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
  gradeNumWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
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
  gradeDesc: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    color: Colors.textSecondary,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 12,
  },
});
