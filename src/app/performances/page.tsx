'use client'
import React from 'react'
import '@/css/classes.css'
import '../../css/performances.css'
import NavBar from '../../components/navBar'
import LaloCard from '@/components/performanceCards/LaloCard'
import AdagioCard from '@/components/performanceCards/AdagioCard'
import ScrollReveal from '@/components/ScrollReveal'

export default function Performances(){
    return (
        <div className="backgroundContainer">
            <NavBar />
            <ScrollReveal>
                <h1 className="topTitle">Performances</h1>
            </ScrollReveal>
            <div className="cardsGrid">
                <ScrollReveal delay={0} style={{ width: '100%', height: '100%' }}>
                    <LaloCard />
                </ScrollReveal>
                <ScrollReveal delay={100} style={{ width: '100%', height: '100%' }}>
                    <AdagioCard />
                </ScrollReveal>
            </div>
        </div>
    )
}
