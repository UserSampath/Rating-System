import React from "react";
import "./adminDashboard.css";
import Side from "../../components/side/Side";
import Navbars from "../../components/NavBar/Navbar";


const AdminDashboard = () => {
  return (
    <div className="adminPage">
      <Navbars />
      <div style={{ display: "flex",}}>
        <Side />
        <div style={{marginLeft:"230px",marginTop:"60px"}}>
          <h1>fsafs</h1>
          <h1>fsafs</h1>
          <h1>fsafs</h1>
          <h1>fsafs</h1>
          <h1>fsafs</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
