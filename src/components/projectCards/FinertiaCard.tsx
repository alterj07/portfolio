'use client'
import Image from 'next/image'
import FinertiaPic from '../../assets/finertia.png'
import FastAPIComponent from '../libraryCards/fastapi'
import NextJSComponent from '../libraryCards/nextjs'
import ElasticSearchComponent from '../libraryCards/elasticsearch'
import OpenAPIComponent from '../libraryCards/openapi'
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
        "An agentic finance platform that connects bank transactions, ledger entries, invoices, and emails to automate financial reconciliation and answer questions with cited evidence.",
        "Integrated Elasticsearch 8 across seven indices to centralize financial data, with automatic fallback to local storage when the cluster becomes unavailable.",
        "Built a GPT-4o-mini orchestrator with shared memory to route requests to specialist agents, including a reconciliation agent that matches bank transactions to ledger entries through four rule-based passes.",
      ]}
      languages={<><PythonComponent /><FastAPIComponent /><NextJSComponent /><ElasticSearchComponent /><OpenAPIComponent /></>}
      media={<Image src={FinertiaPic.src} alt="Words-Of-Wisdom project screenshot" width="500" height="500" />}
    />
  );
}