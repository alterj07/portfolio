import NavigationBar from '../components/navBar/page';
import FeatureProjects from '../components/projectsFeature/page';
import Footer from '../components/footer/page';
import Introduction from '../components/introduction/page';
// import TimelineComponent from '../components/timeline/page';
import TimelineClient from '../components/timeline/TimelineClient';
// ...
import './globals.css';
import "../css/classes.css" 
export default function Home() {
  return (
    <div className="sunsetBackground">
      <Introduction />
      <NavigationBar />
      <TimelineClient />
      <div className="sectionSpacerDiv" />
      <FeatureProjects />
      <Footer />
    </div>
  );
}

