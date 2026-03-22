import { Grade, LessonNode } from "@/types";

export const LANGUAGES = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
];

export const GRADES: Grade[] = [5, 6, 7, 8, 9, 10];

const CLASS5_LESSONS: LessonNode[] = [
  {
    id: "c5_l1",
    classId: 5,
    title: "What is AI?",
    subtitle: "Meet your new robot friend",
    icon: "robot",
    position: 0,
    xpReward: 50,
    steps: [
      {
        id: "c5_l1_s1",
        type: "hook",
        title: "Have you talked to AI?",
        content:
          "When you ask Siri or Google Assistant a question, you are talking to Artificial Intelligence! AI is all around us.",
      },
      {
        id: "c5_l1_s2",
        type: "concept",
        title: "What does AI mean?",
        content:
          "AI stands for Artificial Intelligence. 'Artificial' means made by humans. 'Intelligence' means the ability to think and learn. So AI is a machine that can think and learn — just like you!",
      },
      {
        id: "c5_l1_s3",
        type: "example",
        title: "AI in your life",
        content:
          "Look around! AI helps YouTube suggest your next video. AI helps Google Maps find the fastest route. Even the face unlock on your phone uses AI.",
      },
      {
        id: "c5_l1_s4",
        type: "interaction",
        title: "Can you spot AI?",
        content:
          "Think of 3 examples of AI you use every day. A video game that gets smarter, a smart speaker, or autocorrect on your phone are all AI!",
      },
      {
        id: "c5_l1_s5",
        type: "deeper",
        title: "How does AI learn?",
        content:
          "AI learns from data — lots and lots of examples. Just like you learned to recognize a cat by seeing many cats, AI learns from millions of examples fed into it.",
      },
      {
        id: "c5_l1_s6",
        type: "challenge",
        title: "Quick Challenge!",
        content:
          "Name one AI tool you've used this week. Think carefully — it could be something you use every day without realizing it's AI!",
      },
    ],
    quiz: [
      {
        id: "c5_l1_q1",
        type: "mcq",
        question: "What does the 'A' in AI stand for?",
        options: ["Amazing", "Artificial", "Automatic", "Advanced"],
        correctAnswer: 1,
        explanation:
          "AI stands for Artificial Intelligence. 'Artificial' means made by humans.",
      },
      {
        id: "c5_l1_q2",
        type: "mcq",
        question: "Which of these is an example of AI?",
        options: [
          "A calculator",
          "A light switch",
          "A voice assistant like Siri",
          "A pencil",
        ],
        correctAnswer: 2,
        explanation:
          "Voice assistants like Siri use AI to understand your questions and respond intelligently.",
      },
      {
        id: "c5_l1_q3",
        type: "mcq",
        question: "How does AI learn?",
        options: [
          "By reading books",
          "From data and examples",
          "By watching videos",
          "By talking to humans only",
        ],
        correctAnswer: 1,
        explanation:
          "AI learns from data — millions of examples that help it recognize patterns and make decisions.",
      },
    ],
  },
  {
    id: "c5_l2",
    classId: 5,
    title: "AI vs Humans",
    subtitle: "What can AI do that we cannot?",
    icon: "brain",
    position: 1,
    xpReward: 60,
    steps: [
      {
        id: "c5_l2_s1",
        type: "hook",
        title: "Could a robot beat you?",
        content:
          "A chess computer beat the world champion in 1997. But could it write a poem? Let's explore what makes AI special — and where humans still win!",
      },
      {
        id: "c5_l2_s2",
        type: "concept",
        title: "What AI does well",
        content:
          "AI can process huge amounts of data very fast. It never gets tired. It can recognize patterns, like spotting a cat in millions of photos in seconds.",
      },
      {
        id: "c5_l2_s3",
        type: "example",
        title: "Where humans shine",
        content:
          "Humans feel emotions, create art with meaning, adapt to totally new situations, and understand context. These are still things AI struggles with.",
      },
      {
        id: "c5_l2_s4",
        type: "deeper",
        title: "Working together",
        content:
          "The best outcomes happen when AI and humans work together. Doctors use AI to detect diseases faster, then apply human judgment to treat patients.",
      },
      {
        id: "c5_l2_s5",
        type: "challenge",
        title: "Human or AI?",
        content:
          "For each task, think: is AI or a human better? Writing a story, counting stars, diagnosing cancer from scans, playing games, or feeling happiness.",
      },
    ],
    quiz: [
      {
        id: "c5_l2_q1",
        type: "mcq",
        question: "Which task is AI better at than humans?",
        options: [
          "Writing poetry with deep emotion",
          "Scanning millions of images quickly",
          "Understanding complex feelings",
          "Creating original art",
        ],
        correctAnswer: 1,
        explanation:
          "AI excels at processing large amounts of data very quickly, like scanning millions of images.",
      },
      {
        id: "c5_l2_q2",
        type: "mcq",
        question: "When is the combination of AI + Human best?",
        options: [
          "Never, AI alone is always better",
          "Never, humans alone are always better",
          "When AI handles data and humans apply judgment",
          "Only in video games",
        ],
        correctAnswer: 2,
        explanation:
          "AI + Human teams are powerful: AI processes data fast, and humans apply wisdom, ethics, and context.",
      },
    ],
  },
  {
    id: "c5_l3",
    classId: 5,
    title: "Types of AI",
    subtitle: "Narrow AI vs General AI",
    icon: "layers",
    position: 2,
    xpReward: 70,
    steps: [
      {
        id: "c5_l3_s1",
        type: "hook",
        title: "One job vs all jobs",
        content:
          "Imagine a chef who can only make pizza — excellent pizza, but nothing else. That's Narrow AI. Now imagine a person who can cook, drive, teach, and dance. That's the dream of General AI!",
      },
      {
        id: "c5_l3_s2",
        type: "concept",
        title: "Narrow AI",
        content:
          "Most AI today is Narrow AI. It does ONE thing very well. Face recognition, language translation, chess — each is a separate Narrow AI. It cannot do anything outside its specialty.",
      },
      {
        id: "c5_l3_s3",
        type: "example",
        title: "Real-world Narrow AI",
        content:
          "Google Translate is Narrow AI — great at translation but cannot drive a car. AlphaGo is Narrow AI — best at the game Go but cannot have a conversation.",
      },
      {
        id: "c5_l3_s4",
        type: "deeper",
        title: "General AI (AGI)",
        content:
          "Artificial General Intelligence (AGI) would match human intelligence across ALL tasks. Scientists are still working on this. We are not there yet!",
      },
    ],
    quiz: [
      {
        id: "c5_l3_q1",
        type: "mcq",
        question: "Which is an example of Narrow AI?",
        options: [
          "A robot that can do everything a human can",
          "Google Translate, which only translates language",
          "An AI with human-level intelligence in all areas",
          "A robot with feelings and emotions",
        ],
        correctAnswer: 1,
        explanation:
          "Narrow AI is specialized in one task. Google Translate is great at translation but cannot do other things.",
      },
    ],
  },
];

const CLASS7_LESSONS: LessonNode[] = [
  {
    id: "c7_l1",
    classId: 7,
    title: "Types of Data",
    subtitle: "The building blocks of AI",
    icon: "database",
    position: 0,
    xpReward: 70,
    steps: [
      {
        id: "c7_l1_s1",
        type: "hook",
        title: "AI is hungry for data",
        content:
          "Every AI system needs data to learn. But not all data is the same. Your name is different from your age, which is different from your photo. Let's break down the types.",
      },
      {
        id: "c7_l1_s2",
        type: "concept",
        title: "Structured vs Unstructured",
        content:
          "Structured data fits neatly in rows and columns — like a school attendance register. Unstructured data is messy and varied — like social media posts, audio recordings, or videos.",
      },
      {
        id: "c7_l1_s3",
        type: "example",
        title: "Data types in the real world",
        content:
          "Numerical: temperature 37°C, speed 60 km/h. Categorical: subject = 'Maths', gender = 'Female'. Text: a WhatsApp message. Image: your selfie. Each type needs different AI techniques.",
      },
      {
        id: "c7_l1_s4",
        type: "interaction",
        title: "Classify this data",
        content:
          "Label each as Structured or Unstructured: a) Student marks spreadsheet, b) A news article, c) A bank transaction record, d) A voice recording, e) A weather dataset.",
      },
      {
        id: "c7_l1_s5",
        type: "deeper",
        title: "Why data type matters",
        content:
          "You use different tools for different materials. AI works the same way — image data needs Convolutional Neural Networks, text data needs NLP models, tabular data often uses Decision Trees.",
      },
      {
        id: "c7_l1_s6",
        type: "challenge",
        title: "Data around you",
        content:
          "List 5 pieces of data generated by your school in one day. Classify each as structured or unstructured. Which type does your school generate more of?",
      },
    ],
    quiz: [
      {
        id: "c7_l1_q1",
        type: "mcq",
        question: "Which of these is an example of structured data?",
        options: [
          "A voice message",
          "A student report card in a spreadsheet",
          "A news article",
          "A social media post with emojis",
        ],
        correctAnswer: 1,
        explanation:
          "Structured data fits neatly in rows and columns, like a spreadsheet. A student report card is a perfect example.",
      },
      {
        id: "c7_l1_q2",
        type: "mcq",
        question: "Why does data type matter in AI?",
        options: [
          "It doesn't — all AI can handle any data",
          "Different data types need different AI techniques and models",
          "Only numerical data can be used by AI",
          "Structured data is always better than unstructured",
        ],
        correctAnswer: 1,
        explanation:
          "Different data types require different AI approaches — images use CNNs, text uses NLP, tabular data uses tree-based models.",
      },
      {
        id: "c7_l1_q3",
        type: "mcq",
        question: "Which of these is unstructured data?",
        options: [
          "Temperature readings every hour",
          "Bank transaction records",
          "A voice recording of a lecture",
          "Student attendance register",
        ],
        correctAnswer: 2,
        explanation:
          "A voice recording is unstructured data — it cannot be neatly placed in rows and columns without processing.",
      },
    ],
  },
  {
    id: "c7_l2",
    classId: 7,
    title: "Machine Learning Basics",
    subtitle: "Teaching machines with examples",
    icon: "cpu",
    position: 1,
    xpReward: 80,
    steps: [
      {
        id: "c7_l2_s1",
        type: "hook",
        title: "Learning without being told",
        content:
          "You can recognize a dog without someone programming you with dog rules. You just saw many dogs and learned. Machine Learning works the same way!",
      },
      {
        id: "c7_l2_s2",
        type: "concept",
        title: "What is Machine Learning?",
        content:
          "Machine Learning (ML) is when a computer learns from data instead of being given specific rules. The more data it sees, the better it gets.",
      },
      {
        id: "c7_l2_s3",
        type: "example",
        title: "Spam detection with ML",
        content:
          "Instead of writing rules like 'block if contains Free Money', we show the ML model thousands of spam vs non-spam emails. It figures out the patterns itself!",
      },
      {
        id: "c7_l2_s4",
        type: "deeper",
        title: "Training vs Testing",
        content:
          "We split data into training (to learn) and testing (to check). Like studying from a textbook (training) then taking an exam (testing).",
      },
    ],
    quiz: [
      {
        id: "c7_l2_q1",
        type: "mcq",
        question: "In Machine Learning, what does 'training data' mean?",
        options: [
          "Data used to create a gym schedule",
          "Examples given to a model to learn from",
          "Data about sports and athletics",
          "Instructions written by programmers",
        ],
        correctAnswer: 1,
        explanation:
          "Training data is the set of examples we give a machine learning model so it can learn patterns.",
      },
    ],
  },
];

const CLASS9_LESSONS: LessonNode[] = [
  {
    id: "c9_l1",
    classId: 9,
    title: "Algorithms",
    subtitle: "Step-by-step problem solving",
    icon: "code",
    position: 0,
    xpReward: 90,
    steps: [
      {
        id: "c9_l1_s1",
        type: "hook",
        title: "The recipe connection",
        content:
          "A recipe is an algorithm. Precise steps, in a specific order, that produce a result. Computer algorithms work the same way — except machines follow them at lightning speed.",
      },
      {
        id: "c9_l1_s2",
        type: "concept",
        title: "What is an Algorithm?",
        content:
          "An algorithm is a finite set of well-defined instructions to solve a problem. Key properties: finite (ends), definite (clear steps), effective (produces a result), input/output.",
      },
      {
        id: "c9_l1_s3",
        type: "example",
        title: "Sorting algorithm",
        content:
          "Bubble Sort: compare adjacent numbers, swap if out of order, repeat until sorted. Simple but shows how algorithms give machines a systematic approach.",
      },
      {
        id: "c9_l1_s4",
        type: "interaction",
        title: "Algorithm analysis",
        content:
          "Think about efficiency: finding a word in a dictionary by checking every page = linear search. Using the alphabetical order to jump ahead = binary search. Binary is much faster!",
      },
      {
        id: "c9_l1_s5",
        type: "deeper",
        title: "AI algorithms",
        content:
          "AI uses complex algorithms like gradient descent (to minimize error), backpropagation (to train neural networks), and Dijkstra's (shortest path in maps).",
      },
      {
        id: "c9_l1_s6",
        type: "challenge",
        title: "Define it precisely",
        content:
          "Write a 3-step algorithm to find the largest number in a list. Hint: Start with the first number, compare with each next number, update if larger.",
      },
    ],
    quiz: [
      {
        id: "c9_l1_q1",
        type: "mcq",
        question: "What must every algorithm eventually do?",
        options: [
          "Run forever",
          "Terminate and produce a result",
          "Use the internet",
          "Require user input",
        ],
        correctAnswer: 1,
        explanation:
          "A valid algorithm must be finite — it must end and produce some output or result.",
      },
      {
        id: "c9_l1_q2",
        type: "mcq",
        question: "Binary search is better than linear search because:",
        options: [
          "It checks every element",
          "It uses half the data each step, making it faster",
          "It requires sorted data only",
          "It works on unsorted data",
        ],
        correctAnswer: 1,
        explanation:
          "Binary search divides the search space in half each time, making it much faster than checking every element.",
      },
      {
        id: "c9_l1_q3",
        type: "mcq",
        question: "Which algorithm is used to train neural networks?",
        options: [
          "Bubble Sort",
          "Binary Search",
          "Backpropagation",
          "Merge Sort",
        ],
        correctAnswer: 2,
        explanation:
          "Backpropagation is the key algorithm used to train neural networks by adjusting weights based on errors.",
      },
    ],
  },
  {
    id: "c9_l2",
    classId: 9,
    title: "Neural Networks",
    subtitle: "The brain-inspired architecture",
    icon: "zap",
    position: 1,
    xpReward: 100,
    steps: [
      {
        id: "c9_l2_s1",
        type: "hook",
        title: "Inspired by biology",
        content:
          "Your brain has ~86 billion neurons, each connected to thousands of others. When you learn something, connections strengthen. Neural networks in AI mimic this structure!",
      },
      {
        id: "c9_l2_s2",
        type: "concept",
        title: "Layers in a Neural Network",
        content:
          "A neural network has layers: Input layer (receives data), Hidden layers (process it), Output layer (gives result). Data flows forward, errors flow backward during training.",
      },
      {
        id: "c9_l2_s3",
        type: "example",
        title: "Image recognition",
        content:
          "For recognizing handwritten digits: Input = pixel values, Hidden layers = detect edges, curves, shapes, Output = which digit (0-9).",
      },
      {
        id: "c9_l2_s4",
        type: "deeper",
        title: "Activation functions",
        content:
          "Each neuron applies an activation function (like ReLU) to decide whether to 'fire'. This adds non-linearity, allowing the network to learn complex patterns.",
      },
    ],
    quiz: [
      {
        id: "c9_l2_q1",
        type: "mcq",
        question: "What does the 'hidden layer' in a neural network do?",
        options: [
          "Hides the input from the output",
          "Processes and transforms the data",
          "Stores the final answer",
          "Connects to the internet",
        ],
        correctAnswer: 1,
        explanation:
          "Hidden layers process and transform the input data through weighted connections and activation functions.",
      },
    ],
  },
];

const CLASS10_LESSONS: LessonNode[] = [
  {
    id: "c10_l1",
    classId: 10,
    title: "AI Bias",
    subtitle: "When AI makes unfair decisions",
    icon: "alert-triangle",
    position: 0,
    xpReward: 100,
    steps: [
      {
        id: "c10_l1_s1",
        type: "hook",
        title: "A biased mirror",
        content:
          "If you train a hiring AI only on past employees — who were mostly men — it might unfairly prefer male applicants. AI learns from data, and biased data creates biased AI.",
      },
      {
        id: "c10_l1_s2",
        type: "concept",
        title: "What is AI Bias?",
        content:
          "AI Bias occurs when an AI system produces results that are systematically prejudiced due to flawed assumptions in the training data or algorithm design.",
      },
      {
        id: "c10_l1_s3",
        type: "example",
        title: "Real-world bias examples",
        content:
          "Facial recognition systems had much higher error rates for darker-skinned faces because training datasets were not diverse. This led to wrongful arrests.",
      },
      {
        id: "c10_l1_s4",
        type: "interaction",
        title: "Classify the strategy",
        content:
          "Good strategy or bad strategy? Think about each: Using diverse training data ✓, Testing AI on different demographics ✓, Training on 100 years of historical hiring data without review ✗",
      },
      {
        id: "c10_l1_s5",
        type: "deeper",
        title: "How to reduce bias",
        content:
          "Solutions: Diverse training data, bias audits, explainable AI, diverse development teams, and continuous monitoring after deployment.",
      },
      {
        id: "c10_l1_s6",
        type: "challenge",
        title: "Ethics challenge",
        content:
          "A hospital's AI predicts patient readmission risk. It was trained mainly on data from one city. What could go wrong? How would you fix it?",
      },
    ],
    quiz: [
      {
        id: "c10_l1_q1",
        type: "swipe",
        question: "Classify each as a GOOD or BAD AI strategy",
        options: [
          "Training on diverse, representative data",
          "Using only historical data without questioning it",
          "Conducting regular bias audits",
          "Having only one type of person on the AI team",
          "Testing AI across different demographics",
        ],
        correctAnswer: "good,bad,good,bad,good",
        explanation:
          "Good AI strategies involve diversity, testing, and auditing. Bad strategies ignore bias and lack diversity.",
      },
      {
        id: "c10_l1_q2",
        type: "mcq",
        question: "What is the main cause of AI bias?",
        options: [
          "Computers being evil",
          "Flawed or unrepresentative training data",
          "Programming errors only",
          "AI systems being too smart",
        ],
        correctAnswer: 1,
        explanation:
          "AI bias mainly comes from training data that does not accurately represent the real world diversity.",
      },
      {
        id: "c10_l1_q3",
        type: "mcq",
        question: "Which action helps reduce AI bias?",
        options: [
          "Using the smallest dataset possible",
          "Never testing on new demographics",
          "Conducting diversity audits of training data",
          "Allowing AI to make all decisions without review",
        ],
        correctAnswer: 2,
        explanation:
          "Conducting diversity audits helps identify gaps in training data that could lead to biased AI outcomes.",
      },
    ],
  },
  {
    id: "c10_l2",
    classId: 10,
    title: "AI Ethics",
    subtitle: "Building responsible AI",
    icon: "shield",
    position: 1,
    xpReward: 110,
    steps: [
      {
        id: "c10_l2_s1",
        type: "hook",
        title: "With great power...",
        content:
          "AI can diagnose diseases, detect crimes, and shape news feeds — but who decides if it is fair? AI ethics is the field asking: how should we build AI responsibly?",
      },
      {
        id: "c10_l2_s2",
        type: "concept",
        title: "Core AI Ethics principles",
        content:
          "Key principles: Fairness (no discrimination), Transparency (explain decisions), Privacy (protect personal data), Accountability (who is responsible for mistakes), Safety.",
      },
      {
        id: "c10_l2_s3",
        type: "example",
        title: "Facial recognition in public",
        content:
          "Should police use facial recognition in public spaces? Arguments: improves safety (pro) vs privacy violation and bias risks (con). Ethics requires weighing both sides.",
      },
      {
        id: "c10_l2_s4",
        type: "deeper",
        title: "Explainable AI",
        content:
          "If an AI rejects your loan, you deserve to know why. Explainable AI (XAI) ensures AI decisions can be understood and challenged. This is increasingly required by law.",
      },
    ],
    quiz: [
      {
        id: "c10_l2_q1",
        type: "mcq",
        question: "What does 'Explainable AI' mean?",
        options: [
          "AI that explains jokes",
          "AI systems that can justify and explain their decisions",
          "AI that writes explanations for students",
          "A simple AI that is easy to program",
        ],
        correctAnswer: 1,
        explanation:
          "Explainable AI (XAI) refers to AI systems that can provide understandable reasons for their decisions.",
      },
    ],
  },
];

const CLASS6_LESSONS: LessonNode[] = [
  {
    id: "c6_l1",
    classId: 6,
    title: "What is a Pattern?",
    subtitle: "Discovering patterns around you",
    icon: "grid",
    position: 0,
    xpReward: 60,
    steps: [
      {
        id: "c6_l1_s1",
        type: "hook",
        title: "Patterns are everywhere!",
        content:
          "The spiral of a sunflower, stripes on a zebra, tides of the ocean — nature is full of patterns. AI is the world's greatest pattern finder. Can you spot patterns too?",
      },
      {
        id: "c6_l1_s2",
        type: "concept",
        title: "What is a pattern?",
        content:
          "A pattern is something that repeats in a predictable way. Patterns can be in shapes, numbers, sounds, or behavior. When AI learns, it is essentially finding and memorizing patterns.",
      },
      {
        id: "c6_l1_s3",
        type: "example",
        title: "Number patterns",
        content:
          "Look at this: 2, 4, 8, 16, 32... What comes next? You noticed the pattern — each number doubles! AI finds patterns like this in massive datasets with millions of examples.",
      },
      {
        id: "c6_l1_s4",
        type: "interaction",
        title: "Find the odd one out",
        content:
          "Apple, Mango, Chair, Banana — which doesn't belong? You recognized the pattern (fruits vs furniture) instantly. AI learns to do exactly this with any type of data.",
      },
      {
        id: "c6_l1_s5",
        type: "deeper",
        title: "Patterns in AI",
        content:
          "Spotify finds patterns in songs you like and recommends similar ones. Netflix finds patterns in what you watch. Doctors use AI to find patterns in X-rays that humans might miss.",
      },
      {
        id: "c6_l1_s6",
        type: "challenge",
        title: "Your turn!",
        content:
          "Look at your class timetable. Can you find a pattern? What about the sequence 1, 1, 2, 3, 5, 8, 13? This is the famous Fibonacci sequence — found in nature everywhere!",
      },
    ],
    quiz: [
      {
        id: "c6_l1_q1",
        type: "mcq",
        question: "What is AI fundamentally doing when it learns?",
        options: [
          "Following rules written by programmers",
          "Finding and memorizing patterns in data",
          "Copying what humans do exactly",
          "Searching the internet for answers",
        ],
        correctAnswer: 1,
        explanation:
          "AI learns by finding patterns in large amounts of data — just like you find the pattern in a number sequence.",
      },
      {
        id: "c6_l1_q2",
        type: "mcq",
        question: "What comes next in the pattern: 3, 6, 12, 24, ___?",
        options: ["36", "48", "30", "26"],
        correctAnswer: 1,
        explanation:
          "The pattern is multiplying by 2 each time: 3×2=6, 6×2=12, 12×2=24, 24×2=48.",
      },
    ],
  },
  {
    id: "c6_l2",
    classId: 6,
    title: "Data and Patterns",
    subtitle: "Finding meaning in numbers",
    icon: "bar-chart",
    position: 1,
    xpReward: 65,
    steps: [
      {
        id: "c6_l2_s1",
        type: "hook",
        title: "Patterns everywhere",
        content:
          "Nature loves patterns — the spiral of a sunflower, waves on a beach. AI is a master pattern finder. It can spot patterns in data that humans would miss!",
      },
      {
        id: "c6_l2_s2",
        type: "concept",
        title: "What is data?",
        content:
          "Data is any recorded information: temperatures, test scores, photos, or words. Raw data alone is not useful. We need to find patterns to make it meaningful.",
      },
      {
        id: "c6_l2_s3",
        type: "example",
        title: "Weather prediction",
        content:
          "Weather data: temperature, humidity, wind for 100 years. AI finds patterns like 'when humidity is high AND pressure drops → rain likely'. Better data = better predictions!",
      },
      {
        id: "c6_l2_s4",
        type: "challenge",
        title: "Find the pattern",
        content:
          "Look at this sequence: 2, 4, 8, 16, 32... What comes next? You just did what AI does — found a pattern (doubling each time) and used it to predict!",
      },
    ],
    quiz: [
      {
        id: "c6_l2_q1",
        type: "mcq",
        question: "What does 'data' mean in the context of AI?",
        options: [
          "Only numbers and statistics",
          "Any recorded information (text, images, numbers, etc.)",
          "Only digital files",
          "Personal information only",
        ],
        correctAnswer: 1,
        explanation:
          "Data in AI context includes any recorded information — text, images, numbers, audio, and more.",
      },
    ],
  },
];

const CLASS8_LESSONS: LessonNode[] = [
  {
    id: "c8_l1",
    classId: 8,
    title: "The ML Pipeline",
    subtitle: "How machines learn step by step",
    icon: "activity",
    position: 0,
    xpReward: 85,
    steps: [
      {
        id: "c8_l1_s1",
        type: "hook",
        title: "Building AI is like cooking",
        content:
          "A great dish needs the right ingredients, a clear recipe, and careful execution. Machine Learning works the same way — data is the ingredient, the pipeline is the recipe. Let's explore it.",
      },
      {
        id: "c8_l1_s2",
        type: "concept",
        title: "What is the ML Pipeline?",
        content:
          "The ML Pipeline is the complete sequence of steps to build a machine learning model: Collect Data → Clean Data → Choose Model → Train → Evaluate → Deploy. Each step is critical.",
      },
      {
        id: "c8_l1_s3",
        type: "example",
        title: "Each step in action",
        content:
          "Step 1 – Collect: gather student test score data. Step 2 – Clean: remove errors, fill missing values. Step 3 – Train: feed data to a model. Step 4 – Evaluate: test accuracy. Step 5 – Deploy: use it!",
      },
      {
        id: "c8_l1_s4",
        type: "deeper",
        title: "The most critical step",
        content:
          "Garbage in, garbage out. If your data is dirty or biased, even the best model will fail. Data cleaning and preparation typically takes 70-80% of a data scientist's time.",
      },
      {
        id: "c8_l1_s5",
        type: "interaction",
        title: "Order the pipeline",
        content:
          "Put these steps in the correct ML Pipeline order: Train the model / Deploy to users / Collect raw data / Evaluate accuracy / Clean and prepare data. Think carefully before moving on.",
      },
      {
        id: "c8_l1_s6",
        type: "challenge",
        title: "Design your own",
        content:
          "You want to build an AI that predicts if a student will pass an exam. Design the ML Pipeline: What data will you collect? How will you clean it? How will you know if it works?",
      },
    ],
    quiz: [
      {
        id: "c8_l1_q1",
        type: "mcq",
        question: "What is the correct order of the ML Pipeline?",
        options: [
          "Train → Collect → Clean → Evaluate → Deploy",
          "Collect → Clean → Train → Evaluate → Deploy",
          "Deploy → Train → Collect → Clean → Evaluate",
          "Clean → Deploy → Train → Collect → Evaluate",
        ],
        correctAnswer: 1,
        explanation:
          "The correct ML Pipeline order is: Collect Data → Clean Data → Train Model → Evaluate → Deploy.",
      },
      {
        id: "c8_l1_q2",
        type: "mcq",
        question: "Why is data cleaning the most time-consuming step?",
        options: [
          "It requires expensive hardware",
          "Real-world data is messy, incomplete, and often biased",
          "Models cannot be trained without cleaned data",
          "Cleaning requires programming knowledge only",
        ],
        correctAnswer: 1,
        explanation:
          "Real-world data has errors, missing values, and inconsistencies. Cleaning it properly is essential for a good model.",
      },
    ],
  },
];

export const CURRICULUM: Record<Grade, LessonNode[]> = {
  5: CLASS5_LESSONS,
  6: CLASS6_LESSONS,
  7: CLASS7_LESSONS,
  8: CLASS8_LESSONS,
  9: CLASS9_LESSONS,
  10: CLASS10_LESSONS,
};

export const CLASS_CONFIG: Record<number, {
  accent: string;
  accentBg: string;
  tone: string;
  tag: string;
  firstLesson: string;
}> = {
  5: { accent: "#22C55E", accentBg: "#DCFCE7", tone: "Playful & Simple", tag: "Explorer", firstLesson: "What is AI?" },
  6: { accent: "#3B82F6", accentBg: "#DBEAFE", tone: "Exploratory & Friendly", tag: "Discoverer", firstLesson: "What is a Pattern?" },
  7: { accent: "#8B5CF6", accentBg: "#EDE9FE", tone: "Structured & Clear", tag: "Builder", firstLesson: "Types of Data" },
  8: { accent: "#F59E0B", accentBg: "#FEF3C7", tone: "Analytical & Clean", tag: "Analyst", firstLesson: "The ML Pipeline" },
  9: { accent: "#EF4444", accentBg: "#FEE2E2", tone: "Technical & Focused", tag: "Thinker", firstLesson: "What is an Algorithm?" },
  10: { accent: "#0EA5E9", accentBg: "#E0F2FE", tone: "Mature & Ethical", tag: "Ethicist", firstLesson: "What is AI Bias?" },
};

export const DEFAULT_USER_PROFILE = {
  language: "en",
  grade: null,
  name: "Learner",
  streakDays: 0,
  lastActiveDate: "",
  totalXP: 0,
  completedLessons: [] as string[],
  quizScores: {} as Record<string, number>,
  dailyGoalProgress: 0,
  dailyGoalTarget: 3,
  onboardingComplete: false,
};
