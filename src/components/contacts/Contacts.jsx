import SectionTitle from "../section-title/SectionTitle";
import { contactContent } from "../../data/app";

function Contacts() {
  return (
    <section className="pb-35">
      <div className="text-center md:text-start">
        <SectionTitle text={contactContent.title} />
      </div>

      <div className="md:flex md:justify-between md:mt-15">
        <div className="md:w-132.5">
          <p className="text-[16px] m-0 text-[#333] mb-7.5">
            {contactContent.description}
          </p>
          <p className="text-[16px] text-[#2352de] m-0 mb-3.75">
            {contactContent.phone}
          </p>
          <p className="text-[16px] text-[#2352de] m-0 mb-7.5 md:mb-3.75">
            {contactContent.email}
          </p>
          <p className="flex items-center gap-5 mb-8">
            <a
              href={contactContent.instagram}
              target="_blank"
              className="contact-link"
            >
              <img
                src="/images/instagram.svg"
                alt=""
                className="w-11 h-11 object-contain"
              />
            </a>
            <a
              href={contactContent.facebook}
              target="_blank"
              className="contact-link"
            >
              <img
                src="/images/facebook.svg"
                alt=""
                className="w-11 h-11 object-contain"
              />
            </a>
            <a
              href={contactContent.telegram}
              target="_blank"
              className="contact-link"
            >
              <img
                src="/images/telegram.svg"
                alt=""
                className="w-11 h-11 object-contain"
              />
            </a>
          </p>
        </div>
        <div className="md:w-135">
          <form className="w-full">
            <div className="md:flex md:justify-between md:mb-7.5">
              <label className="flex flex-col gap-2.5 text-sm text-[#333] font-semibold mb-3.75 md:mb-2.5">
                Ваше ім’я <br />
                <input
                  type="text"
                  className="w-full md:w-63.75 h-11 bg-[#f6f6f8] border-none py-3.25 px-3.75 text-sm text-[#9c9cab]"
                  placeholder="Іван"
                />
              </label>
              <label className="flex flex-col gap-2.5 text-sm text-[#333] font-semibold mb-3.75 md:mb-2.5">
                Номер телефона <br />
                <input
                  type="text"
                  className="w-full md:w-63.75 h-11 bg-[#f6f6f8] border-none py-3.25 px-3.75 text-sm text-[#9c9cab]"
                  placeholder="+380501111111"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2.5 text-sm text-[#333] font-semibold mb-3.75 md:mb-2.5">
              Ваше повідомлення <br />
              <textarea className="min-h-28.75 w-full bg-[#f6f6f8] border-none py-3.25 px-3.75 text-sm text-[#9c9cab] resize-none md:mb-7.5">
                Текст вашого повідомлення
              </textarea>
            </label>
            <button className="inline-block bg-[#2352de] text-white text-lg font-semibold py-3 px-6 border-none cursor-pointer">
              Надіслати
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
