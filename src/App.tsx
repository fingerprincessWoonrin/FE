import Router from "./router";
import { Global } from "./styles/Globalstyle";
import * as C from "./components";

function App() {
  return (
    <>
      <Global />
      <C.Header />
      <C.LeftBar />
      <Router />
    </>
  );
}

export default App;
