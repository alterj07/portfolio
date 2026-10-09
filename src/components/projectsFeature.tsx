'use client'
import React from 'react';
import Link from 'next/link'
import '../css/projectsFeature.css';
import FinertiaCard from  '../components/projectCards/FinertiaCard'
import AlgoArcadeCard from  '../components/projectCards/AlgoArcadeCard'
import ScrollReveal from './ScrollReveal';

export default function FeatureProjects() {
    return (
        <div id = "featuredProjectsContainer">
            <ScrollReveal style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div id = "topProjectsContainer">
                    <h1 id = "featuredProjectsTitle">Featured Projects</h1>
                    <div id = "viewMoreContainer">
                        <Link href = "/projects">
                            <p id = "viewMoreText">view more {'>'}</p>
                        </Link>
                    </div>
                </div>
            </ScrollReveal>
            <ScrollReveal delay={150} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div id = "projectsFeatureWrapper">
                    <div id = "projectsFeatureContainer">
                        <FinertiaCard/>
                        <AlgoArcadeCard/>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    )
}
