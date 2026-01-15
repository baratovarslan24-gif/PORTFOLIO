import Logo from "./Logo";
import LogoImage from "../../assets/images/logo.svg";
import Nav from "./Nav";

function Header() {
  return (
    <header className="pt-3.75 md:pt-18.75 ">
      <div className="flex justify-between items-center">
        <Logo image={LogoImage} altText="Портфолио" />
        <button className="md:hidden">
          <svg
            width="30"
            height="22"
            viewBox="0 0 30 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1" x2="30" y2="1" stroke="white" strokeWidth="2" />
            <line y1="11" x2="30" y2="11" stroke="white" strokeWidth="2" />
            <line y1="21" x2="30" y2="21" stroke="white" strokeWidth="2" />
          </svg>
        </button>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
