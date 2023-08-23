import './MainPage.css';
import MainNav from '../Navbar/MainNav';
import RecipeList from '../RecipeList/RecipeList';
import React, { useState,useContext } from 'react';


const MainPage = () => {
    const [show, setShow] = useState(false);

  return (
    <main className=''>
      <MainNav setShow={setShow} />
      <RecipeList/>
    </main>
  );
};

export default MainPage;

