'use client'
import Image from 'next/image'
import CookieCrumblPic from '../../assets/cookieCrumbl.png'
import HTMLComponent from '../libraryCards/html'
import CSSComponent from '../libraryCards/css'
import JavaScriptComponent from '../libraryCards/javascript'
import ProjectCard from './ProjectCard'

export default function CookieCrumblCard() {
  return (
    <ProjectCard
      href="https://cookiecrumbl.jhchun.dev"
      githubHref="https://github.com/alterj07/CookieCrumbl"
      title="CookieCrumbl"
      description={<>CookieCrumbl is a project developed for the Hack Club Scrapyard Hackathon, aiming to provide a unique and &quot;scrappy&quot; web experience. The website contains the &quot;cure to cancer&quot; but must first agree with cookies, human authentication, and a mass of ads. This was our first Hackathon. We&apos;ve learned a lot, and still have a lot to learn...</>}
      languages={<><HTMLComponent /><CSSComponent /><JavaScriptComponent /></>}
      media={<Image src={CookieCrumblPic.src} alt="CookieCrumbl Project Screenshot" width="500" height="500" />}
    />
  );
}
