import React, { useEffect } from "react";
import LogoSection from "./sections/LogoSection"
import Navbar from "./components/Navbar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import ExperienceSection from "./sections/ExperienceSection"
import Resume from "./sections/Resume"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import TechStack from './sections/TechStack'
import ScrollToTop from './components/ScrollToTop';

import ErrorBoundary from './components/ErrorBoundary';
import ErrorTrigger from './components/ErrorTrigger';
import LoadingErrorTrigger from './components/LoadingErrorTrigger';

const App = () => {

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);
  
  return (
    <ErrorBoundary>
      <>
          <Navbar />
          <Hero />
          <ShowcaseSection />
          <LogoSection />
          <FeatureCards />
          <ExperienceSection />
          <TechStack />
          <Resume />
          <Contact />
          {/* <ErrorTrigger /> 
          <LoadingErrorTrigger /> */}
          <Footer />
          <ScrollToTop />
      </>
    </ErrorBoundary>
  )
}

export default App
