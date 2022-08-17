import Link from "next/link";
import S from "./main-header.module.scss";

function MainHeader() {
  return (
    <header className={S.header}>
      <div className={S.logo}>
        <Link href="/">NextEvents</Link>
      </div>

      <nav className={S.nav}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
          <li>
            <Link href="/news">News Letter</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
