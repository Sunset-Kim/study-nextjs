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

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;

  const data = await eventService.fetchEventsById(id);

  console.log("############## \n", data);

  if (!data || data.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data[0],
    },
  };
}

export async function getStaticPaths() {
  const events = await eventService.fetchAllEvents();
  const paths = events.map((event) => ({
    params: { id: event.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
