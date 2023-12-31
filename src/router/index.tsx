import { Route, Routes } from "react-router-dom";
import * as P from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<P.Schedule />} />
      <Route path="/login" element={<P.Login />} />
      <Route path="/signup" element={<P.SignUp />} />
      <Route path="/friend" element={<P.Friends />} />
      <Route path="/profile" element={<P.Profile />} />
      <Route path="/group" element={<P.Group />} />
      <Route path="/calendar" element={<P.Calendar />} />
      <Route path="*" element={<P.NotFound />} />
    </Routes>
  );
};

export default Router;
