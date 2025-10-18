import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import { Provider } from "react-redux";
import store from "../lib/store";
import { ToastContainer } from "react-toastify";

const mont = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className={mont.className}>
        <Component {...pageProps} />
        <ToastContainer />
      </div>
    </Provider>
  );
}
