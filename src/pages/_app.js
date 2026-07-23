import "../styles/globals.css";
import { Provider } from "react-redux";
import dataStore from "../redux/store"
import ModalContainer from "../registry/locals/ModalContainer";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={dataStore}>
      <div className="relative">
        <Component {...pageProps} />
        <ModalContainer />
      </div>
    </Provider>
  );
}
