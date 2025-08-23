import NavigationBar from '../components/navBar/page';
import FeatureProjects from '../components/projectsFeature/page';
import Footer from '../components/footer/page';
import Introduction from '../components/introduction/page';
import './globals.css';
import "../css/classes.css" 
export default function Home() {
  return (
    <div className="sunsetBackground">
      <div>
        <Introduction />
      </div>
      <NavigationBar />
      <div className="sectionSpacerDiv" />
      <FeatureProjects />
      <Footer />
    </div>
  );
}

