import React from 'react'
import "../../css/classes.css" 
import '../../css/introduction.css'
import ProfilePic from '../../assets/2.png'
import HiddenPic from '../../assets/1.png'
export default function Introduction() {
    return (
        <div id = "introductionContainer">
            <div id = "pictureContainer">
                <img src = {ProfilePic.src} alt="Jayden Chun" id = "profilePicture"/>
                <img src = {HiddenPic.src} alt="Jayden Chun" id = "hiddenProfilePicture"/>
            </div>
            <div id = "nameContainer">
                <h1 id="name">Jayden Chun</h1>
                <p id = "class">Class of &apos;26</p>
                <p id="description">Aspiring Engineer<br/>Passionate Cellist</p>
            </div>
        </div>
    )
}