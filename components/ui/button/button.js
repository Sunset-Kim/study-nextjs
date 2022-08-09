import S from "./button.module.scss";

function LinkButton(props) {
  return <button className={S.btn__link}>{props.children}</button>;
}

export default LinkButton;
