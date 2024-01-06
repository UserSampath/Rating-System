import React from "react";
import Container from "react-bootstrap/esm/Container";
import IconButton from "../IconButton/IconButton";
import { FaStar } from "react-icons/fa";
const UserDetails = () => {
  return (
    <div>
      {" "}
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
            src="../../../image/profile.png"
            alt=""
            style={{ borderRadius: "50px", width: "50px", height: "50px" }}
          />
          <div style={{ fontSize: "18px", marginLeft: "10px" , color:"green",fontWeight:"600" }}>
            Nalaka Sampath
          </div>
        </div>
        <p style={{fontSize:"17px", color:"gray",fontWeight:"600"}} className="col-2">Software engineer</p>

        <div className="col-2 d-flex justify-content-center align-items-center">
          {[...Array(4)].map((index) => (
            <FaStar color="gold" key={index} />
          ))}
          {[...Array(5-4)].map((index) => (
            <FaStar color="gray" key={index} />
          ))}
          <div style={{ fontSize: "16px", marginTop: "4px" ,color:"gray"}}>(5)</div>
        </div>

        <div className="m-3 d-flex">
          <IconButton text="Edit" buttonColor={"green"} />
          <IconButton text="Delete" buttonColor={"red"} />
        </div>
      </Container>
    </div>
  );
};

export default UserDetails;
