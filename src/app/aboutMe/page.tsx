import Link from 'next/link';
import '../globals.css';
export default function AboutMe() {
    return (
        <div className = "h-screen bg-gradient-to-r from-emerald-950 via-cyan-700 to-black">
            <h1>About Me!</h1>
            <Link href = "/">Go back</Link>
        </div>
    )
}