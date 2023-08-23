import React, { useState, useEffect } from 'react';
import './MainNav.css';
import Search from "../Search/Search";


const MainNavbar = () => {

  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);


  const openRegisterModal = () => {
    setShowRegister(true);
  };

  const closeModals = () => {
    setShowSignIn(false);
    setShowRegister(false);
  };

  return (
    <nav className="nav-container flex justify-between items-center monster">
      <div className="logo gothic flex items-center">
        <span className="text-4xl cursor-pointer">Today's Recipe</span>
      </div>

      <div className="right-section flex items-center justify-">

      <Search/>
      </div>
    </nav>
  );
};

export default MainNavbar;
