'use client'
import '../globals.css';
import "../../css/projects.css"
import React from "react";
import NavBar from '../../components/navBar'
import WordsOfWisdomCard from '@/components/projectCards/WordsOfWisdomCard';
import PortfolioCard from '@/components/projectCards/PortfolioCard'
import PurePrepCard from '@/components/projectCards/PurePrepCard'
import CookieCrumblCard from '@/components/projectCards/CookieCrumblCard';
import OrchestraCard from '@/components/projectCards/OrchestraCard'
import HiddenCheeseCard from '@/components/projectCards/HiddenCheeseCard'
export default function Projects() {
    return (
         <div className="backgroundContainer">
            <NavBar/>
            <h1 className="topTitle">Projects!</h1>
            <div style = {{display: 'flex', flexDirection: 'row', gap: '3vh'}}>
                <div style = {{display: 'flex', flexDirection: 'column', gap: '4vh'}}>
                    <WordsOfWisdomCard />
                    <PurePrepCard />
                    <HiddenCheeseCard />
                </div>
                <div style = {{display: 'flex', flexDirection: 'column', gap: '4vh'}}>
                    <PortfolioCard />
                    <CookieCrumblCard />
                    <OrchestraCard />
                </div>
            </div>
        </div>
    )
}