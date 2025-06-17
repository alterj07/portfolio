import NavigationBar from './navBar/page';
import './globals.css';
import "../css/classes.css"
export default function Home() {
  return (
    // <div className="h-screen bg-gradient-to-br from-[#4ecdc4] to-[#556270] scroll-smooth">
    <div className = "h-screen bg-black scroll-smooth">
      <div>
        <h1 className="mainPageTitle">Jayden&apos;s Portfolio</h1>
      </div>
        <NavigationBar />
      
    </div>
  )
}

