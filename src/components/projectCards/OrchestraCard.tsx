'use client'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from 'next/image'
import OrchestraPic from '../../assets/orchestra.png'
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
                <Image src = {OrchestraPic.src} alt = "Orchestral-Pieces Project Screenshot"  width='500' height='500'/>
                <CardContent 
                    sx = {{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                        borderRadius: '0 0 16px 16px',
                    }}>
                    <div style={{ fontSize: "smaller", color: "#888" }}>librarys/frameworks used</div>
                    <div style={{ fontWeight: "bold", fontSize: "medium" }}>Orchestral-Pieces</div>
                    <div style={{ fontSize: "small", color: "#555" }}>
                        My first website, created for Hack Club&apos;s Boba Drops YSWS. Includes the orchestral pieces that I enjoyed during my junior year of high school.
                    </div>
                </CardContent>
            </a>
        </Card>
  );
}