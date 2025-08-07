import React from 'react';
import { Check, Star } from 'lucide-react';
import Card from '../../components/Card';
import type { PricingPlan } from '../../types';

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$15',
    period: 'per month',
    description: 'Perfect for small businesses and individuals getting started with document processing.',
    features: [
      '100 documents per month',
      'Basic OCR processing',
      'PDF and image support',
      'Email support',
      'Standard processing speed'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$30',
    period: 'per month',
    description: 'Ideal for growing businesses that need advanced features and higher limits.',
    features: [
      '1,000 documents per month',
      'Advanced AI analysis',
      'All file format support',
      'Priority support',
      'Batch processing',
      'API access',
      'Custom workflows'
    ],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large organizations requiring custom solutions and dedicated support.',
    features: [
      'Unlimited documents',
      'Advanced security features',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom integrations',
      'On-premise deployment',
      'SLA guarantees'
    ]
  }
];

const Plans: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple,{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core features 
            with no hidden fees or usage limits within your tier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative ${plan.recommended ? 'border-2 border-purple-200 shadow-lg' : ''}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.recommended 
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;