import Link from 'next/link';
import '../globals.css';
export default function AboutMe() {
    return (
        <div className="h-screen bg-gradient-to-br from-[#4ecdc4] to-[#556270]">
            <h1 className = "topTitle">About Me!</h1>
            <Link href = "/">Go back</Link>
            <div className = "flex flex-row items-center">{/*picture + description of myself*/}
                <img src="/jayden.jpg" alt="Jayden" className="rounded-full w-48 h-48 mx-auto mt-8" />
                <p className="text-center text-lg mt-4">
                    Hi, I'm Jayden! I'm a software developer with a passion for creating innovative solutions. 
                    I love working on projects that challenge me and allow me to learn new technologies.
                </p>
            </div>
        </div>
    )
}