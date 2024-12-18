import { useNavigate } from 'react-router-dom';
import '../assets/navbar.css'

import React, { useEffect } from 'react';

const Navbar = () => {

  const navigate = useNavigate()

  const click = (e) => {
    navigate("/new-todo")
  }



  return (
    <nav>
    <div className="nav-content">
      <div className="left"></div>
      <h1 className="logo">Sys.Todo.List</h1>
      
        {(window.location.pathname === "/") ? <button onClick={click}>New List</button> : <div></div>}

    </div>
  </nav>
  );
}

export default Navbar;
