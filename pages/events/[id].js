import { useRouter } from "next/router";
import EventSummary from "../../components/events/event-summary";
import EventLogistics from "../../components/events/event-logistics";
import EventContent from "../../components/events/event-content";
import { getEventById } from "../../mock/data-dummy";
import EventsService from "../../services/events-service";

const eventService = new EventsService();

function EventsDetailPage(props) {
  const detailPageData = props.data;

  if (!detailPageData) {
    return (
      <div>
        <h1>못찾았다</h1>
      </div>
    );
  }
  return (
    <>
      <EventSummary title={detailPageData.title} />
      <EventLogistics date={detailPageData.date} address={detailPageData.location} image={detailPageData.image} />
      <EventContent>
        <p>{detailPageData.description}</p>
      </EventContent>
    </>
  );
}

export default EventsDetailPage;

export async function getServerSideProps(req, res) {
  const {
    params: { id },
  } = req;
  const events = await eventService.fetchEvents();
  const data = events.find((event) => event.id === id);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
