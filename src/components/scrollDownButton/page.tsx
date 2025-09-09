'use client'

import React from 'react'
import '../../css/introduction.css'
import { FaAngleDown } from "react-icons/fa6";
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * A component that creates a scroll-down button.
 *
 * The component will smoothly scroll down by 90% of the window's height when clicked.
 *
 * Props:
 *   - None
 *
 * Example:
 *   
/*******  fcdc7068-122f-44a9-b4fc-366e7a26b206  *******/
export default function ScrollDownButton() {

    interface ScrollEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {}

    const handleScrollDown = (e: ScrollEvent): void => {
        e.preventDefault();

        window.scrollBy({
            // top: window.innerHeight,
            top: window.innerHeight * 0.9,
            behavior: 'smooth'
        });
    };

    return (
        <div id="scrollDownContainer">
            <div id="container" onClick={handleScrollDown} style={{cursor: 'pointer'}}>
                <span id="scrollDownText">Scroll Down for More</span>
                <FaAngleDown size="2em"/>
            </div>
        </div>
    )
}
