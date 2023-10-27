import { Link } from "react-router-dom";

const CollegeCard = ({ college_id, college_name, college_address }) => {
  return (
    <div>
      <Link to={`/colleges/${college_id}`}>{college_name}</Link>
      <div>Address: {college_address}</div>
    </div>
  );
};

export default CollegeCard;
