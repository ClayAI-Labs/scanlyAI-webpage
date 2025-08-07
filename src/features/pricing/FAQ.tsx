import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    id: 'trial',
    question: 'How does the free trial work?',
    answer: 'You get full access to all features for 14 days without providing a credit card. Simply sign up and start processing documents immediately.'
  },
  {
    id: 'upgrade',
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will take effect at the next billing cycle.'
  },
  {
    id: 'security',
    question: 'How secure is my data?',
    answer: 'We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and never store your documents after processing unless you specifically request it.'
  },
  {
    id: 'formats',
    question: 'What file formats do you support?',
    answer: 'We support all major formats including PDF, DOC/DOCX, XLS/XLSX, images (JPG, PNG, TIFF), and many others. Our Professional plan includes support for all formats.'
  },
  {
    id: 'api',
    question: 'Do you offer API access?',
    answer: 'Yes, our Professional and Enterprise plans include full API access with comprehensive documentation and SDKs for popular programming languages.'
  },
  {
    id: 'support',
    question: 'What kind of support do you provide?',
    answer: 'We offer email support for all plans, priority support for Professional users, and 24/7 phone support plus dedicated account management for Enterprise customers.'
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? We've got answers. If you can't find what you're looking for, 
            feel free to contact our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openItems.has(item.id);
            return (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;