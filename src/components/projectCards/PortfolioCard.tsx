'use client'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from 'next/image'
import PortfolioPic from '../../assets/PortfolioImg.png'
import { FaGithub } from "react-icons/fa";
import TypeScriptComponent from '../../components/libraryCards/typescript'
import NextJSComponent from '../../components/libraryCards/nextjs'
import "../../css/projects.css"
export default function PortfolioCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}
        className = "cardClass">
            <a href = "https://jhchun.dev" target = "_blank" rel="noopener noreferrer">
                <Image src = {PortfolioPic.src} alt = "Portfolio Screenshot" width='500' height='500'/>
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
                    <TypeScriptComponent/>
                    <NextJSComponent/>
                    <a href = "https://github.com/alterj07/portfolio" target = "_blank" rel = "noopener noreferrer">
                        <FaGithub className = "githubIcon"/>
                    </a>
                </div>
                <div style={{ fontWeight: "bold", fontSize: "medium" }}>Portfolio</div>
                <div style={{ fontSize: "small", color: "#555" }}>
                    This website was built to serve as a centralized platform to present who I am as a developer and creator.
                </div>
            </CardContent>
        </Card>
  );
}