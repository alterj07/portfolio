import React from 'react';
import '../../css/classes.css';
export default function FeatureProjects() {
    return (
        <div>
            <h1 id = "featuredProjectsTitle">
                Featured Projects
            </h1>
            <div id = "projectsFeatureContainer">
                <div className = "projectCard">
                    <img src = '../../assets/wordsOfWisdom.png' alt = "Words Of Wisdom" width = "100" height = "50"/>
                    <h2>Words of Wisdom</h2>
                    <p>*Short Description*</p>
                    <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/alterj07/words-of-wisdom" >
                    *logo*Github
                    </a>
                </div>

                <div className = "projectCard">
                    <img src = "../../assets/cookieCrumbl.png" alt = "Cookie Crumbl" width = "100" height = "50"/>
                    <h2>CookieCrumbl</h2>
                    <p>*Short Description*</p>
                    <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/alterj07/CookieCrumbl" >
                    *logo*Github
                    </a>
                </div>
            </div>
        </div>
    )
}

//add a skeleton component for the project cards
//linear progress component? mui.com