import { useLoaderData } from "react-router-dom";
import CollegeCard from "../components/CollegeCard.jsx";

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
    <div>
      College List
      <>
        {college_list.map((college) => (
          <CollegeCard
            key={college.college_id}
            college_id={college.college_id}
            college_name={college.college_name}
            college_address={college.college_address}
          />
        ))}
      </>
    </div>
  );
};

export default CollegeList;
