'use client'
import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image, { StaticImageData } from 'next/image'
import { FiArrowUpRight } from "react-icons/fi";
import '../../css/performances.css'

interface PerformanceCardProps {
    href: string;
    imageSrc: StaticImageData;
    imageAlt: string;
    composer: string;
    title: string;
    awards: string[];
}

export default function PerformanceCard({ href, imageSrc, imageAlt, composer, title, awards }: PerformanceCardProps) {
    return (
        <Card sx={{ boxShadow: 'none', bgcolor: 'transparent' }} className="videoPicture">
            <a href={href} target="_blank" rel="noopener noreferrer">
                <div className="cardMedia">
                    <Image src={imageSrc.src} alt={imageAlt} width="500" height="500" />
                </div>
                <CardContent className="cardContent" sx={{ padding: 0, '&:last-child': { paddingBottom: 0 } }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-tertiary)' }}>{composer}</div>
                    <div className="cardTitle">
                        <span>{title}</span>
                        <FiArrowUpRight className="cardTitleArrow" />
                    </div>
                    <ul className="awardsList">
                        {awards.map((award) => (
                            <li key={award}>{award}</li>
                        ))}
                    </ul>
                </CardContent>
            </a>
        </Card>
    );
}
