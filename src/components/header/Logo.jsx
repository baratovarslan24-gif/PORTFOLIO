export default function Logo({ image, altText }) {
  return (
    <a
      href="/"
      className="max-w-27.5 inline-block md:max-w-39.5 focus:border-2 focus:border-blue-900 hover:opacity-70 active:opacity-50 transition-opacity duration-300"
    >
      <img className="w-full h-auto" src={image} alt={altText} />
    </a>
  );
}
