import React, { Suspense } from 'react';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';

const AboutPage = React.lazy(() => import('./Components/About'));
const BlogLayout = React.lazy(() => import('./Components/Blog'));
const BrandLogoBar = React.lazy(() => import('./Components/BrandLogo'));
const HappyClients = React.lazy(() => import('./Components/Client'));
const Contact = React.lazy(() => import('./Components/Contact'));
const AppDownloadSection = React.lazy(() => import('./Components/Download'));
const Stats = React.lazy(() => import('./Components/Stats'));
const ExploreServices = React.lazy(() => import('./Components/ExploreServices'));
const FAQSection = React.lazy(() => import('./Components/FAQ'));
const Footer = React.lazy(() => import('./Components/Footer'));
const IntroVideo = React.lazy(() => import('./Components/IntroVideo'));
const TestimonialSlider = React.lazy(() => import('./Components/Testimonial'));

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Suspense>
        <ExploreServices />
        <AboutPage />
        <IntroVideo />
        <HappyClients />
        <BlogLayout />
        <TestimonialSlider />
        <FAQSection />
        <AppDownloadSection />
        <Stats />
        <Contact />
        <BrandLogoBar />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

