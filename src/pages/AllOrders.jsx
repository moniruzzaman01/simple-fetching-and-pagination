import { useState } from "react";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import useLoadOrders from "../utils/useLoadOrders";

function AllOrders() {
  const orders = useLoadOrders();
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div
      className=" container  mx-auto
  "
    >
      <h1 className=" text-3xl text-slate-700 font-bold mt-10 mb-5">
        All orders
      </h1>
      <Table data={orders.slice(0, 5)} />
      <Pagination pageNumber={pageNumber} pages={orders.length / 5} />
    </div>
  );
}

export default AllOrders;
