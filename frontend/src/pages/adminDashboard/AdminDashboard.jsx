import React from "react";
import "./adminDashboard.css";
import Side from "../../components/side/Side";
import Navbars from "../../components/NavBar/Navbar";
import Container from "react-bootstrap/esm/Container";

import IconButton from "../../components/IconButton/IconButton";
import UserDetails from "../../components/userDetail/UserDetails";
import Button from "../../components/Button/Button"


const AdminDashboard = () => {
  return (
    <div className="adminPage">
      <Navbars />
      <div style={{ display: "flex" }}>
        <Side />
        <div
          className="ml-230px"
          style={{ marginLeft: "230px", marginTop: "50px", width: "100%" }}>
          <div>
         // add button
          </div>
          <UserDetails />
          <UserDetails />
          <UserDetails />
          <UserDetails />
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
