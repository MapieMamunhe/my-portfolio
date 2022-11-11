import React from "react";
import HamburgerMenu from "../hamburgerMenu";

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <ul className="flex flex-row justify-between h-20  bg-[#663cc1] w-full items-center px-[16px]">
      <li>Mapie Mamunhe</li>
      <li>
        <HamburgerMenu />
      </li>
    </ul>
  );
};

export default Header;
