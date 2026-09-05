'use client'
import NavigationBar from '../components/navBar'
import FeatureProjects from '../components/projectsFeature';
import Footer from '../components/footer';
import Introduction from '../components/introduction';
import ScrollDownButton from '../components/scrollDownButton'
import TimelineClient from '../components/TimelineClient';
// import './globals.css';
import "../css/classes.css" 
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <div className="mainContainer">
        <NavigationBar />
        <ScrollReveal className="w-full flex justify-center">
            <Introduction />
        </ScrollReveal>
        <ScrollDownButton />
        <TimelineClient />
        <FeatureProjects />
        <ScrollReveal className="w-full flex justify-center">
            <Footer />
        </ScrollReveal>
    </div>
  );
}