import { Link } from "react-router-dom";
import "../stylesheets/pgCard.css";

const PgCard = ({ pg_id, pg_address, pg_rent }) => {
  return (
    <div className="pgCard">
      <Link to={`/pg/${pg_id}`}>Address:{pg_address}</Link>
      <div>Rent:{pg_rent}</div>
    </div>
  );
};

export default PgCard;
