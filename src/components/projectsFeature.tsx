'use client'
import React from 'react';
import Link from 'next/link'
import '../css/projectsFeature.css';
import WordsOfWisdomCard from  '../components/projectCards/WordsOfWisdomCard'
import CookieCrumblCard from  '../components/projectCards/CookieCrumblCard'
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
                <div id = "projectsFeatureContainer" style = {{gap: '4vh'}}>
                    <WordsOfWisdomCard/>
                    <CookieCrumblCard/>
                </div>
            </div>
        </div>
    )
}
