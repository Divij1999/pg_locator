import { Link } from "react-router-dom";
// import "../stylesheets/collegeCard.css";

const CollegeCard = ({ college_id, college_name, college_address }) => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h3 className="">{college_name}</h3>
          <div className="">Address: {college_address}</div>
          <Link className="" to={`/colleges/${college_id}`}>
            Go to detalils
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
