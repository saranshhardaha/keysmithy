import React from 'react';
import { X, Calendar, User, Repeat, Hash, Eye } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const CommonMistakes: React.FC = () => {
  const mistakes = [
    {
      icon: <Repeat className="w-6 h-6" />,
      title: 'Reusing Passwords',
      description: 'Using the same password across multiple websites. If one gets breached, all your accounts are at risk.',
      example: 'Using "MyPassword123" for email, banking, and social media'
    },
    {
      icon: <Hash className="w-6 h-6" />,
      title: 'Dictionary Words',
      description: 'Using common words or predictable patterns that appear in password dictionaries.',
      example: 'password123, qwerty, admin, welcome'
    },
    {
      icon: <User className="w-6 h-6" />,
      title: 'Personal Information',
      description: 'Including birthdays, names, addresses, or other personal details that can be easily guessed.',
      example: 'john1985, fluffy123, 123MainSt'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Predictable Substitutions',
      description: 'Simple character replacements that hackers know about and can easily crack.',
      example: 'P@ssw0rd, H3ll0, M1cr0s0ft'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Short Passwords',
      description: 'Using passwords under 12 characters. Length is one of the most important factors for security.',
      example: 'Abc123, Pass1, 12345'
    },
    {
      icon: <X className="w-6 h-6" />,
      title: 'No Special Characters',
      description: 'Avoiding symbols and special characters reduces the password complexity significantly.',
      example: 'OnlyLettersAndNumbers123'
    }
  ];

  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Common Password Mistakes
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Avoid these common pitfalls that make your passwords vulnerable to attacks. Learn from others' mistakes to keep your accounts secure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mistakes.map((mistake, index) => (
          <Card
            key={index}
            className="hover:border-red-200 transition-all duration-200 border-red-100"
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="p-2 bg-red-100 rounded-lg text-red-600 flex-shrink-0">
                  {mistake.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {mistake.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {mistake.description}
              </p>
              <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                <p className="text-xs text-red-700">
                  <strong>Example:</strong> {mistake.example}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-200">
        <h3 className="text-lg font-semibold text-red-900 mb-3">
          ⚠️ Remember
        </h3>
        <p className="text-red-800 leading-relaxed">
          Even one of these mistakes can compromise your security. The best approach is to use a 
          <strong> unique, randomly generated password</strong> for each account and store them in a password manager.
        </p>
      </div>
    </section>
  );
}