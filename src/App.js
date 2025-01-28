import React, { Suspense } from 'react';

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
const LandingPage = React.lazy(() => import('./Components/LandingPage'));
const Navbar = React.lazy(() => import('./Components/Navbar'));
const TestimonialSlider = React.lazy(() => import('./Components/Testimonial'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <LandingPage />
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

