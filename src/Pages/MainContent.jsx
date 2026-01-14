import { useContext } from "react";
import { MyPortfolioContext } from "../store/Portfolio-store";
import AboutMe from "../Pages/AboutMe";
import TechSkills from "../Pages/Skills";
import Projects from "./Projects";

export default function MainContent() {
  const { content } = useContext(MyPortfolioContext);
  console.log(content);
  if (content === "About") return <AboutMe />;
  if (content === "Skills") return <TechSkills />;

  if (content === "Projects") return <Projects />;
  return null;
}
