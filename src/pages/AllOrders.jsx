import useLoadOrders from "../utils/useLoadOrders";

function AllOrders() {
  const orders = useLoadOrders();
  console.log("orders", orders);

  return <div>AllOrders</div>;
}

export default AllOrders;
