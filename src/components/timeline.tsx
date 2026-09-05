'use client'
import '../css/timeline.css'
import * as React from 'react';
import ScrollReveal from './ScrollReveal';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import {SilviaLogo} from './timelineIcons';
import {DateMaroonLogo} from './timelineIcons'
import {NASALogo} from './timelineIcons';
import {McNeilLogo} from './timelineIcons';
import {TAMULogo} from './timelineIcons';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface TimelineButtonsProps {
    mode: string;
    onModeChange: (newMode: string) => void;
}

function TimelineButtons({ mode, onModeChange }: TimelineButtonsProps) {
    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newMode: string,
    ) => {
        if (newMode !== null) { // Prevent deselecting all buttons
        onModeChange(newMode);
        }
    };

    return (
        <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleAlignment}
        aria-label="timeline selection"
        className="timeline-buttons"
        >
            <ToggleButton value="education" aria-label="education" className="timeline-button">
                <p className="timeline-button-text">Education</p>
            </ToggleButton>
            <ToggleButton value="experience" aria-label="experience" className="timeline-button">
                <p className="timeline-button-text">Experience</p>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default function TimelineComponent(){
    const [mode, setMode] = React.useState<string>('experience');

    const handleModeChange = (newMode: string) => {
        setMode(newMode);
    };
    if(mode === 'education'){
        return (
        <div id = "timelineComponent">
            <ScrollReveal>
                <div id = "timelineTopContainer">
                    <TimelineButtons mode={mode} onModeChange={handleModeChange} />
                </div>
            </ScrollReveal>
            <ScrollReveal delay={150} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <div id =  "timelineContainer">
                    <div id = "timelineEducation">
                        <Timeline id = "timeline" sx={{[`& .${timelineOppositeContentClasses.root}`]: {flex: 0,},}}>
                        {/* <Timeline id = "timeline"> */}
                            <TAMUTimeline />
                            <McNeilTimeline />
                        </Timeline>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    )
    }
    else if(mode === 'experience'){
        return (
            <div id = "timelineComponent">
                <ScrollReveal>
                    <div id = "timelineTopContainer">
                        <TimelineButtons mode={mode} onModeChange={handleModeChange} />
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={150} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <div id =  "timelineContainer">
                        <div id = "timelineExperience">
                            <Timeline id = "timeline" sx={{[`& .${timelineOppositeContentClasses.root}`]: {flex: 0,},}}>
                                <DateMaroonTimeline />
                                <SilviaTimeline />
                                <TAMUResearchTimeline />
                                <NASATimeline />
                            </Timeline>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        )
    }
}

function DateMaroonTimeline() {
    return (
        <TimelineItem className = "timeline-item">
            <TimelineOppositeContent/>
            <TimelineSeparator>
                <TimelineDot sx={{ border: 'none', padding: 0 }}>
                    <DateMaroonLogo />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className = "timeline-content">
                <h4 className = "timeline-date">July 2026 - Current</h4>
                <h3 className = "timeline-name">Date Maroon</h3>
                <h4 className = "timeline-title">Intern</h4>
                <div className = "timeline-description-container">
                    <ul className = "timeline-description">
                        <li>Conducted structured user acceptance testing (UAT) on a personality-insights iOS application, evaluating functionality, performance, and user experience during weekly test sessions and documenting findings for engineering review.</li>
                        <li>Identified usability issues and product friction points, providing detailed, actionable feedback to product and engineering teams to support iterative improvements and feature prioritization.</li>
                        <li>Applied software QA methodologies and critical analysis to assess app performance from an end-user perspective, supporting data-informed product decisions and feature prioritization.</li>
                    </ul>
                </div>
            </TimelineContent>
        </TimelineItem>
    )
}

function SilviaTimeline() {
    return (
        <TimelineItem className = "timeline-item">
            <TimelineOppositeContent/>
            <TimelineSeparator>
                <TimelineDot sx={{ border: 'none', padding: 0 }}>
                    <SilviaLogo />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className = "timeline-content">
                <h4 className = "timeline-date">June 2025 - August 2025</h4>
                <h3 className = "timeline-name">Silvia</h3>
                <h4 className = "timeline-title">Intern</h4>
                <div className = "timeline-description-container">
                    <ul className = "timeline-description">
                        <li>Performed UI/UX testing and feature validation for a mobile dementia-prevention platform, identifying critical usability improvements for elderly users and communicating findings to the team.</li>
                        <li>Supported multilingual translations, community outreach, and recruitment of study participants for digital health research.</li>
                        <li>Examined the effectiveness of digital tools in reducing dementia risk</li>
                    </ul>
                </div>
            </TimelineContent>
        </TimelineItem>
    )
}

function TAMUResearchTimeline() {
    return (
        <TimelineItem className = "timeline-item">
            <TimelineOppositeContent/>
            <TimelineSeparator>
                <TimelineDot sx={{ border: 'none', padding: 0 }}>
                    <TAMULogo />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent  className = "timeline-content">
                <h4 className = "timeline-date">June 2025 - July 2025</h4>
                <h3 className = "timeline-name">A&amp;M Research</h3>
                <h4 className = "timeline-title">Research Assistant/Lab Intern</h4>
                <ul className = "timeline-description">
                    <li>Assisted with outreach coordination to local rehabilitation centers and adaptive sports organizations to facilitate data collection</li>
                    <li>Involved with multiple federally and internationally funded research projects related to health promotion and preventive software for older adults living with dementia</li>
                </ul>
            </TimelineContent>
        </TimelineItem>
    )
}


function NASATimeline() {
    return (
        <TimelineItem className = "timeline-item">
            <TimelineOppositeContent/>
            <TimelineSeparator>
                <TimelineDot sx={{ border: 'none', padding: 0, backgroundColor: 'transparent' }}>
                    <NASALogo />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent  className = "timeline-content">
                <h4 className = "timeline-date">October 2024 - July 2025</h4>
                <h3 className = "timeline-name">NASA HAS Aerospace Scholars</h3>
                <h4 className = "timeline-title">Intern</h4>
                <ul className = "timeline-description">
                    <li>Completed NASA Aerospace Scholars program modules emphasizing engineering, CAD modeling, and systems design, finishing the year with an A+ average.</li>
                    <li>Collaborated with a team of 7 peers to engineer a lunar habitat module using CAD and systems design, successfully passing a rigorous NASA mission simulation review.</li>
                    <li>Researched interstellar bodies, designed aerospace tools and habitats, created Scratch programs, and presented findings to professors and peers.</li>
                </ul>
            </TimelineContent>
        </TimelineItem>
    )
}

function TAMUTimeline() {
    return (
        <TimelineItem className = "timeline-item">
            <TimelineOppositeContent />
            <TimelineSeparator>
                <TimelineDot sx={{ border: 'none', padding: 0 }}>
                    <TAMULogo />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent  className = "timeline-content">
                <h4 className = "timeline-date">August 2026 - Current</h4>
                <h3 className = "timeline-name">Texas A&M University</h3>
                <h4 className = "timeline-title">Student</h4>
                <ul className = "timeline-description">
                    <li>Pursuing a degree in Computer Science with Engineering Honors</li>
                </ul>
            </TimelineContent>
        </TimelineItem>
    )
}

function McNeilTimeline() {
    return (
        <TimelineItem className = "timeline-item">
            <TimelineOppositeContent />
            <TimelineSeparator>
                <TimelineDot sx={{ border: 'none', padding: 0 }}>
                    <McNeilLogo />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent  className = "timeline-content">
                <h4 className = "timeline-date">August 2022 - May 2026</h4>
                <h3 className = "timeline-name">McNeil High School</h3>
                <h4 className = "timeline-title">Student</h4>
                <ul className = "timeline-description">
                    <li>Graduating with Distinguished Plan with STEM, Arts and Humanities, and Multidisciplinary Studies Endorsements</li>
                </ul>
            </TimelineContent>
        </TimelineItem>
    )
}