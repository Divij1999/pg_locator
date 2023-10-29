import { useState } from "react";

const AddPgForm = () => {
  const [pgDetails, setPgDetails] = useState({
    pg_address: "",
    owner_contact: "",
    pg_rent: null,
    gender_requirement: "none",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPgDetails({ ...pgDetails, [name]: value });
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3000/pg/add-pg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pgDetails),
    });
    const content = await response.json();
    console.log(content);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <label>
        Address:
        <input
          type="text"
          name="pg_address"
          value={pgDetails.pg_address}
          onChange={handleChange}
        />
      </label>
      <label>
        Contact:
        <input
          type="text"
          name="owner_contact"
          value={pgDetails.owner_contact}
          onChange={handleChange}
        />
      </label>
      <label>
        Rent:
        <input
          type="number"
          name="pg_rent"
          value={pgDetails.pg_rent}
          onChange={handleChange}
        />
      </label>
      <label>
        Gender Requirement:
        <select
          name="gender_requirement"
          value={pgDetails.gender_requirement}
          onChange={handleChange}
        >
          <option value="m">Male</option>
          <option value="f">Female</option>
          <option value="none">None</option>
        </select>
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default AddPgForm;
