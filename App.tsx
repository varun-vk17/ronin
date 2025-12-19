import React, { Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Navbar } from './src/components/Navbar';
import { Hero } from './src/components/Hero';

// Lazy load components below the fold for better initial load performance
const ProblemSection = React.lazy(() => import('./src/components/ProblemSection').then(module => ({ default: module.ProblemSection })));
const WhyDifferent = React.lazy(() => import('./src/components/WhyDifferent').then(module => ({ default: module.WhyDifferent })));
const RevenueSolution = React.lazy(() => import('./src/components/RevenueSolution').then(module => ({ default: module.RevenueSolution })));
const ExpectedResults = React.lazy(() => import('./src/components/ExpectedResults').then(module => ({ default: module.ExpectedResults })));
const Pricing = React.lazy(() => import('./src/components/Pricing').then(module => ({ default: module.Pricing })));
const SocialProofMarquee = React.lazy(() => import('./src/components/SocialProofMarquee').then(module => ({ default: module.SocialProofMarquee })));
const FAQ = React.lazy(() => import('./src/components/FAQ').then(module => ({ default: module.FAQ })));
const FinalCTA = React.lazy(() => import('./src/components/FinalCTA').then(module => ({ default: module.FinalCTA })));
const BookingSection = React.lazy(() => import('./src/components/BookingSection').then(module => ({ default: module.BookingSection })));
const Footer = React.lazy(() => import('./src/components/Footer').then(module => ({ default: module.Footer })));

// Loading fallback component
const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-8 h-8 border-4 border-ronin-neutral-200 border-t-ronin-electric rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <HelmetProvider>
      <Analytics />
      <div className="font-sans text-ronin-black selection:bg-ronin-electric selection:text-white antialiased">
        <Helmet>
          <title>Ronin Build — Revenue-First Engineering | High-Performance Websites</title>
          <meta name="description" content="Ronin Build creates high-speed, revenue-focused websites for ambitious startups. No fluff. Just engineering that turns visitors into customers." />
          <meta name="keywords" content="ronin build, roninbuild, web development, revenue engineering, conversion optimization, high performance websites, startup websites" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ronin.build/" />
          <meta property="og:title" content="Ronin — Revenue-First Engineering" />
          <meta property="og:description" content="We build high-speed, revenue-focused websites for ambitious startups." />
          <meta property="og:image" content="https://ronin.build/og-image.jpg" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://ronin.build/" />
          <meta property="twitter:title" content="Ronin — Revenue-First Engineering" />
          <meta property="twitter:description" content="We build high-speed, revenue-focused websites for ambitious startups." />
          <meta property="twitter:image" content="https://ronin.build/og-image.jpg" />

          <link rel="canonical" href="https://roninbuild.com" />
        </Helmet>

        <Navbar />
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <ProblemSection />
          <WhyDifferent />
          <RevenueSolution />
          <ExpectedResults />
          <Pricing />
          <SocialProofMarquee />
          <FAQ />
          <BookingSection />
          <FinalCTA />
          <Footer />
        </Suspense>
      </div>
    </HelmetProvider>
  );
}
