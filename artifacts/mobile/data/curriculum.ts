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
    title: "Decision Trees",
    subtitle: "How machines make choices",
    icon: "git-branch",
    position: 0,
    xpReward: 70,
    steps: [
      {
        id: "c7_l1_s1",
        type: "hook",
        title: "Should you carry an umbrella?",
        content:
          "Every morning you make decisions. Is it cloudy? → Yes → Will it rain? → Yes → Take umbrella! This tree of decisions is exactly how a Decision Tree algorithm works.",
      },
      {
        id: "c7_l1_s2",
        type: "concept",
        title: "What is a Decision Tree?",
        content:
          "A Decision Tree is a flowchart-like model. At each node, it asks a yes/no question about the data. Based on answers, it follows a path until it reaches a decision (leaf node).",
      },
      {
        id: "c7_l1_s3",
        type: "example",
        title: "Email spam filter",
        content:
          "Does the email contain 'Free money'? → Yes → Does it have suspicious links? → Yes → SPAM! Decision Trees help email apps decide which emails are spam.",
      },
      {
        id: "c7_l1_s4",
        type: "interaction",
        title: "Build your own tree",
        content:
          "Try this: Create a decision tree to decide what to eat for lunch. First question: Are you very hungry? Second: Do you have time to cook? Follow the branches to your answer!",
      },
      {
        id: "c7_l1_s5",
        type: "deeper",
        title: "How the tree learns",
        content:
          "The computer learns by looking at lots of past data. It finds which questions split the data most cleanly — like sorting balls by color before size.",
      },
      {
        id: "c7_l1_s6",
        type: "challenge",
        title: "Challenge time!",
        content:
          "Draw a decision tree with 3 levels to classify animals. What questions would you ask? (Does it fly? Does it have fur? Does it live in water?)",
      },
    ],
    quiz: [
      {
        id: "c7_l1_q1",
        type: "mcq",
        question: "What is a node in a Decision Tree?",
        options: [
          "A final answer",
          "A question that splits data",
          "A type of data",
          "A machine learning model",
        ],
        correctAnswer: 1,
        explanation:
          "A node in a Decision Tree is a point where a question is asked to split the data into branches.",
      },
      {
        id: "c7_l1_q2",
        type: "mcq",
        question: "Decision Trees are useful for which task?",
        options: [
          "Generating music",
          "Classification and decisions",
          "Making images",
          "Translating languages",
        ],
        correctAnswer: 1,
        explanation:
          "Decision Trees are great for classification problems — like deciding if an email is spam or not spam.",
      },
      {
        id: "c7_l1_q3",
        type: "mcq",
        question: "What is a 'leaf node' in a Decision Tree?",
        options: [
          "The starting question",
          "A plant reference",
          "The final decision or output",
          "A branch with no questions",
        ],
        correctAnswer: 2,
        explanation:
          "A leaf node is the end of a path in the Decision Tree — it gives the final answer or classification.",
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
    title: "How Computers Think",
    subtitle: "Binary and data basics",
    icon: "binary",
    position: 0,
    xpReward: 60,
    steps: [
      {
        id: "c6_l1_s1",
        type: "hook",
        title: "Everything is 0s and 1s",
        content:
          "Computers only understand two things: ON (1) and OFF (0). All your photos, videos, music, and games are stored as billions of these 1s and 0s!",
      },
      {
        id: "c6_l1_s2",
        type: "concept",
        title: "Binary number system",
        content:
          "Binary is base-2: only 0 and 1. The number 5 in binary is 101. Each digit position represents a power of 2: 4+0+1=5.",
      },
      {
        id: "c6_l1_s3",
        type: "example",
        title: "From bits to meaning",
        content:
          "8 bits = 1 byte. A single byte can represent 256 different values (0-255). Your photo is millions of pixels, each pixel's color encoded in bytes.",
      },
      {
        id: "c6_l1_s4",
        type: "deeper",
        title: "How AI uses data",
        content:
          "AI processes all this binary data to find patterns. When you speak, your voice is converted to millions of numbers, and AI finds patterns to understand your words.",
      },
    ],
    quiz: [
      {
        id: "c6_l1_q1",
        type: "mcq",
        question: "How many digits does the binary number system use?",
        options: ["10 (0-9)", "2 (0 and 1)", "26 (A-Z)", "16 (0-F)"],
        correctAnswer: 1,
        explanation: "Binary (base-2) only uses two digits: 0 and 1.",
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
    title: "Natural Language Processing",
    subtitle: "Teaching AI to understand language",
    icon: "message-circle",
    position: 0,
    xpReward: 85,
    steps: [
      {
        id: "c8_l1_s1",
        type: "hook",
        title: "Talking to machines",
        content:
          "ChatGPT, Google Assistant, Amazon Alexa — all powered by Natural Language Processing. How does a machine understand the nuances of human language?",
      },
      {
        id: "c8_l1_s2",
        type: "concept",
        title: "What is NLP?",
        content:
          "Natural Language Processing (NLP) is a branch of AI that helps computers understand, interpret, and generate human language — both text and speech.",
      },
      {
        id: "c8_l1_s3",
        type: "example",
        title: "NLP applications",
        content:
          "Translation apps, spam detection, sentiment analysis (happy/sad review?), chatbots, auto-complete on your phone — all NLP in action daily.",
      },
      {
        id: "c8_l1_s4",
        type: "deeper",
        title: "Why language is hard for AI",
        content:
          "Language is ambiguous. 'I saw the man with the telescope' — who has the telescope? Context, sarcasm, idioms, and cultural references make language incredibly complex.",
      },
      {
        id: "c8_l1_s5",
        type: "challenge",
        title: "Ambiguity challenge",
        content:
          "Find the double meaning: 'Time flies like an arrow; fruit flies like a banana.' How would a computer struggle with this? How would humans understand it?",
      },
    ],
    quiz: [
      {
        id: "c8_l1_q1",
        type: "mcq",
        question: "What does NLP stand for?",
        options: [
          "New Language Program",
          "Natural Language Processing",
          "Numerical Logic Processing",
          "Network Language Protocol",
        ],
        correctAnswer: 1,
        explanation:
          "NLP stands for Natural Language Processing — the AI field focused on understanding human language.",
      },
      {
        id: "c8_l1_q2",
        type: "mcq",
        question: "Which of these is an NLP application?",
        options: [
          "Self-driving car navigation",
          "Image editing software",
          "Sentiment analysis of reviews",
          "Video game graphics",
        ],
        correctAnswer: 2,
        explanation:
          "Sentiment analysis — determining if text is positive, negative, or neutral — is a classic NLP application.",
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
