import React from 'react';
import { Shield, AlertTriangle, Target, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const PasswordSecurity: React.FC = () => {
  const securityPoints = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Protection Against Attacks',
      description: 'Strong passwords defend against brute-force attacks where hackers try millions of combinations per second.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Data Breach Defense',
      description: 'When websites get hacked, strong passwords remain difficult to crack even if stolen from databases.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Entropy Matters',
      description: 'Password strength comes from randomness (entropy). More character types and length = exponentially harder to crack.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Time is Security',
      description: 'A strong password that takes centuries to crack gives you time to change it if needed.'
    }
  ];

  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Understanding Password Security
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Learn why strong passwords are your first line of defense against cyber threats and how they protect your digital life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {securityPoints.map((point, index) => (
          <Card
            key={index}
            className="hover:border-gray-300 transition-all duration-200"
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-900 rounded-lg text-white flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          💡 Did You Know?
        </h3>
        <p className="text-gray-700 leading-relaxed">
          A 12-character password with mixed case, numbers, and symbols has over 
          <strong className="text-gray-900"> 95^12 possible combinations</strong> - that's more than 
          540 quadrillion possibilities! Even the fastest computers would need centuries to crack it.
        </p>
      </div>
    </section>
  );
}