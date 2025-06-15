import NavigationBar from './navBar/page';
import './globals.css';
import "../css/classes.css"
export default function Home() {
  return (
    <div className="bg-[var(--color-darkMode-background)]">
      <div className="bg-[var(--color-darkMode-background)] p-4">
        <h1 className="topTitle">Jayden Portfolio</h1>
      </div>
        <NavigationBar />
    </div>
  )
}



