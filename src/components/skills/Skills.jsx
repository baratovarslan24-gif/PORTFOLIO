import SkillsTitle from "./SkillsTitle";
import SkillsImage from "./SkillsImage";
import SkillsDiagrams from "./SkillsDiagrams";
import SkillImage from "../../assets/images/skills-img.jpg";

export default function Skills() {
  return (
    <div>
      <SkillsTitle />
      <div className="px-5.5 md:flex md:gap-22.5 md:px-0">
        <SkillsImage image={SkillImage} altText="Skills Image" />
        <SkillsDiagrams />
      </div>
    </div>
  );
}
