import React from 'react'
import Navbars from '../../components/NavBar/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import Modals from '../../components/Modal/Modal';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Men from "../../../image/Men.png"
const Rating = () => {
  const [index, setIndex] = useState(0);

  const modalData = [
    {
      firstName: "John",
      LastName: "Doe",
      job: "Software Engineer",
      description: "A software engineer designs, develops, and maintains software applications, using programming skills and problem-solving abilities. They work collaboratively to create efficient and functional solutions, contributing to the entire software development lifecycle across various industries.",
      image: Men,
 
    },
    {
      firstName: "John",
      LastName: "Doe",
      job: "Graphic Designer",
      description: "A software engineer designs, develops, and maintains software applications, using programming skills and problem-solving abilities. They work collaboratively to create efficient and functional solutions, contributing to the entire software development lifecycle across various industries.",
      image: Men,
    },
    {
      firstName: "John",
      LastName: "Doe",
      job: "Marketing Specialist",
      description: "A software engineer designs, develops, and maintains software applications, using programming skills and problem-solving abilities. They work collaboratively to create efficient and functional solutions, contributing to the entire software development lifecycle across various industries.",
      image: Men,
    },
    {
      firstName: "kasun",
      LastName: "Doe",
      job: "Marketing Specialist",
      description: "A software engineer designs, develops, and maintains software applications, using programming skills and problem-solving abilities. They work collaboratively to create efficient and functional solutions, contributing to the entire software development lifecycle across various industries.",
      image: Men,
    },
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Navbars />
      <div className='d-flex justify-content-center align-items-center vh-100'>
      <Carousel activeIndex={index} onSelect={handleSelect} >
        {modalData.map((data, i) => (
          <Carousel.Item key={i}>
            <Modals data={data} />
          </Carousel.Item>
        ))}
      </Carousel>
    
      </div>
    </div>
  );
};
export default Rating