import React from 'react';
import { Zap, Download, History, Shield } from 'lucide-react';
import Card from '../../components/Card';

const features = [
  {
    id: 'extraction',
    title: 'Instant AI Extraction',
    description: 'Advanced OCR + GPT technology extracts data from receipts and documents in seconds with 99%+ accuracy.',
    icon: Zap,
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'export',
    title: 'CSV & JSON Export',
    description: 'Export your structured data in multiple formats for seamless integration with your existing workflows.',
    icon: Download,
    gradient: 'from-sky-500 to-cyan-500'
  },
  {
    id: 'history',
    title: 'History & Search',
    description: 'Powerful search and filtering capabilities help you find any document or transaction instantly.',
    icon: History,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'privacy',
    title: 'Privacy-First Design',
    description: 'Your data stays secure with encrypted processing and no permanent storage without your consent.',
    icon: Shield,
    gradient: 'from-violet-500 to-purple-500'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Smart Processing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your document workflow with AI-powered intelligence that understands context, 
            extracts key information, and organizes everything automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.id} hover className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;