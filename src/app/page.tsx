import NavigationBar from './navBar/page';
import './globals.css';
import "../css/classes.css"
export default function Home() {
  return (
    // <div className="h-screen bg-gradient-to-br from-[#4ecdc4] to-[#556270] scroll-smooth">
    <div className = "bg-black scroll-smooth">
      <div className = "mainTitleSpacerDiv"></div>
      <div>
        <h1 className="mainPageTitle">Jayden Chun</h1>
      </div>
        <NavigationBar />
      <div className = "sectionSpacerDiv"></div>
      <div>
        <h1 id = "featuredProjectsTitle" className = "test-scroll-animation">
          Featured Projects
        </h1>
      </div>
      <div className = "h-screen">

      </div>
    </div>
  )
}

