import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    // link text of menu button that's being hovered
    const page = e.target.textContent;
    // Get button location so submenu can be centered below it
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    // Subtracting 3 to move submenu 3px up
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="Stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
