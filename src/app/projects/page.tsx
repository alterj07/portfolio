'use client'
import '../globals.css';
import '@/css/classes.css';
import "../../css/projects.css"
import React from "react";
import NavBar from '../../components/navBar'
import WordsOfWisdomCard from '@/components/projectCards/WordsOfWisdomCard';
import PortfolioCard from '@/components/projectCards/PortfolioCard'
import PurePrepCard from '@/components/projectCards/PurePrepCard'
import CookieCrumblCard from '@/components/projectCards/CookieCrumblCard';
import OrchestraCard from '@/components/projectCards/OrchestraCard'
import HiddenCheeseCard from '@/components/projectCards/HiddenCheeseCard'
import ScrollReveal from '@/components/ScrollReveal';

export default function Projects() {
    return (
         <div className="backgroundContainer">
            <NavBar/>
            <ScrollReveal>
                <h1 className="topTitle">Projects</h1>
            </ScrollReveal>
            <div className="cardsGrid">
                <ScrollReveal delay={0} style={{ width: '100%', height: '100%' }}>
                    <WordsOfWisdomCard />
                </ScrollReveal>
                <ScrollReveal delay={100} style={{ width: '100%', height: '100%' }}>
                    <PortfolioCard />
                </ScrollReveal>
                <ScrollReveal delay={0} style={{ width: '100%', height: '100%' }}>
                    <PurePrepCard />
                </ScrollReveal>
                <ScrollReveal delay={100} style={{ width: '100%', height: '100%' }}>
                    <CookieCrumblCard />
                </ScrollReveal>
                <ScrollReveal delay={0} style={{ width: '100%', height: '100%' }}>
                    <HiddenCheeseCard />
                </ScrollReveal>
                <ScrollReveal delay={100} style={{ width: '100%', height: '100%' }}>
                    <OrchestraCard />
                </ScrollReveal>
            </div>
        </div>
    )
}
