import { IsModal } from "./atoms";
import Router from "./router";
import { Global } from "./styles/Globalstyle";
import * as C from "./components";
import { useRecoilValue } from "recoil";

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
