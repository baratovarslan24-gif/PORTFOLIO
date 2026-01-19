import SectionTitle from "../section-title/SectionTitle.jsx";
import AboutText from "./AboutText.jsx";
import { aboutContent } from "../../data/app.js";

export default function About() {
  return (
    <div className="mt-12.5 md:mt-35 mb-12.5 md:mb-35">
      <SectionTitle text={aboutContent.title} />
      <AboutText />
    </div>
  );
}
