import React from 'react';
import Link from './Link';
import menu from "@/config/menus.json";

const Nav = ({ handleClick }) => {
  return (
      <nav className="s-header__nav">
          <ul>
              {menu?.mainMenu && menu?.mainMenu.map((l, index) => (
                <Link link={l} key={l.text + index} handleClick={handleClick} />
              ))}
          </ul>
      </nav>
  );
}

export default Nav