const studentModel = require("../model/studentModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//token generation
const generateToken = (id) => {
  let studentId = id.toString();
  let token = jwt.sign(studentId, "naveen123");
  return token;
};

const getStudent = async (req, res) => {
  let { token } = req.params;
  let id = jwt.verify(token, "naveen123");
  let studentDetails = await studentModel
    .findOne({ _id: id })
    .select("-password -_id -__v");
  res.send(studentDetails);
};

const studentSingUp = async (req, res) => {
  let data = req.body;
  let { fName, lName, password, email, sID, mobile } = data;
  if (!fName || !lName || !password || !email || !sID || !mobile) {
    return res.status(400).send("Provide all required feild");
  }
  let isEmailAvailable = await studentModel.findOne({ email });
  if (isEmailAvailable) {
    return res.status(401).send({ message: "Student already Register" });
  } else {
    let hasedPass = await bcrypt.hash(password, 10);
    let student = { ...data, password: hasedPass };
    let studentUpload = new studentModel(student);
    await studentUpload.save();
    return res.status(201).send({ token: generateToken(studentUpload._id) });
  }
};

const studentLogin = async (req, res) => {
  let { password, email } = req.body;
  let student = await studentModel.findOne({ email });
  if (student) {
    let matchedPass = await bcrypt.compare(password, student.password);
    if (matchedPass) {
      res.status(200).send({ token: generateToken(student._id) });
    } else {
      res.status(400).send({ msg: "password is not matching" });
    }
  } else {
    res.status(400).send({ msg: "Student not registered" });
  }
};

module.exports = {
  getStudent,
  studentSingUp,
  studentLogin,
};
