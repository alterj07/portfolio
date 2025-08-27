import React from 'react';
import '../../css/timeline.css'
export default function Timeline(){
    return (
        <div id = "timelineContainer">
            <h1 id = "timelineTitle">Timeline</h1> 
            <div id = "timelineSwitchContainer">
                <div id = "timelineTabs">
                    <div id = "timelineEducationContainer">
                        <h2>Education</h2>
                    </div>
                    <div id = "timelineWorkContainer">
                        <h2>Experience</h2>
                    </div>
                </div>
                <div id = "timelineEducation">
                    
                    
                    <div id = "timeline"/>
                    <div id = "highschoolGraduation">
                        <div className = "timelineHeading">
                            <h3 className = "timelineDate">
                                August 15, 2023 - 22 May, 2026
                            </h3>
                        </div>
                        <div className = "timelineItem">
                            <p>McNeil High School</p>
                            <ul className = "itemList">
                                <li className = "itemDescription">Graduated with Honors</li>
                                <li className = "itemDescription">Member of the National Honor Society</li>
                                <li className = "itemDescription">Participated in the Science Fair</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id = "timelineExperience">
                </div>
            </div>
        </div>
    )
}