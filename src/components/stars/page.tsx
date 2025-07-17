import React from 'react'
import "../../css/stars.css"
export default function Stars() {
    return (
        <div>
            <WhoIAmStar/>
            <LanguagesStar/>
        </div>
    )
}

function WhoIAmStar() {
    return (
        <div>
            <div id = "WhoIAmStar" className="starShape"/>
            <div id = "WhoIAm" className = "starContent">
                <span>
                I am a 17 year-old enthusiastic developer who
                    likes to develop apps, websites, and create any projects my heart desires.
                    I've participated in events like a 28-long hackathon, regional CS UIL Competitions, ...
                    My passion is spread out between playing my cello, competing in tennis, and being a developer/engineer.
                </span>
            </div>
        </div>
    )
}

function LanguagesStar() {
    return (
        <div>
            <div id = "LanguagesStar" className = "starShape"/>
            <div id = "Languages" className = "starContent">
                <span>
                    My repetoire of (fluent or kind of fluent) languages so far:
                    <br/>
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>Some Javascript....</li>
                        <li>Some Swift...</li>
                        <li>English</li>
                        <li>Korean</li>
                        <li>Un poco Espanol</li>
                    </ul>
                </span>
            </div>
        </div>
    )
}