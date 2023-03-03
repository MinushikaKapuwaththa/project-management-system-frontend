import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import {Navbar, Nav, Button} from 'react-bootstrap';

function NavbarComponent() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    
      // <nav className="navbar">
      //   <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
      //     G3 Technology
      //     <i class="fab fa-firstdraft" />
      //   </Link>
      //   <div className="menu-icon" onClick={handleClick}>
      //     <i className={click ? "fas fa-times" : "fas fa-bars"} />
      //   </div>
      //   <ul className={click ? "nav-menu active" : "nav-menu"}>
      //     <li className="nav-item">
      //       <Link to="/" className="nav-links" onClick={closeMobileMenu}>
      //         My Dashboard
      //       </Link>
      //     </li>
      //     <li
      //       className="nav-item"
      //       onMouseEnter={onMouseEnter}
      //       onMouseLeave={onMouseLeave}
      //     >
      //       <Link
      //         to="/customer"
      //         className="nav-links"
      //         onClick={closeMobileMenu}
      //       >
      //         Customer <i className="fas fa-caret-down" />
      //       </Link>
      //       {dropdown && <Dropdown />}
      //     </li>
      //     <li className="nav-item">
      //       <Link
      //         to="/projects"
      //         className="nav-links"
      //         onClick={closeMobileMenu}
      //       >
      //         Projects
      //       </Link>
      //     </li>
      //     <li className="nav-item">
      //       <Link to="/ourteam" className="nav-links" onClick={closeMobileMenu}>
      //         Our Team
      //       </Link>
      //     </li>
      //     <li>
      //       <Link
      //         to="/Create"
      //         className="nav-links-mobile"
      //         onClick={closeMobileMenu}
      //       >
      //         Create
      //       </Link>
      //     </li>
      //   </ul>
      //   <Button />
      // </nav>
  
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/companies">Companies </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/create">Create</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/customer">Customers</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/ourteam">OurTeam</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/people">People</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/projects">Project</Link>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default NavbarComponent;
