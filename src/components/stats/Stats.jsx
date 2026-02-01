import { statsContent } from "../../data/app";

function Stats() {
  return (
    <section id="statistics" className="py-12.5 md:py-35 px-0">
      <div className="grid grid-cols-2 gap-3.75 md:grid-cols-4 md:gap-4.25">
        {statsContent.items.map((item, idx) => (
          <div
            className="bg-[#f6f6f8] border border-[#dbdbed] py-6.25 md:py-12.5 px-3.75 md:px-10 flex flex-col gap-3 md:gap-5 text-center items-center justify-center"
            key={idx}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="h-8.75 w-auto md:w-20 md:h-20 object-contain"
            />
            <h3 className="text-sm md:text-lg font-normal text-[#333] m-0">
              {item.title}
            </h3>
            <p className="text-[30px] md:text-[44px] font-semibold m-0">
              {item.count}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
