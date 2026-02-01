import Footerlogo from "./FooterLogo";

import LogoImage from "../../assets/images/logo.svg";

export default function Footer() {
  return (
    <div className="bg-[#343740] w-full h-25.25 py-8 md:h-38.25 md:py-12.5">
      <div className="flex  justify-center items-center">
        <Footerlogo image={LogoImage} />
      </div>
    </div>
  );
}
