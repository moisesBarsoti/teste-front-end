import PartnerCard from "../PartnerCard";
import "./index.scss";

export default function ContainerPartner() {
  return (
    <div className="container-partner">
      <PartnerCard direction="left" />
      <PartnerCard direction="right" />
    </div>
  );
}