function Table({ data = [] }) {
  return (
    <table className=" border mx-auto w-full">
      <tr className=" border h-10 text-left bg-red-50">
        <th>Price</th>
        <th>Email</th>
        <th>Time</th>
        <th>Method</th>
        <th>Shipment</th>
      </tr>
      {data.map(
        (
          { price, payment_time, payment_method, user_email, shipment },
          key
        ) => (
          <tr
            className={`border h-10 text-left ${key % 2 != 0 && "bg-red-50"}`}
            key={key}
          >
            <td>{price}</td>
            <td>{user_email}</td>
            <td>{payment_time}</td>
            <td>{payment_method}</td>
            <td>{shipment}</td>
          </tr>
        )
      )}
    </table>
  );
}

export default Table;
