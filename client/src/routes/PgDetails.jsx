import { useLoaderData } from "react-router-dom";

export const get_pg_details = async ({ params }) => {
  const response = await fetch(
    `http://localhost:3000/colleges/pg/${params.id}`,
    {
      method: "GET",
    }
  );
  return response;
};

const PgDetails = () => {
  const { pg_address, owner_contact, pg_rent, gender_requirement } =
    useLoaderData()[0];
  console.log(useLoaderData());
  return (
    <div>
      <div>Address: {pg_address}</div>
      <div>Contact: {owner_contact}</div>
      <div>Rent: {pg_rent} </div>
      <div>Gender Requirement: {gender_requirement} </div>
    </div>
  );
};

export default PgDetails;
