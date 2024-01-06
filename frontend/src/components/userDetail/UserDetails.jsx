import {useState} from "react";
import Container from "react-bootstrap/esm/Container";
import IconButton from "../IconButton/IconButton";
import { FaStar } from "react-icons/fa";
import EditUserModal from "../EditUserModal/EditUserModal";
import DeleteModal from "../DeleteModal/DeleteModal";
const UserDetails = () => {
  const [show, setShow] = useState(false);
  const [showDelete, setDeleteShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);

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
          {[...Array(4)].map(() => (
            <FaStar color="gold" />
          ))}
          {[...Array(5-4)].map(() => (
            <FaStar color="gray" />
          ))}
          <div style={{ fontSize: "16px", marginTop: "4px" ,color:"gray"}}>(5)</div>
        </div>

        <div className="m-3 d-flex">
          <button style={{background: "none",border: "none",padding: 0 ,margin: 0}} onClick={handleShow}>
          <IconButton text="Edit" buttonColor={"green"}  />
          </button>
          <button style={{background: "none",border: "none",padding: 0 ,margin: 0}} onClick={handleDeleteShow}>
            <IconButton text="Delete" buttonColor={"red"} />
          </button>

        </div>
      </Container>
      <EditUserModal show={show} handleClose={handleClose} />
      <DeleteModal showDelete={showDelete} handleDeleteClose={handleDeleteClose} />

      
    </div>
  );
};

export default UserDetails;
