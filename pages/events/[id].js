import { useRouter } from "next/router";
import EventSummary from "../../components/events/event-summary";
import EventLogistics from "../../components/events/event-logistics";
import EventContent from "../../components/events/event-content";
import { getEventById } from "../../mock/data-dummy";

function EventsDetailPage() {
  const router = useRouter();

  console.log(router.query);
  const detailPageData = getEventById(router.query.id);

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
