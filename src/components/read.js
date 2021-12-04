import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Read() {
  const [data, setData] = useState([]);
  const baseURL = "https://61a9de6033e9df0017ea3fda.mockapi.io/fakeData";
  useEffect(() => {
    axios.get(baseURL).then((response) => setData(response.data));
  }, []);
  const getData = () => {
    axios.get(baseURL).then((getData) => {
      setData(getData.data);
    });
  };
  const onDelete = (id) => {
    axios.delete(`${baseURL}/${id}`).then(() => getData());
    alert("Done!");
  };
  return (
    <div className="container">
        <div>
      <Link to={"/create"}>
        <Button variant="primary" className="mb-3">
          Add
        </Button>
      </Link>
      </div>
      <Table striped bordered hover  className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Checked</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.checkbox ? "Checked" : "Unchecked"}</td>
              <td className="d-flex justify-content-evenly">
                <Link to={`/update/${user.id}`}>
                  <Button variant="warning">Update</Button>
                </Link>
                <Button onClick={() => onDelete(user.id)} variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
