import React, { useState,useContext } from 'react';
import SignInForm from '../../components/forms/SignIn';
import Navbar from '../../components/Navbar/Navbar';
import thinkFood from '../../assets/images/Homepage/food.svg';
import './LandingPage.css';



const LandingPage = () => {
  const [show, setShow] = useState(false);

  return (
    <main className='flex flex-col h-full '>
      <Navbar setShow={setShow} />
      {show && <SignInForm setShow={setShow} />}
      
      <div className="hero monster flex justify-center items-center grow h-[500px]">
        <div className="left flex justify-center items-center">
          <div className="hero-text flex flex-col grow gap-2">
            <div className="">OlLINE-RECIPES-PLATFORM</div>
            <div className="main-text gothic  text-[48px]">
              Get inspired and publish you special recipes online.
            </div>
            <div>Enjoy exploring new recipes.</div>
          </div>
        </div>
        <div className="right "></div>
        <div className="landing-images flex items-center">
          <img className="thinkFood" src={thinkFood} alt="" />

        </div>
      </div>
    </main>
  );
};

export default LandingPage;
