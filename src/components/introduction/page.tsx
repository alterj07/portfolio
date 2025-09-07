import React from 'react'
import "../../css/classes.css" 
import '../../css/introduction.css'
import ProfilePic from '../../assets/2.png'
import HiddenPic from '../../assets/1.png'
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
export default function Introduction() {
    return (
        <div id = "introductionContainer">
            <div id = "pictureContainer">
                <img src = {ProfilePic.src} alt="Jayden Chun" id = "profilePicture"/>
                <img src = {HiddenPic.src} alt="Jayden Chun" id = "hiddenProfilePicture"/>
            </div>
            <div id = "verticalContainer">
                <div id = "nameContainer">
                    <h1 id="name">Jayden Chun</h1>
                    <p id="description">Aspiring Engineer<br/>Passionate Cellist</p>
                </div>
                <div id = "linkContainer">
                    <a href = "github.com/alterj07"
                        target = "_blank">
                        {/* <FiGithub id = "githubLogo"/> */}
                        <FiGithub color = "black" />
                    </a>
                    <a href = "jayden.h.chun@gmail.com"
                        target = "_blank">
                        <MdOutlineEmail color = "black"/>
                    </a>
                    <a href = "https://www.google.com/maps/place/Austin,+TX/@30.2960107,-97.8977776,11z/data=!3m1!4b1!4m6!3m5!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.267153!4d-97.7430608!16zL20vMHZ6bQ?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                        target = "_blank">
                        <MdLocationPin color = "black"/>
                    </a>
                    {/* <a href = "resume"
                        target = "_blank">
                            <div id = "resumeContainer">
                                <p>resume</p>
                            </div>
                    </a> */}
                </div>
            </div>
        </div>
    )
}