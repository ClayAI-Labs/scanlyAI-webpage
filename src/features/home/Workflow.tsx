import React from 'react';
import { Upload, Brain, CheckCircle, Search } from 'lucide-react';

const workflowSteps = [
  {
    id: 1,
    title: 'Upload or Snap',
    description: 'Take a photo or upload your receipt, invoice, or document in any format.',
    icon: Upload,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 2,
    title: 'AI Extracts',
    description: 'Our advanced AI reads and understands your document, extracting all key information.',
    icon: Brain,
    color: 'from-sky-500 to-sky-600'
  },
  {
    id: 3,
    title: 'Review & Export',
    description: 'Review the extracted data and export in your preferred format (CSV, JSON, Excel).',
    icon: CheckCircle,
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    id: 4,
    title: 'Track & Search',
    description: 'Access your organized data anytime with powerful search and filtering tools.',
    icon: Search,
    color: 'from-violet-500 to-violet-600'
  }
];

const Workflow: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your documents in four simple steps. Our streamlined process makes 
            document processing effortless and accurate.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-between">
            {workflowSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="flex-1 relative">
                  <div className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-shadow`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="mb-4">
                      <span className="inline-block w-8 h-8 bg-white border-2 border-gray-200 rounded-full text-gray-600 font-bold flex items-center justify-center text-sm mb-3 shadow-sm">
                        {step.id}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connecting Arrow */}
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute top-10 left-full w-full flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rotate-45"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            {workflowSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="flex items-start space-x-6 bg-white p-6 rounded-2xl shadow-sm">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="w-6 h-6 bg-gray-100 rounded-full text-gray-600 font-bold flex items-center justify-center text-sm">
                        {step.id}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;