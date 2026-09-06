'use client'
import Image from 'next/image'
import SprigPic from '../../assets/sprig.png'
import JavaScriptComponent from '../libraryCards/javascript'
import ProjectCard from './ProjectCard'

export default function HiddenCheeseCard() {
  return (
    <ProjectCard
      href="https://sprig.hackclub.com/share/BOoX5Ew1gWPRESZAvVlY"
      githubHref="https://github.com/alterj07/Sprig"
      title="The Hidden Cheese"
      date="December 2024"
      bullets={[
        "Developed for Hack Club's Sprig console as an engaging 2D puzzle arcade game.",
        "Players navigate mazes to collect cheese while dodging patrolling enemies and memorizing patterns.",
        "Programmed using Sprig's lightweight JavaScript game engine and custom tilemaps.",
      ]}
      languages={<JavaScriptComponent />}
      media={<Image src={SprigPic.src} alt="Sprig Project Screenshot" width="500" height="500" />}
    />
  );
}
