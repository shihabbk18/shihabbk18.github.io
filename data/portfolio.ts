export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL ?? "https://shihabbk18.github.io/Portfolio").replace(
    /\/$/,
    "",
  );

export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function withBasePath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

export const identity = {
  name: "Shihab Bin Kader",
  monogram: "SBK",
  title: "Aspiring AI Researcher & Computer Vision Developer",
  location: "Chattogram, Bangladesh",
  email: "shihabbk18@gmail.com",
  github: "https://github.com/shihabbk18",
  cv: withBasePath("/Shihab-Bin-Kader-CV.pdf"),
} as const;

export const navigationItems = [
  { label: "About", href: "#about", section: "about" },
  { label: "Work", href: "#work", section: "work" },
  { label: "Research", href: "#research", section: "research" },
  { label: "Skills", href: "#skills", section: "skills" },
  { label: "Contact", href: "#contact", section: "contact" },
] as const;

export const hero = {
  eyebrow: "Open to graduate research opportunities",
  heading: "Building intelligent systems that can see, understand, and explain.",
  description:
    "I am a Computer Science and Engineering graduate interested in computer vision, deep learning, explainable AI, and multimodal learning. I enjoy building practical AI systems that address meaningful real-world problems.",
  orbitLabels: ["Computer Vision", "Explainable AI", "Multimodal Learning"],
} as const;

export const about = {
  copy: "I am a Computer Science and Engineering graduate from East Delta University with a strong interest in computer vision, deep learning, and explainable artificial intelligence. My work has focused on applying AI to real-world problems, including mango ripeness classification and real-time sign-language recognition. I am particularly interested in developing reliable and interpretable systems that can support agriculture, healthcare, and other socially meaningful applications.",
  facts: [
    "Based in Chattogram, Bangladesh",
    "B.Sc. in Computer Science and Engineering",
    "Interested in graduate research opportunities",
  ],
} as const;

export const focusAreas = [
  {
    index: "01",
    title: "Computer Vision",
    short: "Seeing",
    description:
      "Image classification, visual feature extraction, real-time recognition, and transfer learning.",
  },
  {
    index: "02",
    title: "Explainable AI",
    short: "Explaining",
    description:
      "Understanding model decisions through techniques such as Grad-CAM and interpretable visual evidence.",
  },
  {
    index: "03",
    title: "Multimodal Learning",
    short: "Connecting",
    description:
      "Combining visual, textual, and structured data to build more context-aware AI systems.",
  },
  {
    index: "04",
    title: "AI for Real-World Impact",
    short: "Applying",
    description:
      "Developing practical systems for agriculture, accessibility, biomedical applications, and intelligent decision support.",
  },
] as const;

export const research = {
  title:
    "Hybrid Xception-LSTM Model for Explainable Mango Ripeness Classification Using Grad-CAM",
  conference:
    "2025 IEEE 4th International Conference on Robotics, Automation, Artificial Intelligence and Internet-of-Things",
  role: "Co-author",
  summary:
    "The study developed a hybrid Xception-LSTM model to classify mangoes into six ripeness stages using a balanced dataset of 6,000 images. Grad-CAM visualizations were used to examine the image regions that contributed to the model’s decisions.",
  result: "98% accuracy, precision, recall, and F1-score.",
  methodology: [
    "Images",
    "Preprocessing",
    "Xception Features",
    "LSTM",
    "Classification",
    "Grad-CAM",
  ],
} as const;

export const education = {
  university: "East Delta University",
  degree: "Bachelor of Science in Computer Science and Engineering",
  period: "September 2020 – January 2025",
  cgpa: "3.13 / 4.00",
  thesis: "Mango Ripeness Detection Using Deep Learning with Explainable AI",
} as const;

export const recognition = [
  "Dean’s List recognition",
  "East Delta University academic scholarship",
  "IELTS Academic overall band score: 7.5",
] as const;
