import { aboutContent } from "../../data/app";

export default function AboutText() {
  return (
    <div>
      <p className="font-normal text-[16px] text-[#333333] tracking-wide mb-3.75 md:text-lg md:mb-6.25">
        {aboutContent.content1}
      </p>
      <p className="font-normal text-[16px] text-[#333333] tracking-wide mb-3.75 md:text-lg md:mb-6.25">
        {aboutContent.content2}
      </p>
    </div>
  );
}
