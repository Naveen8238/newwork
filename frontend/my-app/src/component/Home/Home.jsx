import React, { useContext } from "react";
import Navbar from "./Navbar";
import Aside from "./Aside";
import Main from "./main";
import Footer from "./Footer";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  // console.log(auth);
  return (
    <div>
      {auth ? (
        navigate("/studentHome")
      ) : (
        <div>
          <Navbar />
          <div className="flex">
            <Aside />
            <Main className="flex-" />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
