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
      date="March 2025"
      bullets={[
        "Developed for Hack Club's Scrapyard Hackathon as a satirical, humorous web experience.",
        "Features interactive cookie consent traps, captcha human authentication, and dynamic ad popups.",
        "First collaborative hackathon project emphasizing DOM manipulation and responsive design.",
      ]}
      languages={<><HTMLComponent /><CSSComponent /><JavaScriptComponent /></>}
      media={<Image src={CookieCrumblPic.src} alt="CookieCrumbl Project Screenshot" width="500" height="500" />}
    />
  );
}
