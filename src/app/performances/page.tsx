'use client'
import React from 'react'
import '../../css/performances.css'
import NavBar from '../../components/navBar'
import LaloCard from '@/components/performanceCards/LaloCard'
import AdagioCard from '@/components/performanceCards/AdagioCard'
export default function Performances(){
    return (
        <div className="backgroundContainer">
            <NavBar />
            <h1 className="topTitle">Performances</h1>
            <div style = {{display: 'flex', flexDirection: 'row', gap: '4vw'}}>
                <LaloCard />
                <AdagioCard />
            </div>
        </div>
    )
}