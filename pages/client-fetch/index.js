import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalePage(props) {
  const [sales, setSales] = useState(props.sales);

  const { data, error } = useSWR(
    "https://nextjs-b302d-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const reformData = Object.values(data);
      setSales(reformData);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales?.map((item) => (
        <li key={item.username}>
          {item.username} {item.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalePage;

export async function getStaticProps() {
  const response = await fetch("https://nextjs-b302d-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json");
  const data = await response.json();

  let sales = [];

  if (data) {
    sales = Object.values(data);
  }

  return {
    props: { sales },
  };
}
