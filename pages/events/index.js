import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { getAllEvents } from "../../mock/data-dummy";
import EventsService from "../../services/events-service";

const eventService = new EventsService();

function EventsPage(props) {
  const events = props.events;
  const router = useRouter();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month < 10 ? "0" + month : month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </div>
  );
}

export default EventsPage;

export async function getStaticProps() {
  const events = await eventService.fetchEvents();

  return {
    props: { events },
    revalidate: 30,
  };
}
