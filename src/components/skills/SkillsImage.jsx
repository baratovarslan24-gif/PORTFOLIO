export default function SkillsImage({ image, altText }) {
  return (
    <div>
      <img
        className="w-75 h-81.25 mb-7.5 md:w-112.5 md:h-103.75 md:mb-35"
        src={image}
        alt={altText}
      />
    </div>
  );
}
