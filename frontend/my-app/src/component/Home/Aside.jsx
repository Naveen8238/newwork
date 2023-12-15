import React from "react";

function Aside() {
  return (
    <div className="bg-orange-400 min-h-[80vh] min-w-[30vw] md:max-w-[200px] flex flex-col">
      <div className="">
        <img
          src="https://images.shiksha.com/mediadata/images/1653047204php2C7m4l.jpeg"
          className="h-12 w-12  border-gray-950 rounded-full m-9"
        ></img>
      </div>
      <div>
        <li className="m-8 hover:text-blue-600 list-none">SCHOOL NAME</li>
        <li className="m-8 hover:text-blue-600 list-none">PLACE</li>
        <li className="m-8 hover:text-blue-600 list-none">COURSES</li>
      </div>
    </div>
  );
}

export default Aside;
