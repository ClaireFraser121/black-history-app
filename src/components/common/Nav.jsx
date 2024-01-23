import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "./../../images/tbt_logo.png";
import './../../styles/Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#262626] p-6">
      <div className="flex flex-1 items-center justify-start">
        <div className="block lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-[#FFFFFF] border-[#FFFFFF] hover:text-[#f7f1db] hover:border-[#f7f1db]"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zM10 9h10v2H10zM0 15h20v2H0z"/></svg>
          </button>
        </div>

        <div className={`${
          isOpen ? 'block' : 'hidden'
        } lg:flex lg:items-center lg:w-auto`}>
          <Link to="/" className="whitespace-nowrap block mt-4 lg:inline-block lg:mt-0 text-[#FFFFFF] hover:text-[#f7f1db]  mx-2">
            Home
          </Link>
          <Link to="/about" className="whitespace-nowrap block mt-4 lg:inline-block lg:mt-0 text-[#FFFFFF] hover:text-[#f7f1db]  mx-2">
            About
          </Link>
          <Link to="/didYouKnowTV" className="whitespace-nowrap block mt-4 lg:inline-block lg:mt-0 text-[#FFFFFF] hover:text-[#f7f1db]  mx-2">
            Did You Know TV
          </Link>
          <Link to="/funFacts" className="whitespace-nowrap block mt-4 lg:inline-block lg:mt-0 text-[#FFFFFF] hover:text-[#f7f1db]  mx-2">
            Fun Facts
          </Link>
          <Link to="/righteousReading" className="whitespace-nowrap block mt-4 lg:inline-block lg:mt-0 text-[#FFFFFF] hover:text-[#f7f1db]  mx-2">
            Righteous Reading
          </Link>
          <Link to="/weeklyQuiz" className="whitespace-nowrap block mt-4 lg:inline-block lg:mt-0 text-[#FFFFFF] hover:text-[#f7f1db] text-sm mx-2">
            Weekly Quiz
          </Link>
        </div>
      </div>

      <div className="flex-1 text-center">
        <span className="font-semibold text-xl tracking-tight text-[#FFFFFF]">TBT Education App</span>
      </div>

      <div className="flex flex-1 justify-end items-center">
        <img className='h-16' src={logo} alt="tbt logo" />
      </div>
    </nav>
  );
}

export default Nav;
