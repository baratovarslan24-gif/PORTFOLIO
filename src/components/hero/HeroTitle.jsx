function HeroTitle({ name, role }) {
  return (
    <h1 className="font-normal text-[28px] text-white leading-[130%] md:text-5xl max-w-131.5">
      Вітаю, я {name} <br />
      <span className="font-bold text-[40px] md:text-[90px]">{role}</span>
    </h1>
  );
}

export default HeroTitle;
