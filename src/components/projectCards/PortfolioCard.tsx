'use client'
import Image from 'next/image'
import PortfolioPic from '../../assets/PortfolioImg.png'
import TypeScriptComponent from '../../components/libraryCards/typescript'
import NextJSComponent from '../../components/libraryCards/nextjs'
import ProjectCard from './ProjectCard'

export default function PortfolioCard() {
  return (
    <ProjectCard
      href="https://jhchun.dev"
      githubHref="https://github.com/alterj07/portfolio"
      title="Portfolio"
      date="May 2025 - September 2026"
      bullets={[
        "Central hub showcasing software engineering projects, research experience, and cello performances.",
        "Built with Next.js App Router, TypeScript, Tailwind CSS, and custom bidirectional scroll reveal animations.",
        "Designed with a modern, responsive minimalist dark-mode aesthetic.",
      ]}
      languages={<><TypeScriptComponent /><NextJSComponent /></>}
      media={<Image src={PortfolioPic.src} alt="Portfolio Screenshot" width="500" height="500" />}
    />
  );
}
