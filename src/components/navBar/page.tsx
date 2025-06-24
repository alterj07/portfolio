import Link from 'next/link';
import "../../css/classes.css"
import React from 'react';
export default function NavBar() {
  return (
    <div className="group fixed top-0 left-0 h-auto opacity-0 hover:opacity-100 transition-opacity duration-[0.9s] ease-in-out z-50">
    {/* // <div> */}
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
            href="/underConstruction"
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}
