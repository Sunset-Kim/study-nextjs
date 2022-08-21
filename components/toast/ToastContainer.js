import { useCallback, useState } from "react";
import { ToastifyContextController, ToastifyContextQueue } from "../../contexts/toastify/toastfy_context";
import Toast from "./Toast";
import S from "./Toast.module.scss";

function ToastContainer({ children }) {
  const [queue, setQueue] = useState([]);

  const showToastify = useCallback(
    (type, title) => {
      setQueue((prev) => {
        const newQueue = [...prev];
        newQueue.push({ type, title, id: Date.now() });
        return newQueue;
      });
    },
    [setQueue]
  );

  const hideToastify = useCallback(
    (data) => {
      setQueue((prev) => {
        const newQueue = [...prev];
        return newQueue.filter((toast) => toast !== data);
      });
    },
    [setQueue]
  );

  return (
    <>
      <ToastifyContextController.Provider
        value={{
          onOpen: showToastify,
          onClose: hideToastify,
        }}
      >
        {/* queue */}
        <div className={S.container}>
          <ToastifyContextQueue.Provider
            value={{
              queue,
            }}
          >
            <ToastifyContextQueue.Consumer>
              {(value) => {
                const { queue } = value;
                return queue.map((toast) => <Toast key={toast.id} data={toast} />);
              }}
            </ToastifyContextQueue.Consumer>
          </ToastifyContextQueue.Provider>
        </div>

        {/* 실제 렌더링은 */}
        <div>{children}</div>
      </ToastifyContextController.Provider>
    </>
  );
}

export default ToastContainer;
