import React from 'react';
import { Shield, Zap, Lock, Eye, Globe, Heart } from 'lucide-react';

export const WhyKeySmithy: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Forged for Security',
      description: 'Built with the Web Crypto API, KeySmithy crafts passwords with true randomness and robust protection.'
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: 'Privacy by Design',
      description: 'All password generation happens in your browser. Your secrets never leave your hands.'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Blazing Fast',
      description: 'Instantly forge strong passwords with customizable options for every need.'
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: 'Trusted Standards',
      description: 'Forges passwords following best practices recommended by security experts.'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Universal Access',
      description: 'Responsive and accessible—KeySmithy works on any device, anywhere.'
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: 'Open & Free',
      description: 'KeySmithy is open source, free to use, and always will be. No hidden costs, just strong security.'
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm md:sticky md:top-24">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Why Use KeySmithy?
      </h3>
      
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="p-2 bg-gray-900 rounded-lg text-white flex-shrink-0">
              {feature.icon}
            </div>
            <div className="min-w-0">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                {feature.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}