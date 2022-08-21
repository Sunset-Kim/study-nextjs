import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import EventList from "../components/events/event-list";
import NewsletterRegistration from "../components/input/newsletter-registration";
import EventsService from "../services/events-service";

const eventsService = new EventsService();

export default function Home(props) {
  const { events } = props;

  return (
    <div>
      <Head>
        <title>NextJs - events</title>
        <meta name="description" content="연습해서 잘하자" />
      </Head>
      <NewsletterRegistration />
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await eventsService.fetchFeaturedEvents();

  return {
    props: { events: featuredEvents },
  };
}
