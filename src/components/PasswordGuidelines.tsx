import React from 'react';
import { CheckCircle, Ruler, Shuffle, Shield, Key, RefreshCw } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const PasswordGuidelines: React.FC = () => {
  const guidelines = [
    {
      icon: <Ruler className="w-6 h-6" />,
      title: 'Use 12+ Characters',
      description: 'Longer passwords are exponentially harder to crack. Aim for at least 12 characters, but 16+ is even better.',
      tip: 'Each additional character dramatically increases security'
    },
    {
      icon: <Shuffle className="w-6 h-6" />,
      title: 'Mix Character Types',
      description: 'Include uppercase letters, lowercase letters, numbers, and special characters for maximum complexity.',
      tip: 'More character types = larger search space for attackers'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Avoid Predictable Patterns',
      description: 'Don\'t use keyboard patterns (qwerty), sequences (123456), or simple substitutions (@ for a).',
      tip: 'Random is always better than predictable'
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: 'Unique for Each Account',
      description: 'Never reuse passwords across different websites or services. Each account should have its own password.',
      tip: 'Use a password manager to handle multiple unique passwords'
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Update Regularly',
      description: 'Change passwords periodically, especially for sensitive accounts like banking and email.',
      tip: 'Update immediately if you suspect a breach'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Enable Two-Factor Authentication',
      description: 'Add an extra layer of security with 2FA whenever possible. Even if your password is compromised, your account stays protected.',
      tip: 'Use authenticator apps rather than SMS when possible'
    }
  ];

  const strengthExamples = [
    { password: 'password', strength: 'Very Weak', color: 'text-red-600', time: 'Instantly' },
    { password: 'Password123', strength: 'Weak', color: 'text-orange-600', time: '2 hours' },
    { password: 'MyP@ssw0rd!', strength: 'Moderate', color: 'text-yellow-600', time: '3 months' },
    { password: 'Tr0ub4dor&3', strength: 'Strong', color: 'text-green-600', time: '34 years' },
    { password: 'X9#mK$2vL@8nQ!5w', strength: 'Very Strong', color: 'text-emerald-600', time: '41 trillion years' }
  ];

  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Recommended Password Guidelines
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Follow these expert-recommended best practices to create passwords that will keep your accounts secure for years to come.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {guidelines.map((guideline, index) => (
          <Card
            key={index}
            className="hover:border-green-200 transition-all duration-200 border-green-100"
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg text-green-600 flex-shrink-0">
                  {guideline.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {guideline.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {guideline.description}
              </p>
              <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                <p className="text-xs text-green-700">
                  <strong>Tip:</strong> {guideline.tip}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Password Strength Examples */}
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Password Strength Examples
        </h3>
        <div className="space-y-3">
          {strengthExamples.map((example, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center space-x-4">
                <code className="text-sm font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded">
                  {example.password}
                </code>
                <span className={`text-sm font-semibold ${example.color}`}>
                  {example.strength}
                </span>
              </div>
              <span className="text-sm text-gray-600">
                Crack time: <strong>{example.time}</strong>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
        <h3 className="text-lg font-semibold text-green-900 mb-3">
          🎯 Pro Tip
        </h3>
        <p className="text-green-800 leading-relaxed">
          Use KeySmithy to generate random passwords that follow all these guidelines automatically. 
          Combined with a password manager, you'll have unique, strong passwords for every account without the hassle of remembering them all.
        </p>
      </div>
    </section>
  );
}