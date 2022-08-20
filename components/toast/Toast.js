import { useContext, useEffect } from "react";
import { ToastifyContextController, ToastifyContextQueue } from "../../contexts/toastify/toastfy_context";
import S from "./Toast.module.scss";

function Toast({ data }) {
  const { type, title } = data;

  const { onClose } = useContext(ToastifyContextController);

  const typeConverter = (type) => {
    switch (type) {
      case "error":
        return S.error;
      case "success":
        return S.fullfield;
      case "loading":
        return S.pending;
      default:
        return;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("사라집니다");
      onClose(data);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${S.toast} ${typeConverter(type)}`}>
      <h5 className={S.title}>{title}</h5>
      <button
        className={S.button}
        onClick={() => {
          onClose(data);
        }}
      >
        X
      </button>
    </div>
  );
}

export default Toast;
