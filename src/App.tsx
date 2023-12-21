import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilValue } from "recoil";
import { IsModal } from "./atoms";
import * as C from "./components";
import Router from "./router";
import { Global } from "./styles/Globalstyle";

function App() {
  const isModal = useRecoilValue(IsModal);
  return (
    <>
      <Global />
      <ToastContainer />
      <C.Header />
      <C.LeftBar />
      <Router />
      {isModal && <>{isModal}</>}
    </>
  );
}

export default App;
