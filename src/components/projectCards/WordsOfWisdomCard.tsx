'use client'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from 'next/image'
import WordsOfWisdomPic from '../../assets/wordsOfWisdom.png'

export default function WordsOfWisdomCard() {
  return(
        <Card
        sx = {{
            borderRadius: '16px',
            height: 'fit-content',
            boxShadow: 5,
            bgcolor: 'transparent'
        }}
        className = "cardClass">
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
                    <div style={{ fontSize: "smaller", color: "#888" }}>librarys/frameworks used</div>
                    <div style={{ fontWeight: "bold", fontSize: "medium" }}>Words of Wisdom</div>
                    <div style={{ fontSize: "small", color: "#555" }}>
                        Words of Wisdom is a quote generator that provides inspirational content whenever you need a boost. This project is my first experience working with Python Flask and attempting to create an API.
                    </div>
                </CardContent>
            </a>
        </Card>
  );
}
