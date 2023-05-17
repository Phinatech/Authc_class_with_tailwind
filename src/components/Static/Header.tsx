// import React from 'react'
import img from "../../assets/new logo.jpg";

const Header = () => {
  return (
    <div className="w-full h-16 bg-slate-500 flex justify-center items-center">
      <div className="w-11/12 flex justify-between items-center">
        <img src={img} className="h-14" />
        <div className="flex items-center font-bold text-white cursor-pointer ">
          <nav className="m-2.5 ">Home</nav>
          <nav className="m-2.5 ">About</nav>
          <nav className="m-2.5 ">Route</nav>
          <nav className="m-2.5 ">Contact</nav>
        </div>
        <button className="w-32 h-10 text-white bg-green-400 flex items-center justify-center border-spacing-0">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
