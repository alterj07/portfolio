import NavigationBar from '../components/navBar/page';
import FeatureProjects from '../components/projectsFeature/page';
import './globals.css';
import "../css/classes.css"
export default function Home() {
  return (
    <div className = "bg-black scroll-smooth">
      <div className = "mainTitleSpacerDiv"></div>
      <div>
        <h1 className="mainPageTitle">Jayden Chun</h1>
      </div>
        <NavigationBar />
      <div className = "sectionSpacerDiv"></div>
        <FeatureProjects />
    </div>
  )
}

