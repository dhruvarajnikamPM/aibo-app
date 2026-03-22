import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Grade, UserProfile } from "@/types";
import { DEFAULT_USER_PROFILE } from "@/data/curriculum";

const STORAGE_KEY = "@aibo_user_profile";

interface AppContextValue {
  profile: UserProfile;
  isLoading: boolean;
  setLanguage: (lang: string) => void;
  setGrade: (grade: Grade) => void;
  completeOnboarding: () => void;
  markLessonComplete: (lessonId: string, xpEarned: number) => void;
  saveQuizScore: (lessonId: string, score: number) => void;
  updateDailyGoalProgress: () => void;
  resetProfile: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(
    DEFAULT_USER_PROFILE as UserProfile
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const today = new Date().toDateString();
        const lastActive = parsed.lastActiveDate;

        if (lastActive === today) {
          setProfile(parsed);
        } else {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const isYesterday = lastActive === yesterday.toDateString();

          const updatedProfile = {
            ...parsed,
            streakDays: isYesterday ? parsed.streakDays : 0,
            dailyGoalProgress: 0,
            lastActiveDate: today,
          };
          setProfile(updatedProfile);
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
        }
      }
    } catch (e) {
      console.warn("Error loading profile", e);
    } finally {
      setIsLoading(false);
    }
  };

  const saveProfile = useCallback(async (updated: UserProfile) => {
    setProfile(updated);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn("Error saving profile", e);
    }
  }, []);

  const setLanguage = useCallback(
    (lang: string) => {
      saveProfile({ ...profile, language: lang });
    },
    [profile, saveProfile]
  );

  const setGrade = useCallback(
    (grade: Grade) => {
      saveProfile({ ...profile, grade });
    },
    [profile, saveProfile]
  );

  const completeOnboarding = useCallback(() => {
    const today = new Date().toDateString();
    saveProfile({
      ...profile,
      onboardingComplete: true,
      lastActiveDate: today,
      streakDays: 1,
    });
  }, [profile, saveProfile]);

  const markLessonComplete = useCallback(
    (lessonId: string, xpEarned: number) => {
      const today = new Date().toDateString();
      const isAlreadyComplete = profile.completedLessons.includes(lessonId);

      if (isAlreadyComplete) return;

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const isNewDay = profile.lastActiveDate !== today;
      const isConsecutive =
        profile.lastActiveDate === yesterday.toDateString() || profile.lastActiveDate === today;

      const updatedProfile: UserProfile = {
        ...profile,
        completedLessons: [...profile.completedLessons, lessonId],
        totalXP: profile.totalXP + xpEarned,
        lastActiveDate: today,
        streakDays: isNewDay && isConsecutive ? profile.streakDays + 1 : profile.streakDays,
        dailyGoalProgress: profile.dailyGoalProgress + 1,
      };
      saveProfile(updatedProfile);
    },
    [profile, saveProfile]
  );

  const saveQuizScore = useCallback(
    (lessonId: string, score: number) => {
      saveProfile({
        ...profile,
        quizScores: { ...profile.quizScores, [lessonId]: score },
      });
    },
    [profile, saveProfile]
  );

  const updateDailyGoalProgress = useCallback(() => {
    saveProfile({
      ...profile,
      dailyGoalProgress: Math.min(
        profile.dailyGoalProgress + 1,
        profile.dailyGoalTarget
      ),
    });
  }, [profile, saveProfile]);

  const resetProfile = useCallback(() => {
    saveProfile(DEFAULT_USER_PROFILE as UserProfile);
  }, [saveProfile]);

  const value = useMemo(
    () => ({
      profile,
      isLoading,
      setLanguage,
      setGrade,
      completeOnboarding,
      markLessonComplete,
      saveQuizScore,
      updateDailyGoalProgress,
      resetProfile,
    }),
    [
      profile,
      isLoading,
      setLanguage,
      setGrade,
      completeOnboarding,
      markLessonComplete,
      saveQuizScore,
      updateDailyGoalProgress,
      resetProfile,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
