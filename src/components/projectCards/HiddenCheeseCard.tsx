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
      title="Hidden Cheese"
      description="For Hack Club's Sprig YSWS, this is a simple mind-stretching single player game to warm-up your mind! Consume as many pieces of cheese as you can! Dodge enemies! Memorize patterns!"
      languages={<JavaScriptComponent />}
      media={<Image src={SprigPic.src} alt="Sprig Project Screenshot" width="500" height="500" />}
    />
  );
}
