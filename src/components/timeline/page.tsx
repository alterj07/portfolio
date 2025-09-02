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
import TimelineButtons from '../TimelineButtons';
export default function TimelineComponent(){
    return (
        <div id = "timelineComponent">
            <div id = "timelineTopContainer">
                <TimelineButtons />
            </div>
            <div id =  "timelineContainer">
                <div id = "timelineEducation">
                    <Timeline id = "timeline">
                        <McNeilTimeline />
                    </Timeline>
                </div>
                <div id = "timelineExperience">
                    <Timeline id = "timeline">
                        <SilviaTimeline />
                        <NASATimeline />
                    </Timeline>
                </div>
            </div>
        </div>
    )
}

function SilviaTimeline() {
    return (
        <TimelineItem className = "timeline-item">
            <TimelineOppositeContent sx = {{marginTop: '0.7rem'}}>
                <h4 className = "timeline-date">June 2025 - Current</h4>
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
                    <li>Contributed to the design and testing of a multi-domain mobile technology program for dementia prevention.</li>
                    <li>Aided in data collection to examine the effectiveness of digital tools in reducing dementia risk.</li>
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
                    <li>Applied CAD, coding, and systems engineering skills in a rigorous Moonshot mission simulation with NASA engineers.</li>
                    <li>Participated in a year-long program, researching interstellar bodies, designing aerospace tools and habitats, creating Scratch programs, and presenting findings to professors and peers.</li>
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
                    <li>Will graduate with a STEM and Liberal Arts Endorsements</li>
                </ul>
            </TimelineContent>
        </TimelineItem>
    )
}

// type TimelineItemContentProps = {
//     date: string;
//     name: string;
//     title: string;
//     description: string[];
// };

// function TimelineItemContent({ date, name, title, description }: TimelineItemContentProps) {
//     return (
//         <TimelineItem className = "timeline-item">
//             <TimelineOppositeContent>
//                 <h4 className = "timeline-date">{date}</h4>
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//                 <TimelineDot />
//                 <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent>
//                 <h3 className = "timeline-name">{name}</h3>
//                 <h4 className = "timeline-title">{title}</h4>
//                 <ul className = "timeline-description">
//                     {description.map((desc, index) => (
//                         <li key={index}>{desc}</li>
//                     ))}
//                 </ul>
//             </TimelineContent>
//         </TimelineItem>
//     )
// }
