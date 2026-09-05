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
      description="Words of Wisdom is a quote generator that provides inspirational content whenever you need a boost. This project is my first experience working with Python Flask and attempting to create an API."
      languages={<><HTMLComponent /><PythonComponent /></>}
      media={<Image src={WordsOfWisdomPic.src} alt="Words-Of-Wisdom project screenshot" width="500" height="500" />}
    />
  );
}
