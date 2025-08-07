import React from 'react';
import { Shield, Lock, FileCheck, UserCheck } from 'lucide-react';
import Card from '../../components/Card';

const securityFeatures = [
  {
    icon: Shield,
    title: 'No data stored without consent',
    description: 'Your documents are processed and immediately deleted unless you choose to save them.'
  },
  {
    icon: Lock,
    title: 'Encrypted file handling',
    description: 'All uploads and processing happen through secure, encrypted connections.'
  },
  {
    icon: FileCheck,
    title: 'Export-only output',
    description: 'You maintain full control over your data with export-only results.'
  }
];

const Security: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <UserCheck className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your{' '}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Privacy Matters
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Built with privacy-first principles, ScanlyAI ensures your sensitive documents 
              remain secure throughout the entire processing workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} hover className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">SOC 2 Compliant • GDPR Ready • Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;