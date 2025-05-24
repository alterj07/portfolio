// import React from 'react';
// import ReactDOM from 'react-dom';
import NavigationBar from '@/Components/NavBar.js';
import './MainPage.css';

export default function MainPage() {
  return (
    <div id = "mainBody">
      <div>
        <NavigationBar />
      </div>
      <div id = "mainTitle">
        <h1 id = "Title">Jayden's Portfolio</h1>
      </div>
      <div id = "mainAboutParagraph">
        {/* <h1 id = "mainAbout">About</h1> */}
      </div>
    </div>

  )
}



