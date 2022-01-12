import { IoIosArrowDropright } from "react-icons/io";

const InventoryNTFSCard = ({ nftImage, name, itemsLength, description }) => {
  return (
    <div className="card mb-3 rounded bg-secondary text-white">
      <div className="row g-0 align-items-center">
        <div className="col-md-3">
          <img
            src={nftImage}
            className="img-fluid rounded p-3 h-100 inventory-img"
            alt={name}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-md-9">
          <div className="card-body d-flex align-items-center">
            <div>
              <h5 className="card-title text-primary fw-bold">{name}</h5>
              <p className="card-text mb-0 fw-bold">{itemsLength} Item</p>
              <p className="card-text">
                <small className="text-muted text-capitalize">{description}</small>
              </p>
            </div>

            <IoIosArrowDropright className="ms-auto" size={"2.2rem"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryNTFSCard;
