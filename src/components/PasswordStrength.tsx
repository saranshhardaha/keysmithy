import React from 'react';
import { Shield, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import type { PasswordStrength } from '../types';

interface PasswordStrengthProps {
  strength: PasswordStrength;
}

export const PasswordStrengthDisplay: React.FC<PasswordStrengthProps> = ({ strength }) => {
  const getStrengthBars = () => {
    const bars = [];
    for (let i = 1; i <= 5; i++) {
      const isActive = i <= strength.score;
      let bgColor = 'bg-gray-200';
      
      if (isActive) {
        if (strength.score === 1) bgColor = 'bg-red-500';
        else if (strength.score === 2) bgColor = 'bg-orange-500';
        else if (strength.score === 3) bgColor = 'bg-yellow-500';
        else if (strength.score === 4) bgColor = 'bg-green-500';
        else if (strength.score === 5) bgColor = 'bg-emerald-500';
      }
      
      bars.push(
        <div
          key={i}
          className={`h-3 w-10 rounded-full transition-colors duration-300 ${bgColor}`}
        />
      );
    }
    return bars;
  };

  return (
    <Card className="bg-gray-50">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Password Strength:</span>
            <span className={`font-bold ${strength.color}`}>{strength.label}</span>
          </div>
          <div className="hidden sm:flex space-x-1">
            {getStrengthBars()}
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Clock className="w-5 h-5 text-gray-600" />
          <span className="text-sm text-gray-700">
            Estimated crack time: <span className="font-semibold text-gray-900">{strength.crackTime}</span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}