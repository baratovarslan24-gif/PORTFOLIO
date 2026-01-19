import HeroTitle from "./HeroTitle";
import { title } from "../../data/app";

export default function Hero() {
  return (
    <section className="">
      <HeroTitle name={title.name} role={title.role} />
    </section>
  );
}
