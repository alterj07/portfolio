import NavigationBar from './navBar/page';
import './globals.css';
import "../css/classes.css"
export default function Home() {
  return (
    <div className="bg-linear-to-r/srgb from-indigo-500 to-teal-400">
      <div className="bg-linear-to-r/srgb from-emerald-950 via-cyan-700 to-black-1000 p-4">
        <h1 className="topTitle">Jayden Portfolio</h1>
      </div>
        <NavigationBar />
    </div>
  )
}



