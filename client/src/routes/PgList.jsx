import { useLoaderData } from "react-router-dom";
import PgCard from "../components/PgCard.jsx";
// import "../stylesheets/pgList.css";
// Loader for getting the list of associated PGs

export const get_pg_list = async ({ params }) => {
  const response = await fetch(`http://localhost:3000/colleges/${params.id}`, {
    method: "GET",
  });

  return response;
};

const PgList = () => {
  const pg_list = useLoaderData();
  console.log(pg_list);

  return (
    <div className="">
      <>
        {pg_list.map((pg) => (
          <PgCard
            key={pg.pg_id}
            pg_id={pg.pg_id}
            pg_address={pg.pg_address}
            pg_rent={pg.pg_rent}
          />
        ))}
      </>
    </div>
  );
};

export default PgList;
