'use client'
import '../../css/performances.css'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from 'next/image'
import LaloPic from '../../assets/laloPic.png'
export default function LaloCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}
        className = "videoPicture">
            <a href = "https://www.youtube.com/watch?v=YZxJPlXp5wI" target = "_blank" rel="noopener noreferrer" >
                <Image src={LaloPic.src} alt="Lalo Cello Concerto No. 1 screenshot" width='500' height='500'/>
                <CardContent 
                    sx = {{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                        borderRadius: '0 0 16px 16px',
                    }}>
                    <div style={{ fontSize: "small", color: "#888" }}>Eduardo Lalo</div>
                    <div style={{ fontWeight: "bold", fontSize: "large", color: "#ded3d3" }}>Lalo Cello Concerto in D Minor Movement 1</div>
                    <ul className = "awardsList">
                        <li>TMEA Solo and Ensemble Outstanding Performance Award(2024-2025)</li>
                    </ul>
                </CardContent>
            </a>
        </Card>
  );
}