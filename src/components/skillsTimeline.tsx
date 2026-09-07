'use client'
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Avatar from '@mui/material/Avatar';
import { FaCode, FaReact, FaTerminal, FaAward } from 'react-icons/fa';
import '../css/timeline.css';

export default function SkillsTimeline() {
    return (
        <Timeline
            id="timeline"
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: { flex: 0 },
            }}
        >
                {/* 1. Programming Languages */}
                <TimelineItem className="timeline-item">
                    <TimelineOppositeContent />
                    <TimelineSeparator>
                        <TimelineDot sx={{ border: 'none', padding: 0, backgroundColor: 'transparent' }}>
                            <Avatar sx={{ width: 40, height: 40, bgcolor: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)', color: 'var(--color-accent)' }}>
                                <FaCode size={17} />
                            </Avatar>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline-content">
                        <h3 className="timeline-name">Languages</h3>
                        <h4 className="timeline-title">Core Programming</h4>
                        <div className="skillsPillContainer">
                            {['Java', 'TypeScript', 'Python', 'JavaScript', 'HTML / CSS', 'SQL'].map((skill) => (
                                <span key={skill} className="skillPill">{skill}</span>
                            ))}
                        </div>
                    </TimelineContent>
                </TimelineItem>

                {/* 2. Frameworks & Libraries */}
                <TimelineItem className="timeline-item">
                    <TimelineOppositeContent />
                    <TimelineSeparator>
                        <TimelineDot sx={{ border: 'none', padding: 0, backgroundColor: 'transparent' }}>
                            <Avatar sx={{ width: 40, height: 40, bgcolor: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)', color: 'var(--color-accent)' }}>
                                <FaReact size={18} />
                            </Avatar>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline-content">
                        <h3 className="timeline-name">Frameworks &amp; Libraries</h3>
                        <h4 className="timeline-title">Web &amp; Mobile Development</h4>
                        <div className="skillsPillContainer">
                            {['React', 'Next.js', 'React Native', 'Node.js', 'Flask', 'Tailwind CSS', 'Expo'].map((skill) => (
                                <span key={skill} className="skillPill">{skill}</span>
                            ))}
                        </div>
                    </TimelineContent>
                </TimelineItem>

                {/* 3. Developer Tools & Platforms */}
                <TimelineItem className="timeline-item">
                    <TimelineOppositeContent />
                    <TimelineSeparator>
                        <TimelineDot sx={{ border: 'none', padding: 0, backgroundColor: 'transparent' }}>
                            <Avatar sx={{ width: 40, height: 40, bgcolor: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)', color: 'var(--color-accent)' }}>
                                <FaTerminal size={16} />
                            </Avatar>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline-content">
                        <h3 className="timeline-name">Tools &amp; Platforms</h3>
                        <h4 className="timeline-title">Development &amp; DevOps</h4>
                        <div className="skillsPillContainer">
                            {['Git', 'GitHub', 'Linux', 'VS Code', 'Vercel'].map((skill) => (
                                <span key={skill} className="skillPill">{skill}</span>
                            ))}
                        </div>
                    </TimelineContent>
                </TimelineItem>

                {/* 4. Certifications (Bottom) */}
                <TimelineItem className="timeline-item">
                    <TimelineOppositeContent />
                    <TimelineSeparator>
                        <TimelineDot sx={{ border: 'none', padding: 0, backgroundColor: 'transparent' }}>
                            <Avatar sx={{ width: 40, height: 40, bgcolor: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)', color: 'var(--color-accent)' }}>
                                <FaAward size={18} />
                            </Avatar>
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent className="timeline-content">
                        <h3 className="timeline-name">Certifications</h3>
                        <h4 className="timeline-title">Credentials &amp; Honors</h4>
                        <div className="certificationsList">
                            {/* Edit or add your certifications below */}
                            <a
                                href="https://verify.skilljar.com/c/bad7sx27ajet"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="certificationEntry"
                            >
                                <div className="certificationHeader">
                                    <span className="certificationName">AI Fluency Framework &amp; Foundations</span>
                                    <span className="timeline-date certificationDate">June 2026</span>
                                </div>
                                <p className="certificationIssuer">Anthropic</p>
                            </a>
                            <a
                                href="https://verify.skilljar.com/c/2dkmzqtqkr3i"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="certificationEntry"
                            >
                                <div className="certificationHeader">
                                    <span className="certificationName">Introduction to Model Context Protocol</span>
                                    <span className="timeline-date certificationDate">June 2026</span>
                                </div>
                                <p className="certificationIssuer">Anthropic</p>
                            </a>
                        </div>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
    );
}

