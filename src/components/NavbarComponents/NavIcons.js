import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { DataProvider } from '../../contexts/DataContext';
export default function NavIcons({ color = 'nav-secondary' }) {
  const { cartItems, isLightTheme } = React.useContext(DataProvider);
  return (
    <div className={`flex   text-${color}`}>
      <Link to="/cart" className="p-1 flex   relative">
        <HiOutlineShoppingBag className="w-25p h-25p" />
        <span
          className={`h-4 w-4  font-bold rounded-full absolute top-0 right-0 text-xs grid place-items-center ${
            isLightTheme
              ? 'bg-second-nav-text-light text-second-nav-light'
              : 'bg-second-nav-dark text-second-nav-text-dark'
          }`}
        >
          {cartItems.length}
        </span>
      </Link>

      <button className="p-1 flex ">
        <AiOutlineHeart className="w-25p h-25p" />
      </button>
    </div>
  );
}
