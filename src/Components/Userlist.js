import React, { useState, useEffect } from "react";
import "./Userlist.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import UserDetailModal from "./UserDetailModal";

const Userlist = () => {
  const [modalData, SetModalData] = useState({});
  // console.log(modalData, "data");
  const [userData, setUserData] = useState([]);
  const [show, setShow] = useState(false);

  const handleShow = (value) => {
    SetModalData(value);
    setShow(true);
    // console.log(value, "vliue");
  };
  const getUserList = async () => {
    try {
      let res = await axios.get("https://reqres.in/api/users");
      console.log(res.data);
      setUserData(res.data.data);
      // console.log(res.data);
    } catch (error) {
      console.log("something went wrong");
    }
  };
  useEffect(() => {
    getUserList();
  }, []);
  // console.log(userData, "clg");
  const handleChange = (e) => {
    SetModalData({ ...modalData, [e.target.name]: e.target.value });
    console.log(e.target, "str", modalData);
  };
  const OnSubmitFrom = async (e) => {
    e.preventDefault();
    // console.log("submit");
    // console.log(modalData);
    console.log(`https://reqres.in/api/users/${modalData.id}`);
    try {
      const updateData = await axios.put(
        `https://reqres.in/api/users/${modalData.id}`,
        modalData
      );
      console.log(updateData, "sub");
      setShow(false);
      getUserList();
    } catch (error) {
      console.log("something went wrong");
    }
  };
  return (
    <>
      <h1 className="mt-4">Hello ReqRes Users!</h1>
      <UserDetailModal
        setShow={setShow}
        show={show}
        data={modalData}
        handleChange={handleChange}
        OnSubmitFrom={OnSubmitFrom}
      />
      <CardGroup className=" p-5">
        <Container className="mt-4">
          <Row className="gap-5 flex justify-content-md-center ">
            {userData.map((value, i) => {
              return (
                <Card style={{ width: "18rem" }} key={i} className="p-0 card ">
                  <Card.Body className="text-center bg-primary text-white">
                    <Card.Title className="text fw-bold">
                      {value.first_name}
                    </Card.Title>
                    <Card.Text className="text">{value.email}</Card.Text>
                  </Card.Body>
                  <div className="box">
                    <Card.Img
                      variant="top"
                      src={value.avatar}
                      className="card-img-top h-100"
                    />
                    <Button
                      className="icon"
                      onClick={(e) => {
                        handleShow(value);
                        // console.log(value, "e");
                      }}
                    >
                      <FontAwesomeIcon icon={faPen} className="fa-1x " />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </Row>
        </Container>
      </CardGroup>
    </>
  );
};

export default Userlist;
