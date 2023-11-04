import { Link } from "react-router-dom";
import "../stylesheets/collegeCard.css";

const CollegeCard = ({ college_id, college_name, college_address }) => {
  return (
    <div className="collegeCard">
      <Link to={`/colleges/${college_id}`}>{college_name}</Link>
      <div>Address: {college_address}</div>
    </div>
  );
};

export default CollegeCard;
