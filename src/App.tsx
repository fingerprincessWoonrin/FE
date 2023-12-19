import { IsModal } from "./atoms";
import Router from "./router";
import { Global } from "./styles/Globalstyle";
import { useRecoilValue } from "recoil";
import * as C from "./components";

function App() {
  const isModal = useRecoilValue(IsModal);
  return (
    <>
      <Global />
      <C.Header />
      <C.LeftBar />
      <Router />
      {isModal && <>{isModal}</>}
    </>
  );
}

export default App;
