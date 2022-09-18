import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
function View() {
  const { id } = useParams();
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getStudent();
  });
  async function getStudent() {
    try {
      const student = await axios.get(`http://localhost:3333/student/${id}`);

      setStudent(student.data);
    } catch (error) {
      console.log("something is wrong");
    }
  }

  return (
    <div className="container text-center my-3">
      <div>
        <h2>Student Details</h2>
      </div>
      <table className="table my-3">
        <thead className="Theading ">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{student.id}</th>
            <td>{student.name}</td>
            <td>{student.email}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default View;
