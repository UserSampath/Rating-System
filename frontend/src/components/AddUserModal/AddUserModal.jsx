import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Navbars from '../../components/NavBar/Navbar'
import Button from 'react-bootstrap/esm/Button'
import {  Form } from 'react-bootstrap'; // Make sure to import the necessary components from react-bootstrap

import { FaUser, FaBriefcase, FaFile, FaImage,FaPlus } from 'react-icons/fa'; // Import icons as needed

import "./AddUserModal.css"

const AddUserModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    handleClose();
  };

  return (
    <div>
    <Navbars />
            {/* <div className='btncontainer'>
        <div className='btnDiv'>
            <Button style={{ backgroundColor: 'green', fontSize: '1.5em' }} onClick={handleShow}>
            <FaPlus />
            </Button>
        </div>
        </div> */}
  <Modal show={show} onHide={handleClose}>
      <Modal.Header  >
      <Modal.Title style={{ margin: "auto",paddingLeft:"0px",fontSize:"30px" }}>Add User</Modal.Title>
    </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formFirstName">
            <Form.Label>
              <FaUser /> First Name:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" style={{ borderRadius: '10px' }} />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>
              <FaUser /> Last Name:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" style={{ borderRadius: '10px' }} />
          </Form.Group>

          <Form.Group controlId="formJob">
            <Form.Label>
              <FaBriefcase /> Job:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter your job" style={{ borderRadius: '10px' }} />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>
              <FaFile /> Description:
            </Form.Label>
            <Form.Control as="textarea" placeholder="Enter your description" style={{ borderRadius: '10px' }} />
          </Form.Group>

          <Form.Group controlId="formImage">
            <Form.Label>
              <FaImage /> Image Upload:
            </Form.Label>
            <Form.Control type="file" accept="image/*" style={{ borderRadius: '10px' }} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

</div>

  )
}

export default AddUserModal