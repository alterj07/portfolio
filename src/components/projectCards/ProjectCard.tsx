'use client'
import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import "../../css/projects.css"

interface ProjectCardProps {
    href: string;
    githubHref: string;
    title: string;
    description: React.ReactNode;
    languages: React.ReactNode;
    media: React.ReactNode;
}

export default function ProjectCard({ href, githubHref, title, description, languages, media }: ProjectCardProps) {
    return (
        <Card sx={{ boxShadow: 'none', bgcolor: 'transparent' }} className="cardClass">
            <a href={href} target="_blank" rel="noopener noreferrer" className="cardMedia">
                {media}
            </a>
            <CardContent className="cardContent" sx={{ padding: 0, '&:last-child': { paddingBottom: 0 } }}>
                <div className="cardMetaRow">
                    {languages}
                </div>
                <a href={githubHref} target="_blank" rel="noopener noreferrer" className="cardTitle cardTitleLink">
                    <FaGithub className="cardTitleGithubIcon" />
                    <span>{title}</span>
                    <FiArrowUpRight className="cardTitleArrow" />
                </a>
                <div className="cardDescription">{description}</div>
            </CardContent>
        </Card>
    );
}
