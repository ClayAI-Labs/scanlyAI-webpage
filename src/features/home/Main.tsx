import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Workflow from './Workflow';
import ValueProposition from './ValueProposition';
import Security from './Security';
import Testimonials from './Testimonials';
import CTA from './CTA';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Workflow />
      <ValueProposition />
      <Security />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default HomePage;