import React, { useState, useEffect } from 'react';
import './MainNav.css';
import SearchForm from '../SearchForm/SearchForm';

const MainNavbar = () => {

  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [searchResults, setSearchResults] = useState([]);


  const openRegisterModal = () => {
    setShowRegister(true);
  };

  const closeModals = () => {
    setShowSignIn(false);
    setShowRegister(false);

  const handleSearch = () => {
console.log('handleSearch')
  }
  };

  return (
    <nav className=" bg-emerald-600  text-white shadow-lg nav-container flex justify-between items-center monster">
      <div className="logo gothic flex items-center animate-pulse">
        <span className="text-4xl cursor-pointer font-mono italic animate-bounce ">Today's Recipe</span>
      </div>

      <div className="recipe-list">
      <SearchForm  />
    </div>
    </nav>
  );
};

export default MainNavbar;
