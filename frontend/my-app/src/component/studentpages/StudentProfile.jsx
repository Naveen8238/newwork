import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentProfile = () => {
  const [studentDetails, setStudentDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    sID: "",
    mobile: "",
  });
  useEffect(() => {
    let token = localStorage.getItem("token");
    async function getData() {
      let response = await axios.get(`http://127.0.0.1:5000/student/${token}`);
      let data = await response.data;
      setStudentDetails(data);
    }
    getData();
  }, []);
  return (
    <div className="bg-slate-200 min-h-screen pt-20">
      <div className="text-4xl text-orange-400 text-center font-bold">
        STUDENT PROFILE PAGE
      </div>
      <form className="bg-slate-700 text-white w-[50%] m-auto mt-10 flex flex-col gap-5 justify-center items-center">
        <div className="flex gap-10">
          <label htmlFor="" className="text-2xl">
            F-NAME
          </label>
          <input
            type="text"
            value={studentDetails.fName}
            className="w-[200px] h-10 text-black focus:outline-none"
            readOnly
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="" className="text-2xl">
            L-NAME
          </label>
          <input
            type="text"
            value={studentDetails.lName}
            className="w-[200px] h-10 text-black focus:outline-none"
            readOnly
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="" className="text-2xl">
            MoBILE
          </label>
          <input
            type="text"
            value={studentDetails.mobile}
            className="w-[200px] h-10 text-black focus:outline-none"
            readOnly
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="" className="text-2xl">
            SID
          </label>
          <input
            type="text"
            value={studentDetails.sID}
            className="w-[200px] h-10 text-black focus:outline-none"
            readOnly
          />
        </div>
        <div className="flex gap-10">
          <label htmlFor="" className="text-2xl">
            EMAIL
          </label>
          <input
            type="text"
            value={studentDetails.email}
            className="w-[200px] h-10 text-black focus:outline-none"
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default StudentProfile;
