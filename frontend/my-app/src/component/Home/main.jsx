import React from "react";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="bg-slate-400 flex-grow">
      <Link to="/studentLogin">
        <div className="bg-slate-200 h-28 w-56 text-3xl font-bold text-orange-300 flex flex-col items-center justify-center flex-grow m-auto shadow-lg shadow-slate-700 hover:bg-orange-400 hover:text-white">
          <h1>STUDENTS </h1>
          <i class="fa-solid fa-graduation-cap text-5xl"></i>
        </div>
      </Link>
    </div>
  );
};
export default Main;
