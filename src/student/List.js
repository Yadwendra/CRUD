import React, { useState, useEffect } from "react";
import { Button, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

import axios from "axios";
function List() {
  
  const [name, setName] = useState([]);

  useEffect(() => {
    getStudent();
  });

  async function getStudent() {
    try {
      const name = await axios.get(`http://localhost:3333/student`);
      
      setName(name.data);
    } catch (error) {
      console.log("something is wrong");
    }
  }
   const handleDelete = async id =>{
    await axios.delete(`http://localhost:3333/student/${id}`)
    
   }
  return (
    <>
      <div className=" my-3">
        <h1 className="text-center" id="list">
          Student List
        </h1>
        <table className="table my-3">
          <thead className="Theading">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {name.map((student, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    <Tooltip title="View">
                      <Button>
                        <Link to={`/view/${student.id}`}>
                          {" "}
                          <VisibilityIcon />{" "}
                        </Link>
                      </Button>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <Button>
                        <Link to={`/edit/${student.id}`}>
                          {" "}
                          <EditIcon />{" "}
                        </Link>
                      </Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <Button onClick={() => handleDelete(student.id)}><DeleteIcon />{" "}
                      </Button>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default List;
