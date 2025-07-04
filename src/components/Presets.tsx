import React from 'react';
import { Zap, Shield, Lock } from 'lucide-react';
import { Button } from './ui/button';
import type { Preset } from '../types';

interface PresetsProps {
  onPresetSelect: (preset: Preset) => void;
}

export const Presets: React.FC<PresetsProps> = ({ onPresetSelect }) => {
  const presets: Preset[] = [
    {
      name: 'Basic',
      options: {
        length: 8,
        includeLowercase: true,
        includeUppercase: false,
        includeNumbers: true,
        includeSpecialChars: false,
        customSpecialChars: '!@#$%^&*'
      }
    },
    {
      name: 'Strong',
      options: {
        length: 12,
        includeLowercase: true,
        includeUppercase: true,
        includeNumbers: true,
        includeSpecialChars: true,
        customSpecialChars: '!@#$%^&*()_+-=[]{}|;:,.<>?'
      }
    },
    {
      name: 'Ultra',
      options: {
        length: 24,
        includeLowercase: true,
        includeUppercase: true,
        includeNumbers: true,
        includeSpecialChars: true,
        customSpecialChars: '!@#$%^&*()_+-=[]{}|;:,.<>?~`'
      }
    }
  ];

  const getPresetIcon = (name: string) => {
    switch (name) {
      case 'Basic': return <Zap className="w-5 h-5" />;
      case 'Strong': return <Shield className="w-5 h-5" />;
      case 'Ultra': return <Lock className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-900">Quick Presets</h3>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
        {presets.map((preset) => (
          <Button
            key={preset.name}
            onClick={() => onPresetSelect(preset)}
            variant="outline"
            className="flex flex-col md:flex-row justify-center items-center gap-2 p-4 h-auto md:justify-start"
          >
            <div className="text-gray-700">
              {getPresetIcon(preset.name)}
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">{preset.name}</div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}