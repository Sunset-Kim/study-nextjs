import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import EventList from "../components/events/event-list";
import EventsService from "../services/events-service";

const eventsService = new EventsService();

export default function Home(props) {
  const { events } = props;
  const [featuredEvents, setFeaturedEvents] = useState(events);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch();

    async function fetch() {
      try {
        setIsLoading(true);
        const data = await eventsService.fetchEvents();
        setFeaturedEvents(eventsService.getFeaturedEvents());
        setIsLoading(false);
      } catch {
        setIsLoading(false);
        setIsError(true);
      }
    }
  }, []);

  if (isLoading) {
    return <p>로딩중</p>;
  }

  if (isError) {
    return <p>에러요</p>;
  }

  if (!featuredEvents || featuredEvents.length === 0) {
    return <p>아직 준비된 이벤트가 없는 걸요</p>;
  }

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = [];

  const result = await fetch("https://nextjs-b302d-default-rtdb.asia-southeast1.firebasedatabase.app/events.json", {
    method: "get",
  });
  const events = await result.json();

  for (const key in events) {
    const value = events[key];
    if (value.isFeatured) {
      featuredEvents.push(value);
    }
  }

  return {
    props: { events: featuredEvents },
  };
}
