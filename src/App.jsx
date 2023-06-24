import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" bg-green-50">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
