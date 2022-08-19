import S from "./button.module.scss";

function Button({ childern, ...props }) {
  return (
    <button className={S.btn__link} {...props}>
      {props.children}
    </button>
  );
}

export default Button;
