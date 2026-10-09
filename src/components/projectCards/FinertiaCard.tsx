'use client'
import Image from 'next/image'
import WordsOfWisdomPic from '../../assets/wordsOfWisdom.png'
import HTMLComponent from '../libraryCards/html'
import PythonComponent from '../libraryCards/python'
import ProjectCard from './ProjectCard'

export default function FinertiaCard() {
  return (
    <ProjectCard
      href="https://frontend-three-blush-fejhge5su4.vercel.app/"
      githubHref="https://github.com/alterj07/finertia"
      title="Finertia(HackMIT 2026)"
      date="September 2026"
      bullets={[
        "Integrated Elasticsearch 8 as the storage backend for a FastAPI multi-agent system, indexing bank, ledger, invoice, and email data across 7 indices with automatic fallback to local storage if the cluster is unreachable.",
        "Built an orchestrator agent (OpenAI GPT-4o-mini) that routes requests to specialist agents using shared memory, and a cash reconciliation agent that matches bank transactions to ledger entries using 4 rule-based passes.",
        "Implemented a tool-calling AI chatbot with 9 tools and cited answers, and refined the Next.js UI for a smoother user experience.",
      ]}
      languages={<><HTMLComponent /><PythonComponent /></>}
      media={<Image src={WordsOfWisdomPic.src} alt="Words-Of-Wisdom project screenshot" width="500" height="500" />}
    />
  );
}
