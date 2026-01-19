function Nav({ label, url }) {
  return (
    <a
      className="font-semibold text-lg text-white focus:border-2 focus:border-white focus:rounded-md hover:underline active:border-none active:no-underline active:opacity-70"
      href={url}
    >
      {label}
    </a>
  );
}
export default Nav;
