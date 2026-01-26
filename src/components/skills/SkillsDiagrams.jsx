import "./skills.css";

import { skillsContent } from "../../data/app.js";
export default function SkillsDiagrams() {
  return (
    <div className="md:mt-20">
      <ul>
        <li className="md:flex">
          <label
            htmlFor="html"
            className="font-semibold text-lg text-center text-[#333] mb-1.25 uppercase md:mr-2.5 md:text-start"
          >
            {skillsContent.diagram[0].skills}
          </label>
          <progress
            id="html"
            value={skillsContent.diagram[0].level}
            max="600"
            className="w-75 mb-6 md:w-150 h-8  md:mb-21.5"
          ></progress>
        </li>
        <li className="md:flex">
          <label
            htmlFor="css"
            className="font-semibold text-lg text-center text-[#333] mb-1.25 uppercase md:mr-6"
          >
            {skillsContent.diagram[1].skills}
          </label>
          <progress
            id="css"
            value={skillsContent.diagram[1].level}
            max="600"
            className="w-75 mb-6 md:w-150 h-8  md:mb-21.5"
          ></progress>
        </li>
        <li className="md:flex">
          <label
            htmlFor="js"
            className="font-semibold text-lg text-center text-[#333] mb-1.25 uppercase md:mr-9"
          >
            {skillsContent.diagram[2].skills}
          </label>
          <progress
            id="js"
            value={skillsContent.diagram[2].level}
            max="600"
            className="w-75 mb-12.5 md:w-150 h-8  "
          ></progress>
        </li>
      </ul>
    </div>
  );
}
