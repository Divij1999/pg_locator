import { useLoaderData } from "react-router-dom";
import CollegeCard from "../components/CollegeCard.jsx";
import "../stylesheets/collegeList.css";

// Loader for getting the college list

export const get_colleges = async () => {
  const response = await fetch("http://localhost:3000/colleges", {
    method: "GET",
  });

  return response;
};
const CollegeList = () => {
  const college_list = useLoaderData();
  console.log(college_list);

  return (
    <div className="list_container">
      <div className="heading">College List</div>
      <div className="collegelist">
        {college_list.map((college) => (
          <CollegeCard
            key={college.college_id}
            college_id={college.college_id}
            college_name={college.college_name}
            college_address={college.college_address}
          />
        ))}
      </div>
    </div>
  );
};

export default CollegeList;
