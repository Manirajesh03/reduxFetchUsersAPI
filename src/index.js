import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
