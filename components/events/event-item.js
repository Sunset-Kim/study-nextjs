import Link from "next/link";
import LinkButton from "../ui/button/link-button";
import { AddressIcon, ArrowRightIcon, DateIcon } from "../ui/icons";
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
        <div className={S.date}>
          <span>
            <DateIcon />
          </span>
          <time className={S.date}>{humanReadableDate}</time>
        </div>
        <div className={S.address}>
          <AddressIcon />
          <address className={S.address}>{formattedAddress}</address>
        </div>
        <div className={S.actions}>
          <LinkButton href={exploreLink}>
            <span>Explore Event</span>
            <span className={S.icon}>
              <ArrowRightIcon />
            </span>
          </LinkButton>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
