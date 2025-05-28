import Link from 'next/link';
export default function Projects() {
    return (
        <div>
            <h1>Projects!</h1>
            <Link href = "/">Go back</Link>

            <h1>Finished!</h1>
            <h2>
                <a target="_blank" 
                    rel="noopener noreferrer" 
                    href = "https://github.com/alterj07/orchestral-pieces"
                    className = "">
                        orchestral-pieces
                </a>
            </h2>
            <h2>
                <a target="_blank" 
                    rel="noopener noreferrer" 
                    href = "https://github.com/alterj07/Sprig"
                    className = "">
                        Sprig Project
                </a>
            </h2>
            <h2>
                <a target="_blank" 
                    rel="noopener noreferrer" 
                    href = "https://github.com/alterj07/words-of-wisdom"
                    className = "">
                        words-of-wisdom
                </a>
            </h2>
            <h2>
                <a target="_blank" 
                    rel="noopener noreferrer" 
                    href = "https://github.com/alterj07/HackPad"
                    className = "">
                        HackPad
                </a>
            </h2>
            <h2>
                <a target="_blank" 
                    rel="noopener noreferrer" 
                    href = "https://github.com/alterj07/CookieCrumbl"
                    className = "">
                        CookieCrumbl
                </a>
            </h2>

            <h1>In-Progress</h1>

            <h2>
                <a target="_blank" 
                    rel="noopener noreferrer" 
                    href = "https://github.com/alterj07/PurePrep"
                    className = "">
                        PurePrep
                </a>
            </h2>
            <h2>
                <a target="_blank" 
                    rel="noopener noreferrer" 
                    href = "https://github.com/alterj07/portfolio"
                    className = "">
                        portfolio
                </a>
            </h2>
            <h2>
                <a target="_blank" 
                    rel="noopener noreferrer" 
                    href = "https://github.com/alterj07/vibe"
                    className = "">
                        Vibe
                </a>
            </h2>
        </div>
    )
}