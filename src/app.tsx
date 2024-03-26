import { createRoot } from "react-dom/client";
import AppRoutes from "./pages/AppRoutes/AppRoutes";
import store from "./store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("content"));
root.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
