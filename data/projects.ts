export type ProjectLink = {
  label: string;
  href: string;
  external: boolean;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  contribution: string;
  technologies: string[];
  keyFacts: string[];
  keyResult: string;
  problem: string;
  approach: string;
  outcome: string;
  visual: "gesture" | "mango" | "flags";
  link?: ProjectLink;
};

export const projects: Project[] = [
  {
    id: "sign-sense",
    number: "01",
    title: "Sign Sense",
    category: "Computer Vision · Accessibility",
    description:
      "A real-time American Sign Language alphabet detector developed using a convolutional neural network and live video processing.",
    contribution: "CNN model and real-time recognition application development",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    keyFacts: [
      "Real-time webcam recognition",
      "CNN-based classification",
      "ASL alphabet dataset with 29 classes",
      "Simple prediction interface",
    ],
    keyResult: "A working prototype for live ASL alphabet recognition.",
    problem:
      "Make alphabet-level sign recognition immediate and approachable through a standard webcam.",
    approach:
      "Classify live video frames with a convolutional neural network trained on a 29-class ASL alphabet dataset.",
    outcome:
      "A simple prediction interface that recognizes signs in real time without claiming undocumented deployment or accuracy.",
    visual: "gesture",
    link: {
      label: "View repository",
      href: "https://github.com/shihabbk18/sign-sense",
      external: true,
    },
  },
  {
    id: "mango-ripeness",
    number: "02",
    title: "Explainable Mango Ripeness Classification",
    category: "AI Research · Agri-Food",
    description:
      "A hybrid Xception-LSTM model for classifying six mango ripeness stages while using Grad-CAM to visualize the image regions influencing model predictions.",
    contribution: "Research implementation and co-authoring",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "Xception",
      "LSTM",
      "Grad-CAM",
      "Transfer Learning",
    ],
    keyFacts: [
      "6,000-image dataset",
      "Six ripeness stages",
      "Hybrid Xception-LSTM architecture",
      "Grad-CAM explanations",
    ],
    keyResult: "98% accuracy reported in the publication.",
    problem:
      "Classify visually similar ripeness stages while making the model’s evidence easier to inspect.",
    approach:
      "Combine Xception feature extraction with LSTM classification, then use Grad-CAM to surface influential image regions.",
    outcome:
      "The publication reports 98% accuracy, precision, recall, and F1-score on a balanced 6,000-image dataset.",
    visual: "mango",
    link: {
      label: "View research details",
      href: "#research",
      external: false,
    },
  },
  {
    id: "fun-with-flags",
    number: "03",
    title: "Fun with Flags",
    category: "Mobile Application",
    description:
      "An Android quiz application that tests users’ knowledge of national flags while tracking scores and presenting results.",
    contribution: "Android application and database-backed quiz development",
    technologies: ["Java", "Android Studio", "MySQL"],
    keyFacts: [
      "Interactive flag quizzes",
      "Score tracking",
      "Result reporting",
      "Database-backed data handling",
    ],
    keyResult: "A complete quiz flow with feedback and result reporting.",
    problem:
      "Turn flag recognition into an interactive learning experience with clear progress and feedback.",
    approach:
      "Build a Java-based Android quiz flow backed by stored flag data and score tracking.",
    outcome:
      "An application that delivers quizzes, records scores, and presents user results; no public repository is claimed.",
    visual: "flags",
  },
];
