import { Route, Routes } from "react-router-dom";
import * as P from "../pages";
import * as C from "../components";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<P.Schedule />} />
      <Route path="/login" element={<P.Login />} />
      <Route path="/signup" element={<P.SignUp />} />
      <Route path="/friend" element={<P.Friends />} />
      <Route path="*" element={<P.NotFound />} />
      <Route path="/profile" element={<P.Profile />} />
    </Routes>
  );
};

export default Router;
