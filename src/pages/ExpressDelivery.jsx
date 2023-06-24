import { useState } from "react";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import useLoadOrders from "../utils/useLoadOrders";

function ExpressDelivery() {
  const orders = useLoadOrders();
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div
      className=" container  mx-auto
  "
    >
      <h1 className=" text-3xl text-slate-700 font-bold mt-10 mb-5">
        Regular Deliveries
      </h1>
      <Table
        data={orders
          .filter((order) => order.shipment != "Regular")
          .slice((pageNumber - 1) * 5, pageNumber * 5)}
      />
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        pages={orders.filter((order) => order.shipment != "Regular").length / 5}
      />
    </div>
  );
}

export default ExpressDelivery;
