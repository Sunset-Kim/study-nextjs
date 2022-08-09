import Link from "next/link";
import S from "./main-header.module.scss";

function MainHeader() {
  return (
    <header className={S.header}>
      <div className={S.logo}>
        <Link href="/">NextEvents</Link>
      </div>

      <nav className={S.nav}>
        <li>
          <Link href="/events">Browse All Events</Link>
        </li>
      </nav>
    </header>
  );
}

export default MainHeader;
