export type Language = {
  code: string;
  name: string;
  nativeName: string;
};

export type Grade = 5 | 6 | 7 | 8 | 9 | 10;

export type LessonNode = {
  id: string;
  classId: Grade;
  title: string;
  subtitle: string;
  icon: string;
  steps: LessonStep[];
  quiz: QuizQuestion[];
  xpReward: number;
  position: number;
};

export type LessonStep = {
  id: string;
  type: "hook" | "concept" | "example" | "interaction" | "deeper" | "challenge";
  title: string;
  content: string;
  visual?: string;
};

export type QuizQuestion = {
  id: string;
  type: "mcq" | "swipe" | "short";
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
};

export type UserProfile = {
  language: string;
  grade: Grade | null;
  name: string;
  streakDays: number;
  lastActiveDate: string;
  totalXP: number;
  completedLessons: string[];
  quizScores: Record<string, number>;
  dailyGoalProgress: number;
  dailyGoalTarget: number;
  onboardingComplete: boolean;
};
