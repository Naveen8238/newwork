import React, { useContext } from "react";
import Navbar from "../Home/Navbar";
import Aside from "../Home/Aside";
import Footer from "../Home/Footer";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const StudentHomePage = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <div className="flex">
        <Aside />
        <section className="flex-1 bg-slate-400">
          <button
            className="bg-red-500 px-5 py-3 rounded-lg float-right text-white font-bold hover:bg-white hover:text-red-400 "
            onClick={handleLogout}
          >
            LOGOUT
            <i class="fa-solid fa-right-to-bracket ml-2 text-lg"></i>
          </button>
          <Link to="/studentProfile">
            <div className="bg-yellow-200 mt-20 h-20 w-60 m-auto shad-lg shadow-black text-xl font-bold text-orange-700 flex flex-col items-center justify-center gap-2 md:w-96 md:h-28 md:text-2xl hover:bg-orange-400 hover:text-yellow-50 cursor-pointer">
              MY PROFILE
              <i class="fa-solid fa-user"></i>
            </div>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default StudentHomePage;
