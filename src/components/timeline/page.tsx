// use client
"use client"
import React from 'react';
import '../../css/timeline.css'
export default function Timeline(){
    const [EducationIsVisible, EducationSetVisible] = React.useState(true);
    const [WorkIsVisible, WorkSetVisible] = React.useState(false);

    const showEducation = () => {
        const educationElement = document.getElementById('timelineEducation');
        const experienceElement = document.getElementById('timelineExperience');
        if (educationElement && experienceElement) {
            // educationElement.style.display = 'block';
            // experienceElement.style.display = 'none';
            educationElement.style.opacity = '1';
            experienceElement.style.opacity = '0';
        }
    }
    const showWork = () => {
        const educationElement = document.getElementById('timelineEducation');
        const experienceElement = document.getElementById('timelineExperience');
        if (educationElement && experienceElement) {
            // educationElement.style.display = 'none';
            // experienceElement.style.display = 'block';
            educationElement.style.opacity = '0';
            experienceElement.style.opacity = '1';
        }
    }
    return (
        <div id = "timelineContainer">
            <h1 id = "timelineTitle">Timeline</h1> 
            <div id = "timelineSwitchContainer">
                <div id = "timelineTabs">
                        <div id = "timelineEducationContainer" onClick = {showEducation}>
                        <h2>Education</h2>
                    </div>
                    <div id = "timelineWorkContainer" onClick = {showWork}>
                        <h2>Experience</h2>
                    </div>
                </div>
                <div id = "timelineEducation">
                    <div id = "timeline"/>
                    <div id = "highschoolGraduation">
                        {timelineItemRight({
                            date: "August 15, 2023 - 22 May, 2026",
                            title: "McNeil High School",
                            items: [
                                "Graduated with Honors",
                                "Member of the National Honor Society",
                                "Alright Cellist"
                            ]
                        })}
                    </div>
                </div>
                <div id = "timelineExperience">
                    <div id = "nasaInternship">
                        {timelineItemLeft({
                            date: "September 1, 2024 - June 13, 2025",
                            title: "Intern at NASA HAS",
                            items: [
                                "CAD Modeling"
                            ]
                        })}
                    </div>
                    <div id = "timeline"/>
                    <div id = "silviaInternship">
                        {timelineItemRight({
                            date: "June 1, 2025 - Present",
                            title: "Software Engineer + Research Intern",
                            items: [
                                "Collecting Data for AI Pattern Recognition Softwares"
                            ]
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

type TimelineItemProps = {
    date: string;
    title: string;
    items: string[];
};

function timelineItemRight({ date, title, items }: TimelineItemProps)
{
    return (
        <div className = "timelineItemRight">
            <div className = "timelineHeading">
                <h3 className = "timelineDate">
                    {date}
                </h3>
            </div>
            <div className = "timelineContent">
                <p>{title}</p>
                <ul className = "itemList">
                    {items.map((item, index) => (
                        <li key = {index} className = "itemDescription">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function timelineItemLeft({ date, title, items }: TimelineItemProps)
{
    return (
        <div className = "timelineItemLeft">
            <div className = "timelineHeading">
                <h3 className = "timelineDate">
                    {date}
                </h3>
            </div>
            <div className = "timelineContent">
                <p>{title}</p>
                <ul className = "itemList">
                    {items.map((item, index) => (
                        <li key = {index} className = "itemDescription">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}