import { useEffect, useState } from "react";

function LastSalePage() {
  const [sales, setSales] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://nextjs-b302d-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({ id: data[key].username, volume: data[key].volume });
        }
        setSales(transformedSales);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (!sales) {
    return <p>Not yet...</p>;
  }

  return (
    <ul>
      {sales?.map((item) => (
        <li key={item.id}>
          {item.id} {item.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalePage;
