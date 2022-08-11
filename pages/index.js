import path from "path";
import fs from "fs/promises";
import styles from "../styles/Home.module.css";

// 2. getStaticProps 에서 만들어진  props를 전달받음
export default function Home(props) {
  return (
    <div className={styles.container}>
      <ul>
        {props.products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

// 1. 먼저실행
export async function getStaticProps(contenxt) {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}
