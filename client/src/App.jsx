import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./stylesheets/app.css";
const App = () => {
  return (
    <div className="app">
      <NavBar className="navbar" />

      <Outlet />
    </div>
  );
};

export default App;
