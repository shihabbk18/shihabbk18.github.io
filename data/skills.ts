export type SkillGroup = {
  title: string;
  index: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    index: "01",
    skills: ["Python", "Java", "C", "C++"],
  },
  {
    title: "AI and Deep Learning",
    index: "02",
    skills: [
      "Convolutional Neural Networks",
      "Xception",
      "LSTM",
      "Hybrid CNN-RNN Models",
      "Transfer Learning",
      "Image Classification",
      "Explainable AI",
      "Grad-CAM",
    ],
  },
  {
    title: "Frameworks and Tools",
    index: "03",
    skills: [
      "TensorFlow",
      "Keras",
      "Git",
      "GitHub",
      "OpenCV",
      "MySQL",
      "Android Studio",
    ],
  },
  {
    title: "Web",
    index: "04",
    skills: ["HTML", "CSS"],
  },
];
