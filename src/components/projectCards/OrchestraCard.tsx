'use client'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from 'next/image'
import OrchestraPic from '../../assets/orchestra.png'
import {FaGithub} from 'react-icons/fa'
import HTMLComponent from '../libraryCards/html'
import CSSComponent from '../libraryCards/css'
import "../../css/projects.css"
export default function OrchestraCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}
        className = "cardClass">
            <a href = "https://orchestral-pieces.jhchun.dev" target = "_blank" rel="noopener noreferrer">
                <Image src = {OrchestraPic.src} alt = "Orchestral-Pieces Project Screenshot" />
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
                    <a href = "https://github.com/alterj07/orchestral-pieces" target = "_blank" rel = "noopener noreferrer">
                        <FaGithub className = "githubIcon"/>
                    </a>
                </div>
                <div style={{ fontWeight: "bold", fontSize: "medium" }}>Orchestral-Pieces</div>
                <div style={{ fontSize: "small", color: "#555" }}>
                    My first website, created for Hack Club&apos;s Boba Drops YSWS. Includes the orchestral pieces that I enjoyed during my junior year of high school.
                </div>
            </CardContent>
        </Card>
  );
}