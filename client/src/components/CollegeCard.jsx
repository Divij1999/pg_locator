import { Link } from "react-router-dom";
import "../stylesheets/collegeCard.css";

const CollegeCard = ({ college_id, college_name, college_address }) => {
  return (
    <div className="collegecard">
      <h3 className="">{college_name}</h3>
      <div className="">Address: {college_address}</div>
      <button>
        <Link className="" to={`/colleges/${college_id}`}>
          Go to detalils
        </Link>
      </button>
    </div>
  );
};

export default CollegeCard;
