import Link from "next/link";
import S from "./button.module.scss";

function LinkButton(props) {
  return (
    <Link href={props.href}>
      <a className={S.btn__link}>{props.children}</a>
    </Link>
  );
}

export default LinkButton;
