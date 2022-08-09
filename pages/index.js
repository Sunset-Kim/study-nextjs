import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello Next World!</h1>

      <ul>
        <li>
          <Link href={"/portfolio"}>포트폴리오</Link>
        </li>
        <li>
          <Link href={"/clients"}>클라이언트</Link>
        </li>
      </ul>
    </div>
  );
}
