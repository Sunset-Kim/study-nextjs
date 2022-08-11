import path from "path";
import fs from "fs/promises";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// 2. getStaticProps 에서 만들어진  props를 전달받음
export default function Home(props) {
  return (
    <div className={styles.container}>
      <ul>
        {props.products.map((item) => (
          <li key={item.id}>
            <Link href={item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 1. 먼저실행
export async function getStaticProps(contenxt) {
  console.log("(Re-)Generating");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, // second
  };
}
