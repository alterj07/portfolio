import Link from 'next/link';
import "../../css/classes.css"
import "../../css/navBar.css"
import React from 'react';
export default function NavBar() {
  return (
    <div className="navBarContainer">
      <ul className="h-full shadow-lg flex flex-col items-start justify-start px-2 py-8 overflow-hidden space-y-6">
        <li>
          <Link
            className="navBarItems"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          {/* <Link
            className="text-lime-300 text-3xl font-semibold pb-[15] hover:text-white transition-colors duration-700"
            href="/aboutMe"
          > */}
          <Link
            className="navBarItems"
            href="/underConstruction"
          >
            About Me
          </Link>
        </li>
        <li>  
          {/* <Link
            className="text-lime-300 text-3xl font-semibold pb-[15] hover:text-white transition-colors duration-700"
            href="/projects"
          > */}
          <Link
            className="navBarItems"
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li>  
          <Link
            className="navBarItems"
            href="/performances"
          >
            Performances
          </Link>
        </li>
      </ul>
    </div>
  );
}
