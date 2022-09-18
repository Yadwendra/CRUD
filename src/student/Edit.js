import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
 import { useNavigate } from "react-router-dom";
import axios from "axios";
function Edit() {
  const { id } = useParams();
 const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    async function getStudent() {
      try {
     const student =   await axios.get(`http://localhost:3333/student/${id}`);
     
   
        setStudent(student.data);
      } catch (error) {
        console.log("something is wrong");
      }
    }
     getStudent() 
    
  },[id]);
  

  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  }
  async function AddUser(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3333/student/${id}`, student);
      navigate("/")
      setStudent(student.data);
    } catch (error) {
      console.log("something is wrong");
    }
  }
  return (
    <>
       <div>
      
      <div className="container" text-center>
        <div className="row">
          
            <h1 className="text-center my-3" id="AddHeader">
              Edit Student
            </h1>
            <div className='col-md-6'>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label my-3"
              >
                Id
              </label>
              <input
                type="number"
                name="id"
                value={id}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Id"
              />
            </div>
            <div className='col-md-6'>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label my-3"
              >
                Enter Name
              </label>
              <input
                type="name"
                name="name"
                 value={student.name} onChange={e => onTextFieldChange(e)}
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
                 value={student.email} onChange={e => onTextFieldChange(e)}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email@.com"
              />
            </div>
            <div className="d-grid gap-2 my-3">
              <button
                type="button"
                className="btn btn-primary"onClick={e => AddUser(e)} >Update</button>
            </div>
          </div>
          <div className="text-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
          
        </div>
      </div>
    

    </>
  );
}

export default Edit;
