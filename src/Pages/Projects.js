import Link from 'next/link';
export default function Projects() {
    return (
        <div>
            <h1>Projects!</h1>
            <Link href = "/">Go back</Link>

            <h1>Finished!</h1>
            <h2><a href = "https://github.com/alterj07/orchestral-pieces">orchestral-pieces</a></h2>
            <h2><a href = "https://github.com/alterj07/Sprig">Sprig Project</a></h2>
            <h2><a href = "https://github.com/alterj07/words-of-wisdom">words-of-wisdom</a></h2>
            <h2><a href = "https://github.com/alterj07/HackPad">HackPad</a></h2>
            <h2><a href = "https://github.com/alterj07/CookieCrumbl">CookieCrumbl</a></h2>
            <h1>In-Progress</h1>
            <h2><a href = "https://github.com/alterj07/PurePrep">PurePrep</a></h2>
            <h2><a href = "https://github.com/alterj07/portfolio">portfolio</a></h2>
            <h2><a href = "https://github.com/alterj07/vibe">Vibe</a></h2>
        </div>
    )
}