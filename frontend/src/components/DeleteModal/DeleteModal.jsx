import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import 'sweetalert2/dist/sweetalert2.min.css'; 
import Swal from 'sweetalert2'

const DeleteModal = ({handleDeleteClose,showDelete,userId}) => {

    const handleDelete = async () => {
        try {
          const response = await axios.delete(`http://localhost:4000/api/rate/deleteRateUser/${userId}`);
    
          if (response.status === 200) {
            const { message,deletedRateUser  } = response.data;
            Swal.fire({
                icon: 'success',
                title: 'Success! ',
                text: message,
                showConfirmButton: false,
                timer: 3000,
              });
              console.log('Rateuser data:', deletedRateUser);
              handleDeleteClose(); 

          
            
          } else {
            console.error('Error deleting user rate:', response.data.error);
          }
        } catch (error) {
          console.error('Error deleting user rate:', error.message);
        }
    }

  return (
    <div>   
        <Modal show={showDelete} onHide={handleDeleteClose}>
  <Modal.Header>
    <Modal.Title style={{ margin: "auto", paddingLeft: "0px", fontSize: "30px" }}>
      Confirm Deletion
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>Are you sure you want to delete this user?</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleDeleteClose}>
      Close
    </Button>
    <Button variant="danger" onClick={handleDelete}>
      Delete
    </Button>
  </Modal.Footer>
</Modal>

  </div>
  )
}

export default DeleteModal