import NavigationBar from './navBar/page';
import './globals.css';
import "../css/classes.css"
export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-br from-[#4ecdc4] to-[#556270]">
      <div>
        <h1 className="topTitle">Jayden Portfolio</h1>
      </div>
        <NavigationBar />
    </div>
  )
}



