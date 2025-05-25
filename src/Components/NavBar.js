// import ReactDOM from 'react-dom/client';
// import React from 'react';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
// import {useRouter} from 'next/router';
import './NavBar.css';
// import {AboutMe} from '../Pages/AboutMe.js';
// import {Projects} from '../Pages/Projects.js';
// import {MainPage} from '../Pages/MainPage.js';
// import { fromJSON } from 'postcss';
export default function NavBar() {
    return (
      <ul class = "display-flex align-items-center flex-direction-column color-burlywood padding-1rem position-absolute left-0 width-14rem height-full list-style-none">
        <li class = "navItems"><Link href ="../Pages/MainPage">Home</Link></li>
        <li class = "navItems"><Link href ="../Pages/AboutMe">About Me</Link></li>
        <li class = "navItems"><Link href ="../Pages/Projects">Projects</Link></li>
      </ul>
    )
  }