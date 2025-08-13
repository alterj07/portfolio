import React from 'react';
import "../../css/stars.css";

export default function Stars() {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', minHeight: 600 }}>
            {/* Scattered stars around the center text */}
            <StarWithPrompt
                style={{ top: '30%', left: '25%' }}
                prompt="I am a 17 year-old enthusiastic developer who likes to develop apps, websites, and create any projects my heart desires. I have participated in events like a 28-long hackathon, regional CS UIL Competitions, ... My passion is spread out between playing my cello, competing in tennis, and being a developer/engineer."
            />
            <StarWithPrompt
                style={{ top: '25%', left: '65%' }}
                prompt={<span>My repetoire of languages:<ul><li>Java</li><li>Python</li><li>JavaScript</li><li>Swift</li><li>English</li><li>Korean</li><li>Spanish</li></ul></span>}
            />
            <StarWithPrompt
                style={{ top: '60%', left: '30%' }}
                prompt={<span>Data Structures & Algorithms:<ul><li>Binary Trees</li><li>Graphs</li><li>Dynamic Programming</li><li>Sorting & Searching</li><li>Big O Analysis</li></ul></span>}
            />
            <StarWithPrompt
                style={{ top: '65%', left: '60%' }}
                prompt={<span>System Design:<ul><li>REST APIs</li><li>Microservices</li><li>Database Design</li><li>Scalability</li></ul></span>}
            />
            <StarWithPrompt
                style={{ top: '45%', left: '80%' }}
                prompt={<span>Soft Skills:<ul><li>Communication</li><li>Teamwork</li><li>Problem Solving</li><li>Leadership</li></ul></span>}
            />
            <StarWithPrompt
                style={{ top: '70%', left: '50%' }}
                prompt={<span>Projects:<ul><li>Hackathons</li><li>Open Source</li><li>Personal Portfolio</li></ul></span>}
            />
        </div>
    );
}

function StarWithPrompt({ style, prompt }: { style: React.CSSProperties, prompt: React.ReactNode }) {
    return (
        <div className="starPromptRow" style={{ position: 'absolute', ...style, pointerEvents: 'none' }}>
            <div className="starShape" tabIndex={0} style={{ pointerEvents: 'auto' }} />
            <div className="starContent">{prompt}</div>
        </div>
    );
}