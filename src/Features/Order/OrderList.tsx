import OrderItem from "./OrderItem";

interface OrderItem {
  image: string;
  name: string;
  date: string;
  status: string;
  price: number;
}

function OrderList() {
  const Orders: OrderItem[] = [
    {
      image: "../../cover2.png",
      name: "Raw Black T-Shirt Lineup",
      date: "27 July 2023",
      price: 16,
      status: "Processing",
    },
    {
      image: "../../cover1.png",
      name: "Essential Neutrals",
      date: "9 March 2023",
      price: 16,
      status: "Completed",
    },
  ];

  return (
    <div>
      <ul className="flex flex-col divide-y">
        {Orders.map((item) => (
          <li key={item.name}>
            <OrderItem
              image={item.image}
              name={item.name}
              price={item.price}
              status={item.status}
              date={item.date}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
