import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../mock/data-dummy";

function EventsPage() {
  const allEvents = getAllEvents();

  return (
    <div>
      <EventList items={allEvents} />
    </div>
  );
}

export default EventsPage;
