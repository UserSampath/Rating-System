import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import Star from '../Star/Star';
import "./Modal.css";

const Modals = ({ data }) => {
  const [userRating, setUserRating] = useState(0); // Initialize to a default value
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const modalTimeout = setTimeout(() => {
      document.querySelector('.modal').classList.remove('show');
    }, 5000);

    return () => clearTimeout(modalTimeout);
  }, []);

  const handleStarClick = (clickedRating) => {
    setUserRating(clickedRating);
    console.log("Selected Stars:", clickedRating);
  };

  const handleSubmit = () => {
    // Handle submission logic (e.g., send the userRating to the server)
    // For demonstration purposes, set a flag to show success message
    setSubmitted(true);
  };

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<Star key={i} filled />);
    }

    if (hasHalfStar) {
      stars.push(<Star key={filledStars} filled={false} />);
    }

    return stars;
  };

  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog className="shadow">
        <Modal.Body className="text-center">
          <div className='modalImage'>
            <img src={data.image} alt="User" className='image' />
          </div>
          <div className='userD'>
            <div className='name'>
              <h4>{data.firstName}</h4>
              <h4>{data.LastName}</h4>
            </div>
            <p>{data.job}</p>
            <p>{data.description}</p>
          </div>
          <h5>Give your Rate</h5>
          <div className="rating-stars" onClick={(e) => e.stopPropagation()}>
            {[1, 2, 3, 4, 5].map((rating) => (
              <Star
                key={rating}
                filled={rating <= userRating}
                onClick={() => handleStarClick(rating)}
              />
            ))}
          </div>
          {!submitted ? (
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <p>Thank you for your rating!</p>
          )}
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default Modals;
