import React, { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface PasswordDisplayProps {
  password: string;
  onCopy: () => void;
  onGenerate: () => void;
}

export const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password, onCopy, onGenerate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      onCopy();
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy password:', err);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Generated Password</h3>
      
      <Card className="p-6 bg-gray-50 border-2 border-dashed border-gray-300 min-h-[80px] flex items-center justify-center">
        <CardContent className="p-0">
          {password ? (
            <code className="text-lg font-mono text-gray-900 break-all text-center leading-relaxed">
              {password}
            </code>
          ) : (
            <span className="text-gray-400 text-center">
              Your generated password will appear here
            </span>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={onGenerate}
          className="flex-1 flex items-center justify-center gap-2 p-2"
          size="lg"
        >
          <RefreshCw className="w-4 h-4" />
          Generate Password
        </Button>
        
        {password && (
          <Button
            onClick={handleCopy}
            variant="outline"
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 p-2"
            size="lg"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </Button>
        )}
      </div>
    </div>
  );
}