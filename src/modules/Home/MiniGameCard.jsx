import { Link } from "react-router-dom";

const MiniGameCard = ({ link, imageSource, imageAlt }) => {
  return (
    <Link to={link}>
      <img
        src={imageSource}
        width={215}
        height={122}
        className="rounded mx-auto d-block"
        alt={imageAlt}
        title={imageAlt}
      />
    </Link>
  );
};

export default MiniGameCard;
