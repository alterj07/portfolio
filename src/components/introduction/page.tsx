import React from 'react'
import "../../css/classes.css" 
import '../../css/introduction.css'
import ProfilePic from '../../assets/pfp.jpg'
import HiddenPic from '../../assets/pfp-hover.jpg'
export default function Introduction() {
    return (
        <div id = "introductionContainer">
            <div id = "pictureContainer">
                <img src = {ProfilePic.src} alt="Jayden Chun" id = "profilePicture"/>
                <img src = {HiddenPic.src} alt="Jayden Chun" id = "hiddenProfilePicture"/>
            </div>
            <div id = "nameContainer">
                <h1 id="name">Jayden Chun</h1>
                <p id="description">Class of 2026<br/>Aspiring Engineer<br/>Passionate Cellist</p>
            </div>
        </div>
    )
}