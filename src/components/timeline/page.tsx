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
                <TimelineItemContent date = "June 2025 - Current" name = "Intern - Silvia" description = {["Description", "Description 2"]}/>
            </Timeline>
        </div>
    )
}



type TimelineItemContentProps = {
    date: string;
    name: string;
    description: string[];
};

function TimelineItemContent({ date, name, description }: TimelineItemContentProps) {
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
                <ul>
                    {description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </TimelineContent>
        </TimelineItem>
    )
}