import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
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
import { LANGUAGES } from "@/data/curriculum";
import { useApp } from "@/context/AppContext";

export default function LanguageScreen() {
  const insets = useSafeAreaInsets();
  const { setLanguage, profile } = useApp();
  const [selected, setSelected] = useState(profile.language || "en");

  const handleSelect = (code: string) => {
    setSelected(code);
    Haptics.selectionAsync();
  };

  const handleContinue = () => {
    setLanguage(selected);
    router.push("/onboarding/grade");
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top + 20 }]}>
      <Animated.View entering={FadeInUp.duration(500)} style={styles.header}>
        <Image
          source={require("@/assets/images/icon.png")}
          style={styles.logo}
          contentFit="contain"
        />
        <Text style={styles.title}>Choose your language</Text>
        <Text style={styles.subtitle}>
          Select the language you are comfortable with
        </Text>
      </Animated.View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.grid}
      >
        {LANGUAGES.map((lang, idx) => {
          const isSelected = selected === lang.code;
          return (
            <Animated.View
              key={lang.code}
              entering={FadeInDown.delay(idx * 60).duration(400)}
              style={styles.cardWrapper}
            >
              <Pressable
                onPress={() => handleSelect(lang.code)}
                style={[
                  styles.card,
                  isSelected && styles.cardSelected,
                ]}
              >
                {isSelected && (
                  <View style={styles.checkBadge}>
                    <Feather name="check" size={12} color="#FFF" />
                  </View>
                )}
                <Text style={[styles.nativeName, isSelected && styles.nameSelected]}>
                  {lang.nativeName}
                </Text>
                <Text style={[styles.englishName, isSelected && styles.engSelected]}>
                  {lang.name}
                </Text>
              </Pressable>
            </Animated.View>
          );
        })}
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}>
        <PrimaryButton
          label="Continue"
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
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 20,
    gap: 8,
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 16,
    marginBottom: 8,
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 24,
    color: Colors.text,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    gap: 12,
    paddingBottom: 16,
  },
  cardWrapper: {
    width: "46%",
  },
  card: {
    backgroundColor: Colors.backgroundCard,
    borderRadius: 18,
    padding: 18,
    alignItems: "center",
    gap: 4,
    borderWidth: 2,
    borderColor: "transparent",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
    position: "relative",
  },
  cardSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryPale,
  },
  checkBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  nativeName: {
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    color: Colors.text,
  },
  nameSelected: {
    color: Colors.primaryDark,
  },
  englishName: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    color: Colors.textSecondary,
  },
  engSelected: {
    color: Colors.primary,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    backgroundColor: Colors.background,
  },
});
