import React from 'react';
import '../../css/timeline.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {SilviaLogo} from '../timelineIcons/page';
import {NASALogo} from '../timelineIcons/page';
import {McNeilLogo} from '../timelineIcons/page';
import {TAMULogo} from '../timelineIcons/page';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../../css/timeline.css'

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
            <div id = "timelineTopContainer">
                <TimelineButtons mode={mode} onModeChange={handleModeChange} />
            </div>
            <div id =  "timelineContainer">
                <div id = "timelineEducation">
                    <Timeline id = "timeline">
                        <McNeilTimeline />
                    </Timeline>
                </div>
            </div>
        </div>
    )
    }
    else if(mode === 'experience'){
        return (
            <div id = "timelineComponent">
                <div id = "timelineTopContainer">
                    <TimelineButtons mode={mode} onModeChange={handleModeChange} />
                </div>
                <div id =  "timelineContainer">
                    <div id = "timelineExperience">
                        <Timeline id = "timeline">
                            <SilviaTimeline />
                            <TAMUResearchTimeline />
                            <NASATimeline />
                        </Timeline>
                    </div>
                </div>
            </div>
        )
    }
}

function SilviaTimeline() {
    return (
        <TimelineItem className = "timeline-item">
            <TimelineOppositeContent sx = {{marginTop: '0.7rem'}}>
                <h4 className = "timeline-date">June 2025 - Present</h4>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot sx={{ border: 'none', padding: 0 }}>
                    <SilviaLogo />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <h3 className = "timeline-name">Silvia</h3>
                <h4 className = "timeline-title">Intern</h4>
                <ul className = "timeline-description">
                    <li>Contributed to the design and testing of a multi-domain mobile technology program for dementia prevention</li>
                    <li>Aided in data collection to examine the effectiveness of digital tools in reducing dementia risk</li>
                </ul>
            </TimelineContent>
        </TimelineItem>
    )
}

function TAMUResearchTimeline() {
    return (
        <TimelineItem className = "timeline-item">
            <TimelineOppositeContent sx = {{marginTop: '0.7rem'}}>
                <h4 className = "timeline-date">June 2025 - Present</h4>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot sx={{ border: 'none', padding: 0 }}>
                    <TAMULogo />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
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
            <TimelineOppositeContent sx = {{marginTop: '1.7rem'}}>
                <h4 className = "timeline-date">August 2024 - June 2025</h4>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot sx={{ border: 'none', padding: 0, backgroundColor: 'transparent' }}>
                    <NASALogo />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <h3 className = "timeline-name">NASA HAS Aerospace Scholars</h3>
                <h4 className = "timeline-title">Intern</h4>
                <ul className = "timeline-description">
                    <li>Applied CAD, coding, and systems engineering skills in a rigorous Moonshot mission simulation with NASA engineers</li>
                    <li>Participated in a year-long program, researching interstellar bodies, designing aerospace tools and habitats, creating Scratch programs, and presenting findings to professors and peers</li>
                </ul>
            </TimelineContent>
        </TimelineItem>
    )
}

function McNeilTimeline() {
    return (
        <TimelineItem className = "timeline-item">
            <TimelineOppositeContent sx = {{marginTop: '0.7rem'}}>
                <h4 className = "timeline-date">August 2022 - May 2026</h4>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot sx={{ border: 'none', padding: 0 }}>
                    <McNeilLogo />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <h3 className = "timeline-name">McNeil High School</h3>
                <h4 className = "timeline-title">Student</h4>
                <ul className = "timeline-description">
                    <li>Graduating with Distinguished Plan with STEM, Arts and Humanities, and Multidisciplinary Studies Endorsements</li>
                </ul>
            </TimelineContent>
        </TimelineItem>
    )
}