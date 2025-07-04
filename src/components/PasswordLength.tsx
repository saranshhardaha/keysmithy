import React from 'react';
import { Slider } from './ui/slider';

interface PasswordLengthProps {
  length: number;
  onLengthChange: (length: number) => void;
}

export const PasswordLength: React.FC<PasswordLengthProps> = ({ length, onLengthChange }) => {
  const handleSliderChange = (value: number[]) => {
    onLengthChange(value[0]);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Password Length</h3>
        <span className="text-sm font-medium text-gray-600">
          {length} characters
        </span>
      </div>
      
      <div className="space-y-4">
        <Slider
          value={[length]}
          onValueChange={handleSliderChange}
          max={50}
          min={4}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>4</span>
          <span>50</span>
        </div>
      </div>
    </div>
  );
}