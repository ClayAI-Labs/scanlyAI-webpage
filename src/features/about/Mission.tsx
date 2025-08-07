import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import Card from '../../components/Card';

const Mission: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              ScanlyAI
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize document processing through intelligent AI, 
            making advanced technology accessible to organizations of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="text-center" hover>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To eliminate the tedious, time-consuming aspects of document processing and 
              empower businesses to focus on what matters most—their core objectives.
            </p>
          </Card>

          <Card className="text-center" hover>
            <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A world where every document becomes a source of instant insights, 
              where AI handles complexity so humans can focus on creativity and strategy.
            </p>
          </Card>

          <Card className="text-center" hover>
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Innovation, transparency, and customer success drive everything we do. 
              We believe in building technology that genuinely improves people's work lives.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;