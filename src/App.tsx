import { IsModal } from "./atoms";
import Router from "./router";
import { Global } from "./styles/Globalstyle";
import { ToastContainer } from "react-toastify";
import { useRecoilValue } from "recoil";
import * as C from "./components";

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
