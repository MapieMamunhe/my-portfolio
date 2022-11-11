import React from "react";

// import { Container } from './styles';

const HamburgerMenu: React.FC = () => {
  return (
    <>
      <div className="space-y-2 flex flex-col items-end ">
        <span className="w-14 h-0.5 bg-white"></span>
        <span className="w-10 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </div>
    </>
  );
};

export default HamburgerMenu;
