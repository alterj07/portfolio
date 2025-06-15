import NavigationBar from './navBar/page';
import './globals.css';
import "../css/classes.css"
export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-emerald-950 via-cyan-700 to-black">
      <div className="bg-gradient-to-r from-emerald-950 via-cyan-700 to-black">
        <h1 className="topTitle">Jayden Portfolio</h1>
      </div>
        <NavigationBar />
    </div>
  )
}



