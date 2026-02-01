import { servicesContent } from "../../data/app";

export default function ServicesCard() {
  return (
    <div className="md:grid md:grid-cols-3 gap-22.5 md:mb-35 ">
      {servicesContent.services.map((item) => (
        <div className="flex flex-col w-82.5 mb-7.5">
          <img
            className="mb-2.5 w-10 h-10 md:mb-2.5 md:w-15 md:h-15"
            src={item.icon}
            alt=""
          />
          <h3 className="font-semibold text-[20px] text[#333] mb-3.75 md:text-[28px] md:mb-6.25">
            {item.title}
          </h3>
          <p className="font-normal text-[16px] text-[#333]">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
