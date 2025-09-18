'use client'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from 'next/image'
import CookieCrumblPic from '../../assets/cookieCrumbl.png'
import {FaGithub} from "react-icons/fa"
import HTMLComponent from '../libraryCards/html'
import CSSComponent from '../libraryCards/css'
import JavaScriptComponent from '../libraryCards/javascript'
import "../../css/projects.css"
export default function CookieCrumblCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}
        className = "cardClass">
            <a href = "https://cookiecrumbl.jhchun.dev" target = "_blank" rel="noopener noreferrer">
                <Image src = {CookieCrumblPic.src} alt = "CookieCrumbl Project Screenshot" width='500' height='500'/>
            </a>
            <CardContent 
                sx = {{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                    borderRadius: '0 0 16px 16px',
                }}>
                <div style={{ display: 'flex', gap: "0.5vw", flexDirection: 'row', fontSize: "smaller", color: "#888", marginBottom: '0.5vh' }}>
                    <HTMLComponent/>
                    <CSSComponent/>
                    <JavaScriptComponent/>
                    <a href = "https://github.com/alterj07/CookieCrumbl" target = "_blank" rel = "noopener noreferrer">
                        <FaGithub className = "githubIcon"/>
                    </a>
                </div>
                <div style={{ fontWeight: "bold", fontSize: "medium" }}>CookieCrumbl</div>
                <div style={{ fontSize: "small", color: "#555" }}>
                    CookieCrumbl is a project developed for the Hack Club Scrapyard Hackathon, aiming to provide a unique and &quot;scrappy&quot; web experience. The website contains the &quot;cure to cancer&quot; but must first agree with cookies, human authentication, and a mass of ads. This was our first Hackathon. We&apos;ve learned a lot, and still have a lot to learn...
                </div>
            </CardContent>
        </Card>
  );
}