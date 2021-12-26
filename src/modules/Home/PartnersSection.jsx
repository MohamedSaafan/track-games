import { Link } from "react-router-dom";
import { PartnerImage1, PartnerImage2, PartnerImage3, PartnerImage4, PartnerImage5 } from "../../assets";

const PartnersSection = () => {
  return (
    <section className="my-4">
      <div className="mb-4 pb-2 d-flex justify-content-between align-items-center border-bottom">
        <h2 className="text-capitalize font-lg text-secondary">Partners</h2>
        <Link to="/partners" className="text-pramiry text-uppercase font-lg">
          view all
        </Link>
      </div>
      <div className="d-flex justify-content-between gap-2 px-4 flex-wrap">
        <img src={PartnerImage1} alt="partner" title="partner" />
        <img src={PartnerImage2} alt="partner" title="partner" />
        <img src={PartnerImage3} alt="partner" title="partner" />
        <img src={PartnerImage4} alt="partner" title="partner" />
        <img src={PartnerImage5} alt="partner" title="partner" />
      </div>
    </section>
  );
};

export default PartnersSection;
