import React from 'react';
import Link from 'next/link'
import '../../css/projectsFeature.css';
import WordsofWisdomImg from '../../assets/wordsOfWisdom.png'
import CookieCrumblImg from '../../assets/cookieCrumbl.png';
// import VibeImg from '../../assets/VibeImg.jpg';
// import PortfolioImg from '../../assets/PortfolioImg.png';
import GithubIcon from '../../assets/github-mark-white.png';
export default function FeatureProjects() {
    return (
        <div id = "featuredProjectsContainer">
            <div id = "topProjectsContainer">
                <h1 id = "featuredProjectsTitle">Featured Projects</h1>
                <div id = "viewMoreContainer">
                    <Link href = "/projects">
                        <p id = "viewMoreText">view more {'>'}</p>
                    </Link>
                </div> 
            </div>
            <div id = "projectsFeatureWrapper">
                <div id = "projectsFeatureContainer">
                    <WordsOfWisdomCard/>
                    <CookieCrumblCard/>
                </div>
            </div>
        </div>
    )
}

function WordsOfWisdomCard() {
    return(
        <div className = "flip-card-container">
            <div className = "flip-card">
                <div className = "projectsFeatureCard">
                    <h2 className = "projectFeatureTitle">Words of Wisdom</h2>
                    <img src = {WordsofWisdomImg.src} alt = "Words Of Wisdom" width = "300vw" height = "300vh"/>
                </div>
                <div className = "projectsFeatureCardBack">
                    <p className = "projectFeatureDescription">Words of Wisdom is a quote generator that provides inspirational content whenever you need a boost. This project is my first experience working with Python Flask and attempting to create an API.</p>
                    <div className = "projectFeatureLinks">
                        <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/alterj07/words-of-wisdom" >
                            <img src = {GithubIcon.src} width = "18" height = "18"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


function CookieCrumblCard() {
    return(
        <div className = "flip-card-container">
            <div className = "flip-card">
                <div className = "projectsFeatureCard">
                    <h2 className = "projectFeatureTitle">CookieCrumbl</h2>
                    <img src = {CookieCrumblImg.src} alt = "Cookie Crumbl" width = "300vw" height = "300vh"/>
                </div>
                <div className = "projectsFeatureCardBack">
                    <p className = "projectFeatureDescription">CookieCrumbl is a project developed for the Hack Club Scrapyard Hackathon, aiming to provide a unique and &quot;scrappy&quot; web experience. The website contains the &quot;cure to cancer&quot; but must first agree with cookies, human authentication, and a mass of ads. This was our first Hackathon. We&apos;ve learned a lot, and still have a lot to learn...</p>
                    <div className = "projectFeatureLinks">
                        <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/alterj07/CookieCrumbl" >
                            <img src = {GithubIcon.src} width = "18" height = "18"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

// function VibeCard() {
//     return (
//         <div className = "flip-card-container">
//             <div className = "flip-card">
//                 <div className = "projectsFeatureCard">
//                     <h2 className = "projectFeatureTitle">Vibe</h2>
//                     <img src = {VibeImg.src} alt = "Vibe" width = "300vw" height = "300vh"/>
//                 </div>
//                 <div className = "projectsFeatureCardBack">
//                     <p className = "projectFeatureDescription">*Short Description*</p>
//                     <div className = "projectFeatureLinks">
//                         <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/TheScientist101/Vibe" >
//                             <img src = {GithubIcon.src} width = "18" height = "18"/>
//                         </a>
//                         <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/TheScientist101/Vibe" >
//                             <p className = "projectFeatureDescription">Github</p>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// function PortfolioCard() {
//     return (
//         <div className = "flip-card-container">
//             <div className = "flip-card">
//                 <div className = "projectsFeatureCard">
//                     <h2 className = "projectFeatureTitle">Portfolio</h2>
//                     <img src = {PortfolioImg.src} alt = "Portfolio" width = "300vw" height = "300vh"/>
//                 </div>
//                 <div className = "projectsFeatureCardBack">
//                     <p className = "projectFeatureDescription">*Short Description*</p>
//                     <div className = "projectFeatureLinks">
//                         <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/alterj07/portfolio">
//                             <img src = {GithubIcon.src} width = "18" height = "18"/>
//                         </a>
//                         <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/alterj07/portfolio">
//                             <p className = "projectFeatureDescription">Github</p>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
//add a skeleton component for the project cards
//linear progress component? mui.com

//issue:
//1. The projects are not continuously scrolling; the cards are resetting once the first card reaches the end
//I want the entire thing to be continuous like the Hack Club YSWS list
//Might have to label each of the projects from 1-8 and make it change them separately
//2. The hovering doesn't work while the carousel is moving(idk how to stop it either without making the cards end up in its og position)
//idk if this is possible