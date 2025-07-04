import React from 'react';
import { Switch } from './ui/switch';
import { Card } from './ui/card';
import type { PasswordOptions } from '../types';

interface CharacterOptionsProps {
  options: PasswordOptions;
  onOptionsChange: (options: PasswordOptions) => void;
}

export const CharacterOptions: React.FC<CharacterOptionsProps> = ({ options, onOptionsChange }) => {
  const handleToggleChange = (key: keyof PasswordOptions, value: boolean) => {
    onOptionsChange({
      ...options,
      [key]: value
    });
  };

  const handleCustomSpecialCharsChange = (value: string) => {
    onOptionsChange({
      ...options,
      customSpecialChars: value
    });
  };

  const characterTypes = [
    {
      key: 'includeUppercase' as keyof PasswordOptions,
      label: 'Uppercase Letters',
      description: 'A-Z',
      checked: options.includeUppercase
    },
    {
      key: 'includeLowercase' as keyof PasswordOptions,
      label: 'Lowercase Letters',
      description: 'a-z',
      checked: options.includeLowercase
    },
    {
      key: 'includeNumbers' as keyof PasswordOptions,
      label: 'Numbers',
      description: '0-9',
      checked: options.includeNumbers
    },
    {
      key: 'includeSpecialChars' as keyof PasswordOptions,
      label: 'Special Characters',
      description: '!@#$%^&*',
      checked: options.includeSpecialChars
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Character Types</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {characterTypes.map((type) => (
          <Card
            key={type.key}
            className={`p-4 transition-all duration-200 ${
              type.checked 
                ? 'border-gray-900 bg-gray-50' 
                : 'border-gray-200 bg-white'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="font-medium text-gray-900 mb-1">
                  {type.label}
                </div>
                <div className="text-sm text-gray-500">
                  {type.description}
                </div>
              </div>
              <Switch
                checked={type.checked}
                onCheckedChange={(checked) => handleToggleChange(type.key, checked)}
              />
            </div>
          </Card>
        ))}
      </div>

      {options.includeSpecialChars && (
        <Card className="p-4 bg-gray-50 border-gray-200">
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Custom Special Characters
          </label>
          <input
            type="text"
            value={options.customSpecialChars}
            onChange={(e) => handleCustomSpecialCharsChange(e.target.value)}
            placeholder="!@#$%^&*()_+-=[]{}|;:,.<>?"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-white text-gray-900 text-sm"
          />
        </Card>
      )}
    </div>
  );
}