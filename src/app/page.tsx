'use client'
import NavigationBar from '../components/navBar'
import FeatureProjects from '../components/projectsFeature';
import Footer from '../components/footer';
import Introduction from '../components/introduction';
import ScrollDownButton from '../components/scrollDownButton'
import TimelineClient from '../components/TimelineClient';
// import './globals.css';
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