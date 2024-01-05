import React from 'react'
import "./navbar.css"
import Logo from "../../../image/Logo.png"
const Navbar = () => {
  return (
    <div>
         <nav className="navbar navbar-light bg-light shadow">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="imageDiv">
                        <img src={Logo} alt="Logo" className="Logo" />
                        <h2 className="input ">Lenzz Rating System</h2>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar