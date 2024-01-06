import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../../image/Logo.png";
const Navbars = () => {
  return (
    <div style={{ position: "fixed", width: "100% " }}>
      <Navbar expand="lg" className="nav" style={{ height: "50px" }}>
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center ms-auto">
          <img
            style={{ marginLeft: "30px" }}
            src={Logo}
            alt="Lenzz Rating system logo"
            height="40" // Set the desired height
            className="d-inline-block align-top"
          />
          <span className="ms-4">Lenzz Rating System</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Add your navigation links or components here */}
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <nav className="navbar navbar-light bg-light shadow">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="imageDiv">
                        <img src={Logo} alt="Logo" className="Logo" />
                        <h2 className="input ">Lenzz Rating System</h2>
                    </div>
                </div>
            </div>
        </nav> */}
    </div>
  );
};

export default Navbars;
