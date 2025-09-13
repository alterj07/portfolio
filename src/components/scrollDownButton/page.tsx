'use client'

import React from 'react'
import '../../css/introduction.css'
import { FaAngleDown } from "react-icons/fa6";
export default function ScrollDownButton() {

    // interface ScrollEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {}

    const handleScrollDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        e.preventDefault();

        window.scrollBy({
            top: window.innerHeight * 0.9,
            behavior: 'smooth'
        });
    };

    return (
        <div id="scrollDownContainer">
            <div id="container" onClick={handleScrollDown} style={{cursor: 'pointer'}}>
                <span id="scrollDownText">Scroll Down for More</span>
                <FaAngleDown size="2em" color="white"/>
            </div>
        </div>
    )
}
