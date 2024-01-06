import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { Form } from 'react-bootstrap';
import Axios from 'axios';
import { FaUser, FaBriefcase, FaFile, FaImage } from 'react-icons/fa';
import 'sweetalert2/dist/sweetalert2.min.css'; 
import Swal from 'sweetalert2'

import "./AddUserModal.css";

const AddUserModal = ({ handleClose, show }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        Job: '',
        Description: '',
        Image: null, 
      });
    
      const handleInputChange = (e) => {
        const { name, value, files } = e.target;
    
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: files ? files[0] : value,
        })); 
      };
    
      const handleSubmit = async () => {
        try {
          const formDataObj = new FormData();
          formDataObj.append('firstName', formData.firstName);
          formDataObj.append('lastName', formData.lastName);
          formDataObj.append('Job', formData.Job);
          formDataObj.append('Description', formData.Description);
          formDataObj.append('Image', formData.Image); 
          console.log('FormData:');
          for (const [name, value] of formDataObj.entries()) {
            console.log(`${name}: ${value}`);
          } 
      
          const response = await Axios.post('http://localhost:4000/api/rate/addRateUser', formDataObj, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('Response:', response.data); 
          if (response.status === 200) {
            const { message, Rateuser } = response.data;
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: message,
                showConfirmButton: false,
                timer: 3000,
              });
              console.log('Rateuser data:', Rateuser);
          }
          handleClose();
        } catch (error) {
          console.error('Error submitting data:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Error submitting data. Please try again.',
          });
        }
      };
    

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title style={{ margin: "auto", paddingLeft: "0px", fontSize: "30px" }}>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFirstName">
              <Form.Label>
                <FaUser /> First Name:
              </Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                style={{ borderRadius: '10px' }}
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>
                <FaUser /> Last Name:
              </Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                style={{ borderRadius: '10px' }}
              />
            </Form.Group>

            <Form.Group controlId="formJob">
              <Form.Label>
                <FaBriefcase /> Job:
              </Form.Label>
              <Form.Control
                type="text"
                name="Job"
                value={formData.Job}
                onChange={handleInputChange}
                placeholder="Enter your job"
                style={{ borderRadius: '10px' }}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>
                <FaFile /> Description:
              </Form.Label>
              <Form.Control
                as="textarea"
                name="Description"
                value={formData.Description}
                onChange={handleInputChange}
                placeholder="Enter your description"
                style={{ borderRadius: '10px' }}
              />
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>
                <FaImage /> Image Upload:
              </Form.Label>
              <Form.Control
                type="file"
                name="Image"
                accept="image/*"
                onChange={handleInputChange}
                style={{ borderRadius: '10px' }}
              />
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
  );
};

export default AddUserModal;
