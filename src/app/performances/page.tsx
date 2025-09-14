import React from 'react'
import '../../css/performances.css'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from 'next/image'
import NavBar from '../../components/navBar/page'
import AdagioPic from '../../assets/adagioPic.png'
import LaloPic from '../../assets/laloPic.png'
export default function Performances(){
    return (
        <div className="backgroundContainer">
            <NavBar />
            <h1 className="topTitle">Performances</h1>
            <div style = {{display: 'flex', flexDirection: 'row', gap: '4vw'}}>
                <LaloCard />
                <AdagioCard />
            </div>
        </div>
    )
}


function AdagioCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent',
        }}
        className = "videoPicture">
            <a href = "https://www.youtube.com/watch?v=kQBsGy9die4&list=PL-GOq6NDX0SUXMqWKgnhEzP4qC_tnrx0k" target = "_blank" rel="noopener noreferrer">
                <Image src={AdagioPic.src} alt="Adagio in G Minor screenshot" width='500' height='500'/>
                <CardContent 
                    sx = {{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                        borderRadius: '0 0 16px 16px',
                    }}>
                    <div style={{ fontSize: "small", color: "#888" }}>Tomaso Albinoni and Remo Giazotto</div>
                    <div style={{ fontWeight: "bold", fontSize: "large" }}>Adagio in G Minor</div>
                    <ul className = "awardsList">
                        <li>TMEA Solo and Ensemble Outstanding Performance Award(2023-2024)</li>
                        <li>New York International Young Musician Competition 2nd Prize(2024)</li>
                        <li>Charleston International Autumn Music Competition 3rd Prize(2024)</li>
                    </ul>
                </CardContent>
            </a>
        </Card>
  );
}

function LaloCard() {
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
                    <div style={{ fontWeight: "bold", fontSize: "large" }}>Lalo Cello Concerto in D Minor Movement 1</div>
                    <ul className = "awardsList">
                        <li>TMEA Solo and Ensemble Outstanding Performance Award(2024-2025)</li>
                    </ul>
                </CardContent>
            </a>
        </Card>
  );
}