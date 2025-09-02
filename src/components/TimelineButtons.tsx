import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../css/timeline.css'

export default function TimelineButtons() {
    const [mode, setMode] = React.useState<string>('education');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newMode: string,
    ) => {
        setMode(newMode);
    };

    return (
        <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        className = "timeline-buttons"
        >
            <ToggleButton value="education" aria-label="education" className = "timeline-button">
                <p className = "timeline-button-text">Education</p>
            </ToggleButton>
            <ToggleButton value="experience" aria-label="experience" className = "timeline-button">
                <p className = "timeline-button-text">Experience</p>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}