import { Link } from "react-router-dom";
// import "../stylesheets/pgCard.css";

const PgCard = ({ pg_id, pg_address, pg_rent }) => {
  return (
    <div className="">
      <div className="">
        <Link to={`/colleges/pg/${pg_id}`}>Address:{pg_address}</Link>
        <div>Rent:{pg_rent}</div>
      </div>
    </div>
  );
};

export default PgCard;
