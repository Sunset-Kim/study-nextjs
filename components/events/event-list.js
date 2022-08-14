import EventItem from "./event-item";
import S from "./event-list.module.scss";

function EventList(props) {
  const { items } = props;

  return (
    <ul className={S.list}>
      {items.map((event) => (
        <EventItem key={event.id} data={event} />
      ))}
    </ul>
  );
}

export default EventList;
