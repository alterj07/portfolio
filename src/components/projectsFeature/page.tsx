import React from 'react';
// import '../../css/classes.css';
import '../../css/projectsFeature.css';
import WordsofWisdomImg from '../../assets/wordsOfWisdom.png'
import CookieCrumblImg from '../../assets/cookieCrumbl.png';
export default function FeatureProjects() {
    return (
        <div>
            <h1 id = "featuredProjectsTitle">
                Featured Projects
            </h1>
            <div id = "projectsFeatureContainer">
                <div className = "flip-card-container">
                    <div className = "flip-card">
                        <div className = "projectsFeatureCard">
                            <h2 className = "projectFeatureTitle">Words of Wisdom</h2>
                            <img src = {WordsofWisdomImg.src} alt = "Words Of Wisdom" width = "300" height = "150"/>
                        </div>
                        <div className = "projectsFeatureCardBack">
                            <p className = "projectFeatureDescription">*Short Description*</p>
                            <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/alterj07/words-of-wisdom" >
                            *logo*Github
                            </a>

                        </div>
                    </div>
                </div>
                <div className = "flip-card-container">
                    <div className = "flip-card">
                        <div className = "projectsFeatureCard">
                            <h2 className = "projectFeatureTitle">CookieCrumbl</h2>
                            <img src = {CookieCrumblImg.src} alt = "Cookie Crumbl" width = "300" height = "150"/>
                        </div>
                        <div className = "projectsFeatureCardBack">
                            <p className = "projectFeatureDescription">*Short Description*</p>
                            <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/alterj07/CookieCrumbl" >
                            *logo*Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//add a skeleton component for the project cards
//linear progress component? mui.com