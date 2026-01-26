import SectionTitle from "../section-title/SectionTitle.jsx";
import ServicesCard from "./ServicesCard";
import { servicesContent } from "../../data/app.js";

export default function Services() {
  return (
    <div>
      <SectionTitle text={servicesContent.title} />
      <ServicesCard />
    </div>
  );
}
