import { createContext } from "react";

const ToastifyContextQueue = createContext({
  queue: [],
});

const ToastifyContextController = createContext({
  onClose: () => {},
  onOpen: () => {},
});

export { ToastifyContextQueue, ToastifyContextController };
