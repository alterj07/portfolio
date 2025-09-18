'use client'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from 'next/image'
import SprigPic from '../../assets/sprig.png'
import {FaGithub} from 'react-icons/fa'
import JavaScriptComponent from '../libraryCards/javascript'
import "../../css/projects.css"
export default function HiddenCheeseCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}
        className = "cardClass">
            <a href = "https://sprig.hackclub.com/share/BOoX5Ew1gWPRESZAvVlY" target = "_blank" rel="noopener noreferrer">
                <Image src = {SprigPic.src} alt = "Sprig Project Screenshot"  width='500' height='500'/>
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
                    <JavaScriptComponent/>
                    <a href = "https://github.com/alterj07/Sprig" target = "_blank" rel = "noopener noreferrer">
                        <FaGithub className = "githubIcon"/>
                    </a>
                </div>
                <div style={{ fontWeight: "bold", fontSize: "medium" }}>Hidden Cheese</div>
                <div style={{ fontSize: "small", color: "#555", whiteSpace: 'wrap' }}>
                    For Hack Club&apos;s Sprig YSWS, this is a simple mind-stretching single player game to warm-up your mind! Consume as many pieces of cheese as you can! Dodge enemies! Memorize patterns!
                </div>
            </CardContent>
        </Card>
  );
}