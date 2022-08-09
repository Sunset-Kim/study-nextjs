import Link from "next/link";
import S from "./events-item.module.scss";

function EventItem(props) {
  const { id, title, image, date, location } = props.data;

  const humanReadableDate = new Date(date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={S.item}>
      <img src={"/" + image} alt={title} />
      <div className={S.content}>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time className={S.date}>{humanReadableDate}</time>
        </div>
        <div>
          <address className={S.address}>{formattedAddress}</address>
        </div>
        <div className={S.action}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
