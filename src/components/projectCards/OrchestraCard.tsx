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
      description="My first website, created for Hack Club's Boba Drops YSWS. Includes the orchestral pieces that I enjoyed during my junior year of high school."
      languages={<><HTMLComponent /><CSSComponent /></>}
      media={<Image src={OrchestraPic.src} alt="Orchestral-Pieces Project Screenshot" width="500" height="500" />}
    />
  );
}
