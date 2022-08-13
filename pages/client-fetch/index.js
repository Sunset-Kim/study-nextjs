import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalePage() {
  // const [sales, setSales] = useState();
  // const [isLoading, setLoading] = useState(false);

  const { data, error } = useSWR(
    "https://nextjs-b302d-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  const reformData =
    data &&
    Object.values(data).map((item) => {
      console.log(item);
      item["id"] = item.username;
      return item;
    });

  console.log(reformData);
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://nextjs-b302d-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       const transformedSales = [];

  //       for (const key in data) {
  //         transformedSales.push({ id: data[key].username, volume: data[key].volume });
  //       }
  //       setSales(transformedSales);
  //       setLoading(false);
  //     });
  // }, []);

  if (!data) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Not yet...</p>;
  }

  return (
    <ul>
      {reformData?.map((item) => (
        <li key={item.id}>
          {item.id} {item.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalePage;
