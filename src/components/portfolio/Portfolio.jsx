import SectionTitle from "../section-title/SectionTitle";
import { portfolioContent } from "../../data/app";
import { useState } from "react";

function Portfolio() {
  const [selected, setSelected] = useState("all");

  const filteredWorks =
    selected === "all"
      ? portfolioContent.works
      : portfolioContent.works.filter((item) => item.category === selected);

  return (
    <section id="portfolio" className="pb-12.5 md:pb-35">
      <div className="mb-7.5 md:mb-15 text-center">
        <SectionTitle text={portfolioContent.title} />
      </div>
      <nav className="flex flex-col gap-3.75 mb-7.5 md:flex-row md:items-center md:justify-center md:gap-11.25 md:mb-15">
        {portfolioContent.nav.map((item) => (
          <button
            className={
              selected === item.id
                ? "bg-transparent  text-lg md:text-2xl border-none text-[#333] font-semibold cursor-pointer focus:border focus:rounded-[5px] focus:border-[#2352de] hover:text-[#2352de] hover:underline active:text-[#2352de]"
                : "bg-transparent  text-lg md:text-2xl border-none text-[#333] font-semibold cursor-pointer focus:border focus:rounded-[5px] focus:border-[#2352de] hover:text-[#2352de] hover:underline"
            }
            key={item.id}
            onClick={() => setSelected(item.id)}
          >
            {item.title}
          </button>
        ))}
      </nav>

      <ul className="m-0 p-0 list-none grid grid-cols-2 gap-3.75 mb-7.5 md:grid-cols-3 md:gap-11.25 md:mb-15">
        {filteredWorks.map((item) => (
          <li key={item.id}>
            <img
              className="h-41.25 md:h-90 object-cover w-full"
              src={item.img}
              alt=""
            />
          </li>
        ))}
      </ul>
      <div className="text-center">
        <a
          className="inline-block py-3 px-6 bg-[#2352de] text-white no-underline text-lg font-semibold focus:border focus:shadow-amber-100 hover:text-[#2352de] hover:bg-white hover:border hover:border-[#2352de]"
          href="#"
        >
          Завантажити ще
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
