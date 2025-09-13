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
            <Image src={CookieCrumblPic.src} alt="CookieCrumbl project screenshot"/>
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
                    Description
                </div>
            </CardContent>
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
            <Image src = {PortfolioPic.src} alt = "Portfolio Screenshot"/>
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
                    Description
                </div>
            </CardContent>
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
                    Description
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
            width: '27vw',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}>
            <Image src = {CookieCrumblPic.src} alt = "CookieCrumbl Project Screenshot"/>
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
                    Description
                </div>
            </CardContent>
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
            <Image src = {OrchestraPic.src} alt = "Orchestral-Pieces Project Screenshot"/>
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
                    Description
                </div>
            </CardContent>
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
            <Image src = {SprigPic.src} alt = "Sprig Project Screenshot"/>
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
                    Description
                </div>
            </CardContent>
        </Card>
  );
}



// <h1 className = "ProjectsTitle">Finished!</h1>
//             <div className = "projectsGrid" id = "finished">
//                 <h2>
//                     <a target="_blank" 
//                         rel="noopener noreferrer" 
//                         href = "https://github.com/alterj07/orchestral-pieces"
//                         className = "">
//                             orchestral-pieces
//                     </a>
//                 </h2>
//                 <h2>
//                     <a target="_blank" 
//                         rel="noopener noreferrer" 
//                         href = "https://github.com/alterj07/Sprig"
//                         className = "">
//                             Sprig Project
//                     </a>
//                 </h2>
//                 <h2>
//                     <a target="_blank" 
//                         rel="noopener noreferrer" 
//                         href = "https://github.com/alterj07/words-of-wisdom"
//                         className = "">
//                             words-of-wisdom
//                     </a>
//                 </h2>
//                 <h2>
//                     <a target="_blank" 
//                         rel="noopener noreferrer" 
//                         href = "https://github.com/alterj07/HackPad"
//                         className = "">
//                             HackPad
//                     </a>
//                 </h2>
//                 <h2>
//                     <a target="_blank" 
//                         rel="noopener noreferrer" 
//                         href = "https://github.com/alterj07/CookieCrumbl"
//                         className = "">
//                             CookieCrumbl
//                     </a>
//                 </h2>
//             </div>
//         <h1 className = "ProjectsTitle">In-Progress</h1>
//             <div className = "projectsGrid" id = "inProgress">

//                 <h2>
//                     <a target="_blank" 
//                         rel="noopener noreferrer" 
//                         href = "https://github.com/alterj07/PurePrep"
//                         className = "">
//                             PurePrep
//                     </a>
//                 </h2>
//                 <h2>
//                     <a target="_blank" 
//                         rel="noopener noreferrer" 
//                         href = "https://github.com/alterj07/portfolio"
//                         className = "">
//                             portfolio
//                     </a>
//                 </h2>
//                 <h2>
//                     <a target="_blank" 
//                         rel="noopener noreferrer" 
//                         href = "https://github.com/alterj07/vibe"
//                         className = "">
//                             Vibe
//                     </a>
//                 </h2>
//             </div>