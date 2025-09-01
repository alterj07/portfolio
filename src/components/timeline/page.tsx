import React from 'react';
import '../../css/timeline.css'
// import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
export default function TimelineComponent(){
    return (
        <div id = "timelineContainer">
            <Timeline position="alternate" id = "timeline">
                <TimelineItemContentRight date = "June 2025 - Current" name = "Intern - Silvia" 
                description = {["Contributed to the design and testing of a multi-domain mobile technology program for dementia prevention.",
                "Participated in multilingual translations, community outreach, and recruitment of study participants.",
                "Aided in data collection to examine the effectiveness of digital tools in reducing dementia risk."]}/>

                <TimelineItemContentLeft date = "August 2024 - June 2025" name = "Intern - NASA HAS Aerospace Scholars" 
                description = {["Completed NASA Aerospace Scholars program modules with emphasis on engineering, CAD modeling, and systems design.",
                "Applied CAD, coding, and systems engineering skills in a rigorous Moonshot mission simulation with NASA engineers.",
                "Participated in a year-long program, researching interstellar bodies, designing aerospace tools and habitats, creating Scratch programs, and presenting findings to professors and peers."]}/>
            </Timeline>
        </div>
    )
}



type TimelineItemContentProps = {
    date: string;
    name: string;
    description: string[];
};

function TimelineItemContentRight({ date, name, description }: TimelineItemContentProps) {
    return (
        <TimelineItem className = "timeline-item">
            <TimelineOppositeContent>
                {date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <h3>{name}</h3>
                <ul className = "timeline-description">
                    {description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </TimelineContent>
        </TimelineItem>
    )
}

function TimelineItemContentLeft({ date, name, description }: TimelineItemContentProps) {
    return (
        <TimelineItem className = "timeline-item">
            <TimelineOppositeContent>
                {date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <h3>{name}</h3>
                <ul className = "timeline-description">
                    {description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </TimelineContent>
        </TimelineItem>
    )
}