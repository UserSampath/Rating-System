import {useState} from "react";
import "./adminDashboard.css";
import Side from "../../components/side/Side";
import Navbars from "../../components/NavBar/Navbar";
import Container from "react-bootstrap/esm/Container";

import IconButton from "../../components/IconButton/IconButton";
import UserDetails from "../../components/userDetail/UserDetails";
import Button from "../../components/Button/Button"
import { FaPlus } from 'react-icons/fa'; // Import icons as needed
import AddUserModal from "../../components/AddUserModal/AddUserModal";
import Men from "../../../image/Men.png"


const AdminDashboard = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


 
  
  return (
    <div className="adminPage">
      <Navbars />
      <div style={{ display: "flex" }}>
        <Side />
        <div
          className="ml-230px"
          style={{ marginLeft: "230px", marginTop: "50px", width: "100%" }}>
          <div>
          <div className='btncontainer'>
        <div className='btnDiv'>
            <button  onClick={handleShow} className="button-1"  style={{
                display: 'inline-block',
                padding: '10px 20px', 
                border: '1px solid #ccc', 
                borderRadius: '5px',
                boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.1)', 
                cursor: 'pointer',
              }}>
            <FaPlus />
            </button>
        </div>
        </div>
          </div>
          <UserDetails />
          <UserDetails />
          <UserDetails />
          <UserDetails />
          <UserDetails />
        </div>
      </div>
      <AddUserModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default AdminDashboard;
