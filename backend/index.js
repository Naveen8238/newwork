const express = require("express");
const dbConnect = require("./db/dbConnect");
const studentRouter = require("./Routes/studentRoute");
const cors = require("cors");

//PORT and Hostname
const PORT = 5000;
const hostName = "127.0.0.1";

//server
const app = express();

//middleware
app.use(express.json());

//cors
app.use(cors());

//routes
app.use("/student", studentRouter);

//app listen

app.listen(PORT, hostName, async () => {
  await dbConnect();
  console.log(
    `server started at http://${hostName}:${PORT} and database connected`
  );
});
