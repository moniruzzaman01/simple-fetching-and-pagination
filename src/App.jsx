import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className=" text-4xl text-red-500">welcome</h1>
      <Outlet />
    </>
  );
}

export default App;
