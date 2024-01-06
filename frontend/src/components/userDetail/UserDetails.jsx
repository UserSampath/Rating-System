import {useEffect, useState} from "react";
import Container from "react-bootstrap/esm/Container";
import IconButton from "../IconButton/IconButton";
import { FaStar } from "react-icons/fa";
import EditUserModal from "../EditUserModal/EditUserModal";
import DeleteModal from "../DeleteModal/DeleteModal";
const UserDetails = ({ user }) => {
  const [show, setShow] = useState(false);
  const [showDelete, setDeleteShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);
  const [avgStars, setAvgStars] = useState(0);

  

useEffect(() => {
  const getAvgStars = () => {
    if (user.Rate.length === 0) {
      setAvgStars(0);
    } else {
      let sumStars = 0;
      for (let i = 0; i < user.Rate.length; i++) {
        sumStars = sumStars + user.Rate[i];
      }
      setAvgStars(Math.floor(sumStars / user.Rate.length));
    }
  };

  getAvgStars();
}, [user]);
  
  
  const getImageSrc = () => {
      return "../../../image/profile.png";
     if (
       user.Image &&
       user.Image.type === "Buffer" &&
       Array.isArray(user.Image.data)
     ) {
       const imageBuffer = Buffer.from(user.Image.data);
       const base64Image = imageBuffer.toString("base64");
       return `data:image/png;base64,${base64Image}`;
     }
     // If the format is not as expected, return a default image source
    
   };


 

  return (
    <div>
      {" "}
      <Container
        className="d-flex justify-content-between align-items-center mt-2"
        style={{
          backgroundColor: "#dff8dd79",
          borderBottom: "1px solid #91fb8c",
          borderRadius: "4px",
          height: "55px",
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
            src={getImageSrc}
            alt=""
            style={{ borderRadius: "50px", width: "45px", height: "45px" }}
          />
          <div
            style={{
              fontSize: "18px",
              marginLeft: "10px",
              color: "green",
              fontWeight: "600",
            }}>
            {user.firstName + " " + user.lastName}
          </div>
        </div>
        <p
          style={{ fontSize: "17px", color: "gray", fontWeight: "600" }}
          className="col-2">
          {user.Job}
        </p>

        <div className="col-2 d-flex justify-content-center align-items-center">
          {[...Array(avgStars)].map((index) => (
            <FaStar color="gold" key={index} />
          ))}
          {[...Array(5 - avgStars)].map((index) => (
            <FaStar color="gray" key={index} />
          ))}
          <div style={{ fontSize: "16px", marginTop: "4px", color: "gray" }}>
            ({user.Rate.length})
          </div>
        </div>

        <div className="m-3 d-flex">
          <button
            style={{
              background: "none",
              border: "none",
              padding: 0,
              margin: 0,
            }}
            onClick={handleShow}>
            <IconButton text="Edit" buttonColor={"green"} />
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              padding: 0,
              margin: 0,
            }}
            onClick={handleDeleteShow}>
            <IconButton text="Delete" buttonColor={"red"} />
          </button>
        </div>
      </Container>
      <EditUserModal show={show} handleClose={handleClose} />
      <DeleteModal
        showDelete={showDelete}
        handleDeleteClose={handleDeleteClose}
      />
    </div>
  );
};

export default UserDetails;
