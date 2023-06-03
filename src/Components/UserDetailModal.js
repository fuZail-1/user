import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const buttonStyle = {
  minWidth: "100%",
  width: "100%",
};
const buttontext = {
  display: "flex",
};

const UserDetailModal = (props) => {
  // console.log();

  const handleClose = () => props.setShow(false);

  // console.log(props.data.email, "25");
  return (
    <>
      <Modal centered show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>Update Information Modal</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full name</Form.Label>
              <input
                type="name"
                name="first_name"
                className="form-control"
                id="exampleInputName"
                aria-describedby="nameHelp"
                placeholder="Enter name"
                value={props.data.first_name}
                onChange={(e) => {
                  props.handleChange(e);
                  // console.log(props, "fistname");
                }}
              ></input>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email id</Form.Label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="nameHelp"
                placeholder="Enter email"
                value={props.data.email}
                onChange={(e) => {
                  props.handleChange(e);
                  // console.log(props, "fistname");
                }}
              ></input>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContact">
              <Form.Label>Contact number</Form.Label>
              <Form.Control type="password" placeholder="contact" />
            </Form.Group>
            <div style={buttontext}>
              <Form.Text id="passwordHelpBlock" muted>
                Profile Picture
              </Form.Text>
              <Button variant="primary" type="submit" className="ms-auto mb-3">
                Choose Image
              </Button>
            </div>
            <Button
              variant="primary"
              type="submit"
              size="lg"
              style={buttonStyle}
              onClick={props.OnSubmitFrom}
            >
              SUBMIT
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UserDetailModal;
