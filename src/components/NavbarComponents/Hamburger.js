import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
export default function Hamburger({ color = '#fff', toggleSideMenu }) {
  return (
    <button
      onClick={toggleSideMenu}
      className="grid p-0 mr-2  place-items-center"
    >
      <GiHamburgerMenu className="w-20p h-20p" style={{ color: color }} />
    </button>
  );
}
