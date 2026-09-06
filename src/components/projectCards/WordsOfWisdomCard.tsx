'use client'
import Image from 'next/image'
import WordsOfWisdomPic from '../../assets/wordsOfWisdom.png'
import HTMLComponent from '../libraryCards/html'
import PythonComponent from '../libraryCards/python'
import ProjectCard from './ProjectCard'

export default function WordsOfWisdomCard() {
  return (
    <ProjectCard
      href="https://words-of-wisdom.jhchun.dev"
      githubHref="https://github.com/alterj07/words-of-wisdom"
      title="Words of Wisdom"
      date="January 2025"
      bullets={[
        "Interactive inspirational quote generator delivering uplifting thoughts and wisdom on demand.",
        "Built with a Python Flask REST API backend to dynamically serve curated quotes.",
        "First full-stack project integrating a custom Python web service with a responsive frontend.",
      ]}
      languages={<><HTMLComponent /><PythonComponent /></>}
      media={<Image src={WordsOfWisdomPic.src} alt="Words-Of-Wisdom project screenshot" width="500" height="500" />}
    />
  );
}
