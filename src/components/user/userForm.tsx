import React from "react";
import Button from "react-bootstrap/esm/Button";

import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import useUserForm from "../../hooks/useUserForm";

const UserForm: React.FC = () => {
  const { formData, errors, handleChange, handleSubmit } = useUserForm({
    username: "",
    email: "",
  });

  return (
    <Container className="my-4">
      <fieldset>
        <legend>User Information</legend>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.username && (
              <Form.Text className="text-danger">{errors.username}</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && (
              <Form.Text className="text-danger">{errors.email}</Form.Text>
            )}
          </Form.Group>
          <Button variant="secondary" type="submit">
            {" "}
            Submit
          </Button>
          <p>{JSON.stringify(formData)}</p>
        </Form>
      </fieldset>
    </Container>
  );
};

export default UserForm;
