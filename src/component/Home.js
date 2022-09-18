import { Typography, Box } from "@mui/material";

import React, { useState } from "react";
import "./home.css";
import List from "../student/List.js";
import axios from "axios";
function Home() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
  });
  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }
  async function AddUser(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3333/student`, student);
       
      setStudent(student.data);
    } catch (error) {
      console.log("something is wrong");
    }
  }
  return (
    <div>
      <Box textAlign="center">
        <Typography className="heading" variant="h2">
          React Crud with Api call
        </Typography>
      </Box>
      <div className="container" text-center>
        <div className="row">
          <div className="col-md-6 ">
            <h1 className="text-center my-3" id="AddHeader">
              Add Student
            </h1>
            <div>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label my-3"
              >
                Enter Name
              </label>
              <input
                type="name"
                name="name"
                onChange={(e) => onTextFieldChange(e)}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label my-3"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => onTextFieldChange(e)}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email@.com"
              />
            </div>
            <div className="d-grid gap-2 my-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={AddUser}
              >
                Add
              </button>
            </div>
          </div>
          <div className=" col-md-6">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
