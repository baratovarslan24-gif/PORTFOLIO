import SectionTitle from "../section-title/SectionTitle.jsx";
import SkillsImage from "./SkillsImage";
import SkillsDiagrams from "./SkillsDiagrams";
import SkillImage from "../../assets/images/skills-img.jpg";
import { skillsContent } from "../../data/app.js";

export default function Skills() {
  return (
    <div>
      <SectionTitle text={skillsContent.title} />
      <div className="px-5.5 md:flex md:gap-22.5 md:px-0">
        <SkillsImage image={SkillImage} altText="Skills Image" />
        <SkillsDiagrams />
      </div>
    </div>
  );
}
