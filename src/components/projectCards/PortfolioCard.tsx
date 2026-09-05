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
      description="This website was built to serve as a centralized platform to present who I am as a developer and creator."
      languages={<><TypeScriptComponent /><NextJSComponent /></>}
      media={<Image src={PortfolioPic.src} alt="Portfolio Screenshot" width="500" height="500" />}
    />
  );
}
