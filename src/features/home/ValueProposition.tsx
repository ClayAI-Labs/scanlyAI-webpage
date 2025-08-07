import React from 'react';
import { Clock, CheckCircle, FolderOpen } from 'lucide-react';

const ValueProposition: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Stop Wasting Time on{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Manual Entry
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Manual receipt tracking is time-consuming and error-prone. ScanlyAI simplifies the process 
            with fast, accurate extraction—no more clutter, no more guesswork.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Save 15+ minutes
              </h3>
              <p className="text-gray-600">per receipt with instant AI processing</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Reduce errors by 95%
              </h3>
              <p className="text-gray-600">with AI-powered accuracy and validation</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FolderOpen className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Eliminate paper clutter
              </h3>
              <p className="text-gray-600">with digital organization and search</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;