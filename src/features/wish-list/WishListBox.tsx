import WishItem from "./WishItem";

interface WishItem {
  image: string;
  name: string;
  date: string;
  price: number;
}

function WishListBox() {
  const Wishes: WishItem[] = [
    {
      image: "../../cover.png",
      name: "Raw Black T-Shirt Lineup",
      date: "27 July 2023",
      price: 16,
    },
    {
      image: "../../cover2.png",
      name: "Essential Neutrals",
      date: "9 March 2023",
      price: 16,
    },
  ];

  return (
    <div>
      <ul className="flex flex-col divide-y">
        {Wishes.map((item) => (
          <li key={item.name}>
            <WishItem
              image={item.image}
              name={item.name}
              price={item.price}
              date={item.date}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WishListBox;
