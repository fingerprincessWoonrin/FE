import Router from "./router";
import { Global } from "./styles/Globalstyle";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Global />
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
