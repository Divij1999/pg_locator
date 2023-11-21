import { Link } from "react-router-dom";
import "../stylesheets/pgCard.css";

const PgCard = ({ pg_id, pg_address, pg_rent }) => {
  return (
    <div className="pgcard">
      <div className="pgimg">
        <img src="../public/room.jpeg" alt="" />
      </div>

      <div className="pgdetails">
        <div className="truncate ...">Address: {pg_address}</div>
        <div>Rent:{pg_rent}</div>
        <button className="link_pg">
          <Link to={`/colleges/pg/${pg_id}`}>Details</Link>
        </button>
      </div>
    </div>
  );
};

export default PgCard;
