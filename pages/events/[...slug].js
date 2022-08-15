import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsService from "../../services/events-service";

const eventService = new EventsService();

function EventsFilteredPage(props) {
  return (
    <div>
      <EventList items={[props.data]} />
    </div>
  );
}

export default EventsFilteredPage;

export async function getServerSideProps(req, res) {
  const { slug } = req.params;

  if (!slug || slug.length > 2) {
    return {
      notFound: true,
    };
  }

  const events = await eventService.fetchEvents();
  const data = events.find((event) => {
    const date = event.date.split("-");
    if (date[0] === slug[0] && date[1] === slug[1]) {
      return event;
    }
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
