import { Route, Routes } from "react-router-dom";
import * as P from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/login" element={<P.Login />} />
      <Route path="/signup" element={<P.SignUp />} />
      <Route path="/friend" element={<P.Friends />} />
    </Routes>
  );
};

export default Router;
