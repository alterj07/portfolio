import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import SilviaPic from '../../assets/silvia-logo.png'
import NASAPic from '../../assets/nasa-logo3.png'
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
            <Avatar src={NASAPic.src} sx={{ width: 60, height: 60}} />
        </a>
    );
}