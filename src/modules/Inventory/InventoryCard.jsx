import { IoIosArrowDropright } from "react-icons/io";

const InventoryCard = ({ coinImage, name, balance, network, price }) => {
  return (
    <div className="card mb-3 rounded bg-secondary text-white">
      <div className="row g-0 align-items-center">
        <div className="col-md-3">
          <img
            src={coinImage}
            width={150}
            className="img-fluid rounded p-3 h-100 inventory-img"
            alt={name}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-md-9">
          <div className="card-body d-flex align-items-center">
            <div>
              <h5 className="card-title text-primary fw-bold">{name}</h5>
              <p className="card-text mb-0 fw-bold">{balance}</p>
              <p className="card-text mb-0">
                <small className="text-muted text-capitalize">{network}</small>
              </p>
              <p className="card-text">
                <small className="text-primary text-capitalize">{price}</small>
              </p>
            </div>

            <IoIosArrowDropright className="ms-auto" size={"2.2rem"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
