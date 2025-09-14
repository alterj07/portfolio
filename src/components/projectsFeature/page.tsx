import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import '../../css/projectsFeature.css';
import WordsOfWisdomImg from '../../assets/wordsOfWisdom.png'
import CookieCrumblImg from '../../assets/cookieCrumbl.png';
// import GithubIcon from '../../assets/github-mark-white.png';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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

function WordsOfWisdomCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}
        className = "cardClass">
            <Image src = {WordsOfWisdomImg.src} alt = "Words-Of-Wisdom project screenshot" width='500' height='500'/>
            <CardContent 
                sx = {{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                    borderRadius: '0 0 16px 16px',
                }}>
                <div style={{ fontSize: "smaller", color: "#888" }}>librarys/frameworks used</div>
                <div style={{ fontWeight: "bold", fontSize: "larger" }}>Words of Wisdom</div>
                <div style={{ fontSize: "small", color: "#555", whiteSpace: 'wrap' }}>
                    Words of Wisdom is a quote generator that provides inspirational content whenever you need a boost. This project is my first experience working with Python Flask and attempting to create an API.
                </div>
            </CardContent>
        </Card>
  );
}

function CookieCrumblCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}
        className = "cardClass">
            <Image src={CookieCrumblImg.src} alt="CookieCrumbl project screenshot" width='500' height='500'/>
            <CardContent 
                sx = {{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                    borderRadius: '0 0 16px 16px',
                }}>
                <div style={{ fontSize: "smaller", color: "#888" }}>librarys/frameworks used</div>
                <div style={{ fontWeight: "bold", fontSize: "larger" }}>CookieCrumbl</div>
                <div style={{ fontSize: "small", color: "#555", whiteSpace: 'wrap' }}>
                    CookieCrumbl is a project developed for the Hack Club Scrapyard Hackathon, aiming to provide a unique and &quot;scrappy&quot; web experience. The website contains the &quot;cure to cancer&quot; but must first agree with cookies, human authentication, and a mass of ads. This was our first Hackathon. We&apos;ve learned a lot, and still have a lot to learn...
                </div>
            </CardContent>
        </Card>
  );
}