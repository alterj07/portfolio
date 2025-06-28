import React from 'react';
// import '../../css/classes.css';
import '../../css/projectsFeature.css';
import WordsofWisdomImg from '../../assets/wordsOfWisdom.png'
import CookieCrumblImg from '../../assets/cookieCrumbl.png';
import GithubIcon from '../../assets/github-mark-white.png';
export default function FeatureProjects() {
    return (
        <div>
            <h1 id = "featuredProjectsTitle">
                Featured Projects
            </h1>
            <div id = "projectsFeatureWrapper">
                <div id = "projectsFeatureContainer">
                    <WordsOfWisdomCard/>
                    <WordsOfWisdomCard/>
                    <WordsOfWisdomCard/>
                    <WordsOfWisdomCard/>
                    <CookieCrumblCard/>
                    <CookieCrumblCard/>
                    <CookieCrumblCard/>
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
                    <img src = {WordsofWisdomImg.src} alt = "Words Of Wisdom" width = "300" height = "150"/>
                </div>
                <div className = "projectsFeatureCardBack">
                    <p className = "projectFeatureDescription">*Short Description*</p>
                    <div className = "projectFeatureLinks">
                        <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/alterj07/words-of-wisdom" >
                            <img src = {GithubIcon.src} width = "18" height = "18"/>
                        </a>
                        <div className = "rowSpacer"/>
                        <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/alterj07/words-of-wisdom" >
                        Github
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
                    <img src = {CookieCrumblImg.src} alt = "Cookie Crumbl" width = "300" height = "150"/>
                </div>
                <div className = "projectsFeatureCardBack">
                    <p className = "projectFeatureDescription">*Short Description*</p>
                    <div className = "projectFeatureLinks">
                        <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/alterj07/CookieCrumbl" >
                            <img src = {GithubIcon.src} width = "18" height = "18"/>
                        </a>
                        <div className = "rowSpacer"/>
                        <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/alterj07/CookieCrumbl" >
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
//add a skeleton component for the project cards
//linear progress component? mui.com

//issue:
//1. The projects are not continuously scrolling; the cards are resetting once the first card reaches the end
//I want the entire thing to be continuous like the Hack Club YSWS list
//Might have to label each of the projects from 1-8 and make it change them separately
//2. The hovering doesn't work while the carousel is moving(idk how to stop it either without making the cards end up in its og position)
//idk if this is possible