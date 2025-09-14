import NavigationBar from '../components/navBar/page';
import FeatureProjects from '../components/projectsFeature/page';
import Footer from '../components/footer/page';
import Introduction from '../components/introduction/page';
import ScrollDownButton from '../components/scrollDownButton/page'
import TimelineClient from '../components/timeline/TimelineClient';
import './globals.css';
import "../css/classes.css" 
export default function Home() {
  return (
    <div className = "mainContainer">
        <NavigationBar />
        <Introduction />
        <ScrollDownButton />
        <TimelineClient />
        <FeatureProjects />
        <Footer />
    </div>
  );
}