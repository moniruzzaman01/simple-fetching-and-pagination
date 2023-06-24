import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1 className=" text-4xl text-red-500">welcome</h1>
      <Outlet />
    </>
  );
}

export default App;
