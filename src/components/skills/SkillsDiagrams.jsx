import "./skills.css";
export default function SkillsDiagrams() {
  return (
    <div className="md:mt-20">
      <ul>
        <li className="md:flex">
          <p className="font-semibold text-lg text-center text-[#333] mb-1.25 uppercase md:mr-2.5 md:text-start">
            html
          </p>
          <progress
            value="510"
            max="600"
            className="w-75 mb-6 md:w-150 h-8  md:mb-21.5"
          ></progress>
        </li>
        <li className="md:flex">
          <p className="font-semibold text-lg text-center text-[#333] mb-1.25 uppercase md:mr-6">
            css
          </p>
          <progress
            value="480"
            max="600"
            className="w-75 mb-6 md:w-150 h-8  md:mb-21.5"
          ></progress>
        </li>
        <li className="md:flex">
          <p className="font-semibold text-lg text-center text-[#333] mb-1.25 uppercase md:mr-9">
            js
          </p>
          <progress
            value="366"
            max="600"
            className="w-75 mb-12.5 md:w-150 h-8  "
          ></progress>
        </li>
      </ul>
    </div>
  );
}
