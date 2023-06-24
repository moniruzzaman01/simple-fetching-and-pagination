import Table from "../components/Table";
import useLoadOrders from "../utils/useLoadOrders";

function ExpressDelivery() {
  const orders = useLoadOrders();

  return (
    <div
      className=" container  mx-auto
  "
    >
      <h1 className=" text-3xl text-slate-700 font-bold mt-10 mb-5">
        Regular Deliveries
      </h1>
      <Table data={orders.filter((order) => order.shipment != "Regular")} />
    </div>
  );
}

export default ExpressDelivery;
