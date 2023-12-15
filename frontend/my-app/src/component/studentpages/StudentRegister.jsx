import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentRegister = () => {
  const navigate = useNavigate();
  let [studentData, setStudentData] = useState({});
  const onChangeHandler = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setStudentData({
      ...studentData,
      [name]: value,
    });
    // console.log(studentData);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let { fName, lName, email, mobile, password, sID } = studentData;
    if (!fName || !lName || !email || !password || !mobile || !sID) {
      alert("Provide all the Details  before Submitting");
    } else {
      let res = await fetch("http://127.0.0.1:5000/student/singup", {
        method: "POST",
        body: JSON.stringify(studentData),
        headers: { "Content-Type": "application/json" },
      });
      let result = await res.json();
      if (result.msg) {
        alter(result.msg);
      } else {
        localStorage.setItem("token", result.token);
        navigate("/studentHome");
      }
    }
  };
  return (
    <>
      <section class="bg-blue-50 dark:bg-blue-900">
        <div class="flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-blue-900 dark:text-white"
          >
            <img
              class="w-8 h-8 mr-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0B0CUH_FRz8uwhimK43G2TgBaSDw3dOvsA&usqp=CAU"
              alt="logo"
            />
            studentRegister
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-blue-800 dark:border-blue-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-blue-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form
                class="space-y-4 md:space-y-6"
                onSubmit={(e) => onSubmitHandler(e)}
              >
                <div>
                  <label
                    for="fName"
                    class="block mb-2 text-sm font-medium text-blue-900 dark:text-white"
                  >
                    FirstName
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    class="bg-blue-50 border border-blue-300 text-blue-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your first Name"
                    required=""
                    onChange={(e) => onChangeHandler(e)}
                  />
                </div>
                <div>
                  <label
                    for="lName"
                    class="block mb-2 text-sm font-medium text-blue-900 dark:text-white"
                  >
                    LastName
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    class="bg-blue-50 border border-blue-300 text-blue-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your last Name"
                    required=""
                    onChange={(e) => onChangeHandler(e)}
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-blue-900 dark:text-white"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-blue-50 border border-blue-300 text-blue-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    required=""
                    onChange={(e) => onChangeHandler(e)}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-blue-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-blue-50 border border-blue-300 text-blue-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => onChangeHandler(e)}
                  />
                </div>
                <div>
                  <label
                    for="mobile"
                    class="block mb-2 text-sm font-medium text-blue-900 dark:text-white"
                  >
                    mobile number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    id="mobile"
                    placeholder="34567"
                    class="bg-blue-50 border border-blue-300 text-blue-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => onChangeHandler(e)}
                  />
                </div>
                <div>
                  <label
                    for="sID"
                    class="block mb-2 text-sm font-medium text-blue-900 dark:text-white"
                  >
                    userID
                  </label>
                  <input
                    type="text"
                    name="sID"
                    id="sID"
                    placeholder="UserId"
                    class="bg-blue-50 border border-blue-300 text-blue-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => onChangeHandler(e)}
                  />
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-blue-300 rounded bg-blue-50 focus:ring-3 focus:ring-primary-300 dark:bg-blue-700 dark:border-blue-600 dark:focus:ring-primary-600 dark:ring-offset-blue-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-blue-500 dark:text-blue-300"
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p class="text-sm font-light text-blue-500 dark:text-blue-400">
                  Already have an account?{" "}
                  <Link
                    to="/studentLogin"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default StudentRegister;
