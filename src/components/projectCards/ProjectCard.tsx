'use client'
import * as React from 'react';
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import "../../css/projects.css"

interface ProjectCardProps {
    href: string;
    githubHref: string;
    title: string;
    bullets?: string[];
    description?: React.ReactNode;
    languages: React.ReactNode;
    media: React.ReactNode;
}

export default function ProjectCard({ href, githubHref, title, bullets, description, languages, media }: ProjectCardProps) {
    return (
        <div className="cardClass">
            <a href={href} target="_blank" rel="noopener noreferrer" className="cardMedia">
                {media}
            </a>
            <div className="cardContent">
                <div className="cardMetaRow">
                    {languages}
                </div>
                <a href={githubHref} target="_blank" rel="noopener noreferrer" className="cardTitle cardTitleLink">
                    <FaGithub className="cardTitleGithubIcon" />
                    <span>{title}</span>
                    <FiArrowUpRight className="cardTitleArrow" />
                </a>
                {bullets && bullets.length > 0 ? (
                    <ul className="cardBulletList">
                        {bullets.map((bullet, idx) => (
                            <li key={idx} className="cardBulletItem">
                                {bullet}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="cardDescription">{description}</div>
                )}
            </div>
        </div>
    );
}
