import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import Card from '../../components/Card';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get in touch via email',
    details: 'hello@scanlyai.com',
    action: 'mailto:hello@scanlyai.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with our team',
    details: '+1 (555) 123-4567',
    action: 'tel:+15551234567'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with support',
    details: 'Available 9 AM - 6 PM PST',
    action: '#'
  }
];

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <Card>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-sky-100 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{method.title}</h3>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                  <a 
                    href={method.action}
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    {method.details}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>
        <div className="flex items-center space-x-3 text-gray-600">
          <Clock className="w-5 h-5" />
          <div>
            <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Location</h3>
        <div className="flex items-start space-x-3 text-gray-600">
          <MapPin className="w-5 h-5 mt-1" />
          <div>
            <p>15 Sanson Road</p>
            <p>Lahug Cebu City, 6000</p>
            <p>Philippines</p>
          </div>
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50 to-sky-50 border-purple-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Need Immediate Help?</h3>
        <p className="text-gray-600 mb-4">
          For urgent technical issues or enterprise inquiries, 
          contact our priority support line.
        </p>
        <button className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-2 rounded-lg font-medium hover:from-sky-600 hover:to-sky-700 transition-all">
          Priority Support
        </button>
      </Card>
    </div>
  );
};

export default ContactInfo;