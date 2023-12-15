import React from "react";
import Home from "./component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentLogin from "./component/studentpages/StudentLogin";
import StudentRegister from "./component/studentpages/StudentRegister";
import StudentHomePage from "./component/studentpages/StudentHomePage";
import StudentProfile from "./component/studentpages/StudentProfile";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/studentLogin" element={<StudentLogin />}></Route>
          <Route path="/studentRegister" element={<StudentRegister />}></Route>
          <Route path="/studentHome" element={<StudentHomePage />}></Route>
          <Route path="/StudentProfile" element={<StudentProfile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
