import React from "react";
import "./adminDashboard.css";
import Side from "../../components/side/Side";
import Navbars from "../../components/NavBar/Navbar";
import Container from "react-bootstrap/esm/Container";
import Button from "../../components/Button/Button";
import IconButton from "../../components/IconButton/IconButton";


const AdminDashboard = () => {
  return (
    <div className="adminPage">
      <Navbars />
      <div style={{ display: "flex" }}>
        <Side />
        <div
          className="ml-230px"
          style={{ marginLeft: "230px", marginTop: "50px", width: "100%" }}>
          <Container
            className="d-flex justify-content-between align-items-center mt-2"
            style={{
              backgroundColor: "#dff8dd79",
              borderBottom: "1px solid #91fb8c",
              borderRadius: "4px",
              height: "60px",
              boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
            }}>
            <div
              className="col-3"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <img
                src="../../../image/pic1.png"
                alt=""
                style={{ borderRadius: "20px", width: "50px", height: "50px" }}
              />
              <div style={{ fontSize: "18px", marginLeft: "10px" }}>
                Nalaka Sampath
              </div>
            </div>
            <p className="col-2">Software engineer</p>

            <p className="col-2">rating placer</p>
            <div className="m-3 d-flex">
              <IconButton text="Edit" buttonColor={"green"} />
              <IconButton text="Delete" buttonColor={"red"} />
            </div>
          </Container>

          <Container
            className="d-flex justify-content-between align-items-center mt-2"
            style={{
              backgroundColor: "#dff8dd79",
              borderBottom: "1px solid #91fb8c",
              borderRadius: "4px",
              height: "60px",
              boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
            }}>
            <div
              className="col-3"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <img
                src="../../../image/pic1.png"
                alt=""
                style={{ borderRadius: "20px", width: "50px", height: "50px" }}
              />
              <div style={{ fontSize: "18px", marginLeft: "10px" }}>
                Nalaka Sampath
              </div>
            </div>
            <p className="col-2">Software engineer</p>

            <p className="col-2">rating placer</p>
            <div className="m-3 d-flex">
              <IconButton text="Edit" buttonColor={"green"} />
              <IconButton text="Delete" buttonColor={"red"} />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
