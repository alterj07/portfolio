// import ReactDOM from 'react-dom/client';
// import React from 'react';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import {useRouter} from 'next/router';
import './NavBar.css';
// import {AboutMe} from '../Pages/AboutMe.js';
// import {Projects} from '../Pages/Projects.js';
// import {MainPage} from '../Pages/MainPage.js';
// import { fromJSON } from 'postcss';
export default function NavBar() {
    return (
      <ul className = "navBar">
        <Link href ="/">Home</Link>
        <Link href ="/about">About Me</Link>
        <Link href ="/projects">Projects</Link>

      </ul>
    )
  }