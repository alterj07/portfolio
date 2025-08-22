import NavigationBar from '../components/navBar/page';
import FeatureProjects from '../components/projectsFeature/page';
import Footer from '../components/footer/page';
import './globals.css';
import "../css/classes.css"
export default function Home() {
  return (
    <div className="bg-black scroll-smooth">
      <div className="mainTitleSpacerDiv" />
      <div style={{ position: 'relative', width: '100vw', height: '60vh', minHeight: 400, marginBottom: 32 }}>
        {/* Centered main text */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          textAlign: 'center',
        }}>
          <h1 className="mainPageTitle">Jayden Chun</h1>
          <p id="mainPageDescription">Student by Day, Coder by Night</p>
        </div>
      </div>
      <NavigationBar />
      <div className="sectionSpacerDiv" />
      <FeatureProjects />
      <Footer />
    </div>
  );
}

