import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Update() {
  const id = useParams().id;
  const [user, setUser] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const baseURL = `https://61a9de6033e9df0017ea3fda.mockapi.io/fakeData/${id}`;
  useEffect(() => {
    axios.get(baseURL).then((response) => setUser(response.data));
  }, []);
  const onSubmit = (data) => {
    axios.put(baseURL, data);
    alert("Done!");
    reset();
  };
  return (
    <div className="container"  style={{maxWidth: '500px'}}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            defaultValue={user.firstName}
            placeholder="Enter first name ..."
            {...register("firstName")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            defaultValue={user.lastName}
            placeholder="Enter last name ..."
            {...register("lastName")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            defaultChecked={user.checkbox}
            label="Check me out"
            {...register("checkbox")}
          />
        </Form.Group>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to={"/"}>
            <Button variant="secondary">Back</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
