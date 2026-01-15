export default function Nav() {
  return (
    <ul className="hidden md:flex gap-7.5 text-white font-semibold text-lg ">
      <li>
        <a
          href="#about"
          className="focus:border-2 focus:border-white focus:rounded-[3px] hover:underline active:opacity-70 active:border-none active:no-underline"
        >
          Про мене
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className="focus:border-2 focus:border-white focus:rounded-[3px] hover:underline active:opacity-70 active:border-none active:no-underline"
        >
          Навички
        </a>
      </li>
      <li>
        <a
          href="#services"
          className="focus:border-2 focus:border-white focus:rounded-[3px] hover:underline active:opacity-70 active:border-none active:no-underline"
        >
          Послуги
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          className="focus:border-2 focus:border-white focus:rounded-[3px] hover:underline active:opacity-70 active:border-none active:no-underline"
        >
          Портфоліо
        </a>
      </li>
      <li>
        <a
          href="#reviews"
          className="focus:border-2 focus:border-white focus:rounded-[3px] hover:underline active:opacity-70 active:border-none active:no-underline"
        >
          Відгуки
        </a>
      </li>
      <li>
        <a
          href="#contacts"
          className="focus:border-2 focus:border-white focus:rounded-[3px] hover:underline active:opacity-70 active:border-none active:no-underline"
        >
          Контакти
        </a>
      </li>
    </ul>
  );
}
