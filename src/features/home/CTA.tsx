import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-500 via-sky-600 to-indigo-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-sky-200 mr-3" />
            <span className="text-sky-200 font-semibold text-lg">Ready to get started?</span>
            <Sparkles className="w-8 h-8 text-sky-200 ml-3" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Start simplifying your{' '}
            <span className="text-sky-200">receipts today</span>
          </h2>
          
          <p className="text-xl text-sky-100 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join thousands of professionals who have already transformed their document 
            processing workflow with ScanlyAI's intelligent automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button className="group bg-white text-sky-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-sky-600 transition-all">
              Schedule Demo
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-sky-100">
              <div className="w-2 h-2 bg-sky-200 rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sky-100">
              <div className="w-2 h-2 bg-sky-200 rounded-full"></div>
              <span>Process 10 documents free</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sky-100">
              <div className="w-2 h-2 bg-sky-200 rounded-full"></div>
              <span>Instant setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;