import { Link } from "react-router-dom";
import "../stylesheets/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>
          <img className="logo" src="../logo2.png" alt="" />
        </Link>
      </div>
      <div className="links">
        <div className="add_pg">
          <Link to={"/colleges/pg/add-pg"}>Create PG</Link>
        </div>
        <div className="college_link">
          <Link className="a" to={"/colleges"}>
            Colleges
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
