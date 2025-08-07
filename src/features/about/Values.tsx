import React from 'react';
import { Shield, Users, Lightbulb, Rocket } from 'lucide-react';

const values = [
  {
    id: 'security',
    title: 'Security First',
    description: 'Your data security and privacy are paramount. We implement enterprise-grade security measures and maintain strict compliance standards.',
    icon: Shield,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'collaboration',
    title: 'Customer-Centric',
    description: 'We listen to our users and build features that solve real problems. Your feedback drives our product development.',
    icon: Users,
    color: 'from-sky-500 to-sky-600'
  },
  {
    id: 'innovation',
    title: 'Continuous Innovation',
    description: 'We stay at the forefront of AI technology, constantly improving our algorithms and developing new capabilities.',
    icon: Lightbulb,
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    id: 'performance',
    title: 'Reliable Performance',
    description: 'Our platform is built for scale and reliability, ensuring consistent performance even with high-volume processing.',
    icon: Rocket,
    color: 'from-violet-500 to-violet-600'
  }
];

const Values: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Core Values
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide every decision we make and every feature we build, 
            ensuring we deliver exceptional value to our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <div key={value.id} className="flex items-start space-x-6 p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;