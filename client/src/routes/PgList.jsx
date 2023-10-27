import { useLoaderData } from "react-router-dom";
import PgCard from "../components/PgCard.jsx";
const PgList = () => {
  const pg_list = useLoaderData();
  console.log(pg_list);

  return (
    <div>
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
