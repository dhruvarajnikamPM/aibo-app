export type SupportedLang =
  | "en" | "hi" | "mr" | "gu" | "ta" | "te" | "bn" | "kn";

type StringKey =
  | "chooseLanguage" | "selectLanguageHint" | "continue_"
  | "whichClass" | "gradeHint" | "startLearning"
  | "hello" | "totalXP" | "dayStreak"
  | "dailyGoal" | "lessonsOf" | "lessonsWord"
  | "learningPath" | "completeLessons"
  | "correct" | "notQuite" | "continueBtn"
  | "amazing" | "wellDone" | "keepGoing"
  | "xpEarned" | "continueLearning" | "reviewLesson"
  | "takeQuiz" | "settings" | "changeLang" | "changeClass"
  | "resetProgress" | "class_" | "aiLearningPath"
  | "swipeRight" | "swipeLeft" | "swipeInstruction"
  | "correct_badge" | "aiPath";

type TranslationMap = Partial<Record<StringKey, string>>;

const EN: Record<StringKey, string> = {
  chooseLanguage: "Choose your language",
  selectLanguageHint: "Select the language you are comfortable with",
  continue_: "Continue",
  whichClass: "What class are you in?",
  gradeHint: "We will personalize your AI learning journey",
  startLearning: "Start Learning",
  hello: "Hello, Learner",
  totalXP: "Total XP",
  dayStreak: "Day Streak",
  dailyGoal: "Daily Goal",
  lessonsOf: "of",
  lessonsWord: "lessons",
  learningPath: "Your Learning Path",
  completeLessons: "Complete lessons to unlock the next level",
  correct: "Correct!",
  notQuite: "Not quite",
  continueBtn: "Continue",
  amazing: "Amazing work!",
  wellDone: "Well done!",
  keepGoing: "Keep going!",
  xpEarned: "XP Earned",
  continueLearning: "Continue Learning",
  reviewLesson: "Review Lesson",
  takeQuiz: "Take the Quiz!",
  settings: "Settings",
  changeLang: "Change Language",
  changeClass: "Change Class",
  resetProgress: "Reset All Progress",
  class_: "Class",
  aiLearningPath: "AI Learning Path",
  swipeRight: "Good AI",
  swipeLeft: "Bad AI",
  swipeInstruction: "Swipe Right for Good AI, Left for Bad AI",
  correct_badge: "correct",
  aiPath: "AI Learning Path",
};

const HI: TranslationMap = {
  chooseLanguage: "अपनी भाषा चुनें",
  selectLanguageHint: "वह भाषा चुनें जिसमें आप सहज हैं",
  continue_: "जारी रखें",
  whichClass: "आप किस कक्षा में हैं?",
  gradeHint: "हम आपकी AI सीखने की यात्रा को अनुकूलित करेंगे",
  startLearning: "सीखना शुरू करें",
  hello: "नमस्ते, शिक्षार्थी",
  totalXP: "कुल XP",
  dayStreak: "लगातार दिन",
  dailyGoal: "दैनिक लक्ष्य",
  lessonsOf: "में से",
  lessonsWord: "पाठ",
  learningPath: "आपका सीखने का रास्ता",
  completeLessons: "अगला स्तर अनलॉक करने के लिए पाठ पूरे करें",
  correct: "सही जवाब!",
  notQuite: "थोड़ा गलत",
  continueBtn: "जारी रखें",
  amazing: "शानदार काम!",
  wellDone: "बहुत बढ़िया!",
  keepGoing: "कोशिश जारी रखो!",
  xpEarned: "XP अर्जित",
  continueLearning: "सीखना जारी रखें",
  reviewLesson: "पाठ दोबारा देखें",
  takeQuiz: "प्रश्नोत्तरी दें!",
  settings: "सेटिंग्स",
  changeLang: "भाषा बदलें",
  changeClass: "कक्षा बदलें",
  resetProgress: "सभी प्रगति रीसेट करें",
  class_: "कक्षा",
  aiLearningPath: "AI सीखने का मार्ग",
  swipeRight: "अच्छी AI",
  swipeLeft: "बुरी AI",
  swipeInstruction: "अच्छी AI के लिए दाएं, बुरी AI के लिए बाएं स्वाइप करें",
  correct_badge: "सही",
  aiPath: "AI सीखने का मार्ग",
};

const MR: TranslationMap = {
  chooseLanguage: "तुमची भाषा निवडा",
  selectLanguageHint: "तुम्हाला सोयीची असलेली भाषा निवडा",
  continue_: "पुढे चला",
  whichClass: "तुम्ही कोणत्या इयत्तेत आहात?",
  gradeHint: "आम्ही तुमचा AI शिक्षण प्रवास सानुकूल करू",
  startLearning: "शिकणे सुरू करा",
  hello: "नमस्कार, शिकणारे",
  totalXP: "एकूण XP",
  dayStreak: "सलग दिवस",
  dailyGoal: "दैनिक ध्येय",
  lessonsOf: "पैकी",
  lessonsWord: "धडे",
  learningPath: "तुमचा शिक्षण मार्ग",
  completeLessons: "पुढचा स्तर अनलॉक करण्यासाठी धडे पूर्ण करा",
  correct: "बरोबर!",
  notQuite: "जवळजवळ बरोबर",
  continueBtn: "पुढे चला",
  amazing: "अप्रतिम काम!",
  wellDone: "शाब्बास!",
  keepGoing: "प्रयत्न सुरू ठेवा!",
  xpEarned: "XP मिळवले",
  continueLearning: "शिकणे सुरू ठेवा",
  reviewLesson: "धडा पुन्हा पहा",
  takeQuiz: "प्रश्नमंजुषा द्या!",
  settings: "सेटिंग्ज",
  changeLang: "भाषा बदला",
  changeClass: "इयत्ता बदला",
  resetProgress: "सर्व प्रगती रीसेट करा",
  class_: "इयत्ता",
  aiLearningPath: "AI शिक्षण मार्ग",
  swipeRight: "चांगली AI",
  swipeLeft: "वाईट AI",
  swipeInstruction: "चांगल्या AI साठी उजवीकडे, वाईट AI साठी डावीकडे स्वाइप करा",
  correct_badge: "बरोबर",
  aiPath: "AI शिक्षण मार्ग",
};

const GU: TranslationMap = {
  chooseLanguage: "તમારી ભાષા પસંદ કરો",
  selectLanguageHint: "તમે સ્વ-સ્ફૂર્ત ભાષા પસંદ કરો",
  continue_: "ચાલુ રાખો",
  whichClass: "તમે ક્યા ધોરણમાં છો?",
  startLearning: "શીખવાનું શરૂ કરો",
  hello: "નમસ્તે, વિદ્યાર્થી",
  totalXP: "કુલ XP",
  dayStreak: "સળંગ દિવસ",
  dailyGoal: "દૈનિક ધ્યેય",
};

const TA: TranslationMap = {
  chooseLanguage: "உங்கள் மொழியை தேர்ந்தெடுக்கவும்",
  selectLanguageHint: "உங்களுக்கு வசதியான மொழியை தேர்ந்தெடுக்கவும்",
  continue_: "தொடரவும்",
  whichClass: "நீங்கள் எந்த வகுப்பில் படிக்கிறீர்கள்?",
  startLearning: "கற்றலை தொடங்கவும்",
  hello: "வணக்கம், மாணவரே",
  totalXP: "மொத்த XP",
  dayStreak: "தொடர் நாட்கள்",
  dailyGoal: "தினசரி இலக்கு",
};

const TE: TranslationMap = {
  chooseLanguage: "మీ భాషను ఎంచుకోండి",
  selectLanguageHint: "మీకు సౌకర్యంగా అనిపించే భాషను ఎంచుకోండి",
  continue_: "కొనసాగించు",
  whichClass: "మీరు ఏ తరగతిలో ఉన్నారు?",
  startLearning: "నేర్చుకోవడం మొదలుపెట్టండి",
  hello: "నమస్కారం, విద్యార్థీ",
  totalXP: "మొత్తం XP",
  dayStreak: "వరుస రోజులు",
  dailyGoal: "రోజువారీ లక్ష్యం",
};

const BN: TranslationMap = {
  chooseLanguage: "আপনার ভাষা বেছে নিন",
  selectLanguageHint: "আপনার সুবিধার ভাষা নির্বাচন করুন",
  continue_: "চালিয়ে যান",
  whichClass: "আপনি কোন ক্লাসে আছেন?",
  startLearning: "শেখা শুরু করুন",
  hello: "নমস্কার, শিক্ষার্থী",
  totalXP: "মোট XP",
  dayStreak: "ধারাবাহিক দিন",
  dailyGoal: "দৈনিক লক্ষ্য",
};

const KN: TranslationMap = {
  chooseLanguage: "ನಿಮ್ಮ ಭಾಷೆ ಆಯ್ಕೆ ಮಾಡಿ",
  selectLanguageHint: "ನಿಮಗೆ ಆರಾಮದಾಯಕವಾದ ಭಾಷೆ ಆಯ್ಕೆ ಮಾಡಿ",
  continue_: "ಮುಂದುವರಿಸಿ",
  whichClass: "ನೀವು ಯಾವ ತರಗತಿಯಲ್ಲಿದ್ದೀರಿ?",
  startLearning: "ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ",
  hello: "ನಮಸ್ಕಾರ, ವಿದ್ಯಾರ್ಥಿ",
  totalXP: "ಒಟ್ಟು XP",
  dayStreak: "ಸತತ ದಿನಗಳು",
  dailyGoal: "ದೈನಂದಿನ ಗುರಿ",
};

const TRANSLATIONS: Record<SupportedLang, TranslationMap> = {
  en: EN,
  hi: HI,
  mr: MR,
  gu: GU,
  ta: TA,
  te: TE,
  bn: BN,
  kn: KN,
};

export function getTranslation(lang: string, key: StringKey): string {
  const langCode = lang as SupportedLang;
  const map = TRANSLATIONS[langCode] ?? {};
  return (map[key] as string | undefined) ?? EN[key];
}

export function makeT(lang: string) {
  return (key: StringKey) => getTranslation(lang, key);
}
