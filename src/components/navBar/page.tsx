import Link from 'next/link';
import "../../css/classes.css"
import "../../css/navBar.css"
import React from 'react';
export default function NavBar() {
  return (
    <div className="navBarContainer">
      {/* <ul className="h-full shadow-lg flex flex-col items-start justify-start px-2 py-8 overflow-hidden space-y-6"> */}
      <ul className = "navBarList">
        <li className="navBarItems">
          <Link
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="navBarItems">
          <Link
            
            href="/underConstruction"
          >
            About Me
          </Link>
        </li>
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
