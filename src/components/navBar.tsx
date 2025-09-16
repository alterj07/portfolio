import * as React from 'react';
import Link from 'next/link';
import '../css/navBar.css';

export default function NavBar() {
  return (
    <div className="navBarContainer">
      <ul className = "navBarList">
        <li className="navBarItems">
          <Link
            href="/"
          >
            Home
          </Link>
        </li>
        {/* <li className="navBarItems">
          <Link
            
            href="/contact"
          >
            Contact
          </Link>
        </li> */}
        <li className="navBarItems">  
          <Link
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="navBarItems">  
          <Link
            href="/performances"
          >
            Performances
          </Link>
        </li>
      </ul>
    </div>
  );
}
