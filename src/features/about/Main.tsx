import React from 'react';
import Mission from './Mission';
import Team from './Team';
import Values from './Values';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Mission />
      <Team />
      <Values />
    </div>
  );
};

export default AboutPage;