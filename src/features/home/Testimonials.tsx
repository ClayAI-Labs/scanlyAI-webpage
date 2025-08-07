import React from 'react';
import { Star, Quote } from 'lucide-react';
import Card from '../../components/Card';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Small Business Owner',
    company: 'Chen\'s Consulting',
    content: 'ScanlyAI has completely transformed how I handle expense tracking. What used to take me hours every week now takes just minutes. The accuracy is incredible!',
    rating: 5,
    avatar: 'SC'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'Freelance Designer',
    company: 'Rodriguez Creative',
    content: 'As a freelancer, tracking receipts was always a nightmare. ScanlyAI makes it so simple - just snap a photo and everything is organized automatically.',
    rating: 5,
    avatar: 'MR'
  },
  {
    id: '3',
    name: 'Emily Watson',
    role: 'Finance Manager',
    company: 'TechStart Inc.',
    content: 'The CSV export feature is a game-changer for our accounting workflow. Our team processes hundreds of receipts monthly with zero errors now.',
    rating: 5,
    avatar: 'EW'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join the growing community of professionals who have simplified their document 
            processing with ScanlyAI's intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} hover className="relative">
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-purple-200" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-sky-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">10k+</span>
              </div>
              <span>Documents Processed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-100 to-sky-200 rounded-lg flex items-center justify-center">
                <span className="text-sky-600 font-bold text-sm">99%</span>
              </div>
              <span>Accuracy Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 font-bold text-sm">4.9</span>
              </div>
              <span>Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;