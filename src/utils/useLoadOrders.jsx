import { useEffect, useState } from "react";

function useLoadOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("/orders.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return orders;
}

export default useLoadOrders;
