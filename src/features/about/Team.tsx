import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import Card from '../../components/Card';
import type { Founder } from '../../types';

const founders: Founder[] = [
  {
    id: '1',
    name: 'Clay Mark Sarte',
    role: 'Founder & CEO',
    bio: 'AI/ML Data Engineer and founder of ScanlyAI, Clay is focused on building intelligent, human-centered software that solves real problems today — and lays the groundwork for much more. As the first venture under Newtonian AI, ScanlyAI marks the beginning of a long-term mission: to apply AI across industries and, eventually, contribute to the future of space exploration. From software to hardware to the stars, Clay believes AI’s highest potential isn’t just to predict the future — but to help create it.',
    linkedin: 'https://www.linkedin.com/in/clay-mark-sarte-283855147/',
    twitter: '#'
  }
];

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team brings together expertise in AI, product development, and business strategy 
            to deliver exceptional document processing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {founders.map((founder) => (
            <Card key={founder.id} hover className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-purple-600">
                  {founder.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {founder.name}
              </h3>
              <p className="text-purple-600 font-medium mb-4">
                {founder.role}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {founder.bio}
              </p>
              <div className="flex items-center justify-center space-x-4">
                <a 
                  href={founder.linkedin} 
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                </a>
                <a 
                  href={founder.twitter}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-sky-100 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-gray-600 hover:text-sky-600" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;