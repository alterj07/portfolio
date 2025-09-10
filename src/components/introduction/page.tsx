'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import "../../css/classes.css" 
import '../../css/introduction.css'
import ProfilePic from '../../assets/2.png'
import HiddenPic from '../../assets/1.png'
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import NotficationBox from '../../components/notificationBox/page'
export default function Introduction() {
    const [isCopied, setIsCopied] = useState(false);
    const email = "jayden.h.chun@gmail.com";

    async function copyEmail(email : string) {
        try {
            await navigator.clipboard.writeText(email);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }


    return (
        <div id = "introductionContainer">
            <div id = "pictureContainer">
                <Image src = {ProfilePic.src} alt="Jayden Chun" width='500' height='500' id = "profilePicture"/>
                <Image src = {HiddenPic.src} alt="Jayden Chun" width='500' height='500' id = "hiddenProfilePicture"/>
            </div>
            <div id = "verticalContainer">
                <div id = "nameContainer">
                    <h1 id="name">Jayden Chun</h1>
                    <p id="description">Aspiring Engineer<br/>Passionate Cellist</p>
                </div>
                <div id = "linkContainer">
                    <a href = "https://www.github.com/alterj07"
                        target = "_blank">
                        <FiGithub className = "linkIcon"/>
                    </a>
                    <button onClick = {() => {
                            copyEmail(email);

                        }}>
                        <MdOutlineEmail className = "linkIcon"/>
                    </button>
                    <a href = "https://www.google.com/maps/place/Austin,+TX/@30.2960107,-97.8977776,11z/data=!3m1!4b1!4m6!3m5!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.267153!4d-97.7430608!16zL20vMHZ6bQ?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                        target = "_blank">
                        <MdLocationPin className = "linkIcon"/>
                    </a>
                </div>
            </div>
            <NotficationBox visible={isCopied} text="Email Copied to Clipboard!" />
        </div>
    )
}