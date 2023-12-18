import { Route, Routes } from "react-router-dom";
import * as P from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/login" element={<P.Login />} />
      <Route path="/signup" element={<P.SignUp />} />
    </Routes>
  );
};

export default Router;
