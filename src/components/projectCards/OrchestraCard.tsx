'use client'
import Image from 'next/image'
import OrchestraPic from '../../assets/orchestra.png'
import HTMLComponent from '../libraryCards/html'
import CSSComponent from '../libraryCards/css'
import ProjectCard from './ProjectCard'

export default function OrchestraCard() {
  return (
    <ProjectCard
      href="https://orchestral-pieces.jhchun.dev"
      githubHref="https://github.com/alterj07/orchestral-pieces"
      title="Orchestral-Pieces"
      date="September 2024 - October 2024"
      bullets={[
        "Created as my first web development project for Hack Club's Boba Drops initiative.",
        "Showcases a curated collection of classical orchestral pieces performed during high school.",
        "Designed with clean HTML and CSS to create an accessible audio and visual listening library.",
      ]}
      languages={<><HTMLComponent /><CSSComponent /></>}
      media={<Image src={OrchestraPic.src} alt="Orchestral-Pieces Project Screenshot" width="500" height="500" />}
    />
  );
}
