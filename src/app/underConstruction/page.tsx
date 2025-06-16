import Link from 'next/link';

export default function UnderConstruction() {
    return (
        <div>
            <div>
                <h1 className="topTitle">COMING SOON!</h1>
                <h1>UNDER CONSTRUCTION</h1>
                <Link href="/">Go back</Link>
            </div>
        </div>
    )
}