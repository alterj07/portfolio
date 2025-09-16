'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import SilviaPic from '../assets/silvia-logo.png'
import NASAPic from '../assets/nasa-logo3.png'
import TAMUPic from '../assets/tamu.png'
import McNeilPic from '../assets/mcneil-logo1.png'
export function SilviaLogo() {
  return (
        <a href = "https://en.silvia.io" target="_blank" rel="noopener noreferrer">
            <Avatar src={SilviaPic.src} sx={{ width: 40, height: 40}} />
        </a>
    );
}

export function NASALogo() {
    return (
        <a href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer">
            <Avatar src={NASAPic.src} sx={{ width: 50, height: 50, overflow: 'hidden' }} />
        </a>
    );
}

export function TAMULogo() {
  return (
        <a href = "https://www.tamu.edu" target="_blank" rel="noopener noreferrer">
            <Avatar src={TAMUPic.src} sx={{ width: 40, height: 40}} />
        </a>
    );
}

export function McNeilLogo() {
    return (
        <a href="https://www.mcneil.com" target="_blank" rel="noopener noreferrer">
            <Avatar src={McNeilPic.src} sx={{ width: 40, height: 40}} />
        </a>
    );
}