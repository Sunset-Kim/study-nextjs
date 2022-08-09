import Head from "next/head";
import Image from "next/image";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../mock/data-dummy";
import styles from "../styles/Home.module.css";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  console.log(featuredEvents);
  return (
    <div className={styles.container}>
      <h1>주요 이벤트 목록을 보여줍니다</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}
