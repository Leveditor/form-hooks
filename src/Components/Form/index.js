import React from "react";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

export default function FormHooks() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container className="container">
          <h2>Sign Up</h2>
          <p>It's quick and easy</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={4}><hr/></Col>
            </Row>
            <Row>
              <Col md={2}>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Control type="type" placeholder="First name" {...register("firstName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                  <Form.Text className="text-muted">
                    {errors?.firstName?.type === "required" && <small className="text-danger">This field is required</small>}
                    {errors?.firstName?.type === "maxLength" && <small className="text-danger">First name cannot exceed 20 characters</small>}
                    {errors?.firstName?.type === "pattern" && <small className="text-danger">Alphabetical characters only</small>}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="type" placeholder="Last name" {...register("lastName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                  <Form.Text className="text-muted">
                    {errors?.firstName?.type === "required" && <small className="text-danger">This field is required</small>}
                    {errors?.firstName?.type === "maxLength" && <small className="text-danger">First name cannot exceed 20 characters</small>}
                    {errors?.firstName?.type === "pattern" && <small className="text-danger">Alphabetical characters only</small>}
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <InputMask mask="(99)99999-9999" className="form-control" placeholder="E-mail" {...register("number", {required: true, pattern: /^\([1-9]{2}\)(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/})} />
                  <Form.Text className="text-muted">
                    {errors?.number?.type === "required" && <small className="text-danger">This field is required</small>}
                    {errors?.number?.type === "pattern" && <small className="text-danger">This is not a valid number</small>}
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <small>Birthday</small>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <InputMask mask="99/99/9999" className="form-control" type="text" placeholder="Birthday" {...register("gender", { required: true, pattern: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/ })} />
                  <Form.Text className="text-muted">
                    {errors?.gender?.type === "required" && <small className="text-danger">This field is required</small>}
                  </Form.Text>
                </Form.Group>
              </Col>
              
              <Col md={2}>
                <small>Gender</small>
                <Form.Group className="mb-3">
                  
                  <Form.Select >
                    <option>Famale</option>
                    <option>Male</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="password" placeholder="New password" {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/ })} />
                  <Form.Text className="text-muted">
                    {errors?.password?.type === "required" && <small className="text-danger">This field is required</small>}
                    {errors?.password?.type === "pattern" && <small className="text-danger">The password must have at least one number one uppercase letter and one lowercase letter with special characters !@#$%&</small>}
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
            
            <div className="containerButton">
              <Button className="buttonSubmit" type="submit">Sign Up</Button>
              </div>
        </Form>
        
      </Container>
    </>
  );
}
