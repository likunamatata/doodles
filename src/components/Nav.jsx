import React from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div className="Nav">
       <Link to='/'>Home</Link>
      <Link to='/minesweeper'>Minesweeper</Link>
      <Link to='/doodles'>Doodles</Link>
    </div>
  );
}

export default Nav;