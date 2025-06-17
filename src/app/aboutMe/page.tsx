import Link from 'next/link';
import '../globals.css';
export default function AboutMe() {
    return (
        <div className="h-screen bg-gradient-to-br from-[#4ecdc4] to-[#556270]">
            <h1 className = "topTitle">About Me!</h1>
            <Link href = "/">Go back</Link>
            <div className = "flex flex-row items-center">
                <p className="text-center text-lg mt-4">
                    Hi, I'm Jayden!
                </p>
            </div>
        </div>
    )
}