import React, { useState, useEffect } from 'react';
import './Navbar.css';
import SignInForm from '../forms/SignIn';
import RegisterForm from '../forms/Register';


const Navbar = () => {

  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const openSignInModal = () => {
    setShowSignIn(true);
  };

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
        <span
          onClick={openSignInModal}
          className="sign-in font-semibold cursor-pointer"
        >
          Sign In
        </span>

        <span
          onClick={openRegisterModal}
          className="sign-in font-semibold cursor-pointer"
        >
          Register
        </span>
      </div>

      {showSignIn && <SignInForm setShow={closeModals} />}
      {showRegister && <RegisterForm setShow={closeModals} />}
    </nav>
  );
};

export default Navbar;
