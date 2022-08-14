import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { getAllEvents } from "../../mock/data-dummy";

function EventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={allEvents} />
    </div>
  );
}

export default EventsPage;
