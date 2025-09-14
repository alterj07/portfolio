'use client'
import '../globals.css';
import "../../css/projects.css"
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Image from 'next/image'
import NavBar from '../../components/navBar/page'
import WordsOfWisdomPic from '../../assets/wordsOfWisdom.png'
import PortfolioPic from '../../assets/PortfolioImg.png'
import CookieCrumblPic from '../../assets/cookieCrumbl.png'
import OrchestraPic from '../../assets/orchestra.png'
import SprigPic from '../../assets/sprig.png'
export default function Projects() {
    return (
         <div className="backgroundContainer">
            <NavBar/>
            <h1 className="topTitle">Projects!</h1>
            <div style = {{display: 'flex', flexDirection: 'row', gap: '4vh'}}>
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


function WordsOfWisdomCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            width: '27vw',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}>
            <a href = "https://words-of-wisdom.jhchun.dev" target = "_blank" rel="noopener noreferrer">
                <Image src={WordsOfWisdomPic.src} alt="Words-Of-Wisdom project screenshot" width='500' height='500'/>
                <CardContent 
                    sx = {{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                        borderRadius: '0 0 16px 16px',
                    }}>
                    <div style={{ fontSize: "0.9rem", color: "#888" }}>librarys/frameworks used</div>
                    <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Words of Wisdom</div>
                    <div style={{ fontSize: "1rem", color: "#555" }}>
                        Words of Wisdom is a quote generator that provides inspirational content whenever you need a boost. This project is my first experience working with Python Flask and attempting to create an API.
                    </div>
                </CardContent>
            </a>
        </Card>
  );
}

function PortfolioCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            width: '27vw',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}>
            <a href = "https://jhchun.dev" target = "_blank" rel="noopener noreferrer">
                <Image src = {PortfolioPic.src} alt = "Portfolio Screenshot" width='500' height='500'/>
                <CardContent 
                    sx = {{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                        borderRadius: '0 0 16px 16px',
                    }}>
                    <div style={{ fontSize: "0.9rem", color: "#888" }}>librarys/frameworks used</div>
                    <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Portfolio</div>
                    <div style={{ fontSize: "1rem", color: "#555" }}>
                        This website was built to serve as a centralized platform to present who I am as a developer and creator.
                    </div>
                </CardContent>
            </a>
        </Card>
  );
}

function PurePrepCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            width: '27vw',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}>
            <a href = "https://github.com/alterj07/PurePrep" target = "_blank" rel="noopener noreferrer">
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10vh', paddingBottom: '10vh' }}>
                    <CircularProgress />
                </Box>
                <CardContent 
                    sx = {{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                        borderRadius: '0 0 16px 16px',
                    }}>
                    <div style={{ fontSize: "0.9rem", color: "#888" }}>librarys/frameworks used</div>
                    <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>PurePrep</div>
                    <div style={{ fontSize: "1rem", color: "#555" }}>
                        My first attempt at creating a mobile application that can identify allergens in a food using a picture of said food. First created as a passion project, this was soon used as my CS3 class' final project; however, due to the time restraint on the project, I was unable to create the final product and instead had to pivot the app for it to become a hotdog identification app.
                    </div>
                </CardContent>
            </a>
        </Card>
  );
}


function CookieCrumblCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            width: '27vw',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}>
            <a href = "https://cookiecrumbl.jhchun.dev" target = "_blank" rel="noopener noreferrer">
                <Image src = {CookieCrumblPic.src} alt = "CookieCrumbl Project Screenshot" width='500' height='500'/>
                <CardContent 
                    sx = {{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                        borderRadius: '0 0 16px 16px',
                    }}>
                    <div style={{ fontSize: "0.9rem", color: "#888" }}>librarys/frameworks used</div>
                    <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>CookieCrumbl</div>
                    <div style={{ fontSize: "1rem", color: "#555" }}>
                        CookieCrumbl is a project developed for the Hack Club Scrapyard Hackathon, aiming to provide a unique and &quot;scrappy&quot; web experience. The website contains the &quot;cure to cancer&quot; but must first agree with cookies, human authentication, and a mass of ads. This was our first Hackathon. We&apos;ve learned a lot, and still have a lot to learn...
                    </div>
                </CardContent>
            </a>
        </Card>
  );
}


function OrchestraCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            width: '27vw',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}>
            <a href = "https://orchestral-pieces.jhchun.dev" target = "_blank" rel="noopener noreferrer">
                <Image src = {OrchestraPic.src} alt = "Orchestral-Pieces Project Screenshot"  width='500' height='500'/>
                <CardContent 
                    sx = {{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                        borderRadius: '0 0 16px 16px',
                    }}>
                    <div style={{ fontSize: "0.9rem", color: "#888" }}>librarys/frameworks used</div>
                    <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Orchestral-Pieces</div>
                    <div style={{ fontSize: "1rem", color: "#555" }}>
                        My first website, created for Hack Club's Boba Drops YSWS. Includes the orchestral pieces that I enjoyed during my junior year of high school.
                    </div>
                </CardContent>
            </a>
        </Card>
  );
}

function HiddenCheeseCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            width: '27vw',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}>
            <a href = "https://sprig.hackclub.com/share/BOoX5Ew1gWPRESZAvVlY" target = "_blank" rel="noopener noreferrer">
                <Image src = {SprigPic.src} alt = "Sprig Project Screenshot"  width='500' height='500'/>
                <CardContent 
                    sx = {{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                        borderRadius: '0 0 16px 16px',
                    }}>
                    <div style={{ fontSize: "0.9rem", color: "#888" }}>librarys/frameworks used</div>
                    <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Hidden Cheese</div>
                    <div style={{ fontSize: "1rem", color: "#555" }}>
                        For Hack Club&apos;s Sprig YSWS, this is a simple mind-stretching single player game to warm-up your mind! Consume as many pieces of cheese as you can! Dodge enemies! Memorize patterns!
                    </div>
                </CardContent>
            </a>
        </Card>
  );
}