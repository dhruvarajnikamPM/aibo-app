import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/colors";
import { useApp } from "@/context/AppContext";
import { LANGUAGES, GRADES } from "@/data/curriculum";

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const { profile, resetProfile } = useApp();
  const topInset = Platform.OS === "web" ? 67 : insets.top;
  const botInset = Platform.OS === "web" ? 34 : insets.bottom;

  const languageName =
    LANGUAGES.find((l) => l.code === profile.language)?.nativeName ?? "English";

  const handleReset = () => {
    Alert.alert(
      "Reset Progress",
      "This will delete all your progress and restart onboarding. Are you sure?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Reset",
          style: "destructive",
          onPress: () => {
            resetProfile();
            router.replace("/");
          },
        },
      ]
    );
  };

  return (
    <View style={[styles.container, { paddingTop: topInset }]}>
      <View style={styles.topBar}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Feather name="arrow-left" size={22} color={Colors.text} />
        </Pressable>
        <Text style={styles.title}>Settings</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, { paddingBottom: botInset + 24 }]}
      >
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Your Profile</Text>

          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Feather name="book" size={18} color={Colors.primary} />
              <Text style={styles.infoLabel}>Class</Text>
              <Text style={styles.infoValue}>{profile.grade ?? "Not set"}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoRow}>
              <Feather name="globe" size={18} color={Colors.info} />
              <Text style={styles.infoLabel}>Language</Text>
              <Text style={styles.infoValue}>{languageName}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoRow}>
              <Feather name="zap" size={18} color={Colors.xpGold} />
              <Text style={styles.infoLabel}>Total XP</Text>
              <Text style={styles.infoValue}>{profile.totalXP}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoRow}>
              <Feather name="check-circle" size={18} color={Colors.success} />
              <Text style={styles.infoLabel}>Lessons Completed</Text>
              <Text style={styles.infoValue}>{profile.completedLessons.length}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Actions</Text>

          <Pressable
            onPress={() => router.push("/onboarding/language")}
            style={styles.actionCard}
          >
            <Feather name="globe" size={20} color={Colors.info} />
            <Text style={styles.actionText}>Change Language</Text>
            <Feather name="chevron-right" size={16} color={Colors.textMuted} />
          </Pressable>

          <Pressable
            onPress={() => router.push("/onboarding/grade")}
            style={styles.actionCard}
          >
            <Feather name="book-open" size={20} color={Colors.primary} />
            <Text style={styles.actionText}>Change Class</Text>
            <Feather name="chevron-right" size={16} color={Colors.textMuted} />
          </Pressable>

          <Pressable onPress={handleReset} style={[styles.actionCard, styles.dangerCard]}>
            <Feather name="refresh-ccw" size={20} color={Colors.error} />
            <Text style={[styles.actionText, { color: Colors.error }]}>
              Reset All Progress
            </Text>
            <Feather name="chevron-right" size={16} color={Colors.error} />
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.buildInfo}>Aibo v1.0 · AI Learning for Classes 5-10</Text>
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
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 18,
    color: Colors.text,
  },
  scroll: {
    paddingHorizontal: 20,
    gap: 20,
    paddingTop: 8,
  },
  section: {
    gap: 10,
  },
  sectionLabel: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 13,
    color: Colors.textMuted,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  infoCard: {
    backgroundColor: Colors.backgroundCard,
    borderRadius: 18,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  infoLabel: {
    flex: 1,
    fontFamily: "Inter_500Medium",
    fontSize: 15,
    color: Colors.text,
  },
  infoValue: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    color: Colors.textSecondary,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.borderLight,
    marginHorizontal: 16,
  },
  actionCard: {
    backgroundColor: Colors.backgroundCard,
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  dangerCard: {
    borderWidth: 1,
    borderColor: Colors.errorLight,
    backgroundColor: "#FFF8F8",
  },
  actionText: {
    flex: 1,
    fontFamily: "Inter_500Medium",
    fontSize: 15,
    color: Colors.text,
  },
  buildInfo: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    color: Colors.textLight,
    textAlign: "center",
  },
});
