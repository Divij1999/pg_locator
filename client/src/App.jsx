import { Outlet } from "react-router-dom";
import "./stylesheets/app.css";

const App = () => {
  return (
    <div className="app">
      App
      <Outlet />
    </div>
  );
};

export default App;
