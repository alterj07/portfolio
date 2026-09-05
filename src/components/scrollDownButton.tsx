'use client'
import React from 'react'
import '../css/introduction.css'
import { FaAngleDown } from "react-icons/fa6";
import { useScrollReveal } from './ScrollReveal';

export default function ScrollDownButton() {
    const { ref, style } = useScrollReveal<HTMLDivElement>({ delay: 300, distance: 16 });

    const handleScrollDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        e.preventDefault();

        window.scrollBy({
            top: window.innerHeight * 0.9,
            behavior: 'smooth'
        });
    };

    return (
        <div id="scrollDownContainer" ref={ref} style={style}>
            <div id="container" onClick={handleScrollDown} style={{cursor: 'pointer'}}>
                <span id="scrollDownText">Scroll Down for More</span>
                <FaAngleDown size="1.35em" color="currentColor"/>
            </div>
        </div>
    )
}
