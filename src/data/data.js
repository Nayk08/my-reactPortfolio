import fb from "../assets/icons8-facebook-logo-50.png";
import github from "../assets/icons8-github-logo-50.png";
import linkedIn from "../assets/icons8-linkedin-50.png";
import Bryzahcov from "../assets/dentist.jpg";
import TravelEase from "../assets/travelEase.jpg";

export const navBarData = [
  {
    id: 2,
    title: "About",
  },
  {
    id: 3,
    title: "Skills",
  },
  {
    id: 4,
    title: "Projects",
  },
];

export const Myabout = [
  {
    id: 1,
    icon: "💻",
    description: "Web Developer",
  },
  {
    id: 2,
    icon: "🎓",
    description: "IT Student",
  },
  {
    id: 3,
    icon: "⚛️",
    description: "Aspiring React.js Developer",
  },
  {
    id: 4,
    icon: "🚀",
    description: "Actively Upskilling",
  },
];

export const email = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/kyanvillarin/",
    icons: linkedIn,
  },
  {
    id: 2,
    link: " https://github.com/Nayk08",
    icons: github,
  },
  {
    id: 3,
    link: "https://www.facebook.com/kyan.villarin.3",
    icons: fb,
  },
];

export const projects = [
  {
    id: 1,
    image: TravelEase,
    title: "Travel Ease",
    githubUrl: "https://github.com/Nayk08/TechnoSystem",
    technologyUsed: ["C#", "SQL", "Winform"],
    description:
      "A travel management application that helps users plan trips, manage itineraries, and track expenses.",
  },

  {
    id: 2,
    image: Bryzahcov,
    title: "Bryzahcov Dental System",
    githubUrl: "https://github.com/Nayk08/MiniCapstone_Scheduling",
    technologyUsed: ["C#", "SQL", "Winform"],
    description:
      "A comprehensive dental clinic management system with patient records, appointment scheduling, and billing modules.",
  },
];
