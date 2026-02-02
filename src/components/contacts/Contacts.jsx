import { useState } from "react";
import SectionTitle from "../section-title/SectionTitle";
import { contactContent } from "../../data/app";

function Contacts() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    const newErrors = {};

    if (!form.name.trim() && !form.name.trim().length > 2) {
      newErrors.name = "Введiть iм'я";
    }

    const phoneRegex = /^\+380\d{9}$/;
    if (!form.phone.trim()) {
      newErrors.phone = "Введiть номер телефону";
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Формат: +380XXXXXXXXX";
    }

    if (!form.message.trim()) {
      newErrors.message = "Введiть повiдомлення";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    console.log("Данi валiднi:", form);

    //имитация успешной отправки
    setIsSubmitted(true);
  }
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
          {!isSubmitted ? (
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="md:flex md:justify-between md:mb-7.5">
                <label className="flex flex-col gap-2.5 text-sm text-[#333] font-semibold mb-3.75 md:mb-2.5">
                  Ваше ім’я <br />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full md:w-63.75 h-11 bg-[#f6f6f8] border-none py-3.25 px-3.75 text-sm text-[#9c9cab]"
                    placeholder="Іван"
                  />
                  {errors.name && (
                    <span className="text-[red] text-[12px] mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </label>
                <label className="flex flex-col gap-2.5 text-sm text-[#333] font-semibold mb-3.75 md:mb-2.5">
                  Номер телефона <br />
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full md:w-63.75 h-11 bg-[#f6f6f8] border-none py-3.25 px-3.75 text-sm text-[#9c9cab]"
                    placeholder="+380501111111"
                  />
                  {errors.phone && (
                    <span className="text-[red] text-[12px] mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </label>
              </div>
              <label className="flex flex-col gap-2.5 text-sm text-[#333] font-semibold mb-3.75 md:mb-2.5">
                Ваше повідомлення <br />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="min-h-28.75 w-full bg-[#f6f6f8] border-none py-3.25 px-3.75 text-sm text-[#9c9cab] resize-none md:mb-7.5"
                >
                  Текст вашого повідомлення
                </textarea>
                {errors.message && (
                  <span className="text-[red] text-[12px] mt-1 block">
                    {errors.message}
                  </span>
                )}
              </label>
              <button className="inline-block bg-[#2352de] text-white text-lg font-semibold py-3 px-6 border-none cursor-pointer">
                Надіслати
              </button>
            </form>
          ) : (
            <div className="p-10 bg-[#f0fff4] text-center border border-[#4caf50]">
              <h3>Дякуэмо</h3>
              <p>Ваше повiдомлення успiшно надiслано.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contacts;
