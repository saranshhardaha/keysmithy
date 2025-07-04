import React, { useState } from 'react';
import { History, Copy, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import type { PasswordHistoryItem } from '../types';

interface PasswordHistoryProps {
  history: PasswordHistoryItem[];
  onClearHistory: () => void;
}

export const PasswordHistory: React.FC<PasswordHistoryProps> = ({ history, onClearHistory }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyPassword = async (password: string, id: string) => {
    try {
      await navigator.clipboard.writeText(password);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy password:', err);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  if (history.length === 0) {
    return null;
  }

  return (
    <Card className="overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-center space-x-3">
          <History className="w-5 h-5 text-gray-600" />
          <span className="font-semibold text-gray-900">
            Password History ({history.length})
          </span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {isExpanded && (
        <div className="border-t border-gray-200">
          <CardContent className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Recently generated passwords</span>
              <Button
                onClick={onClearHistory}
                variant="destructive"
                size="sm"
                className="flex items-center space-x-2"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear History</span>
              </Button>
            </div>
            
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {history.map((item) => (
                <Card key={item.id} className="bg-gray-50">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex-1 min-w-0">
                      <code className="text-sm font-mono text-gray-900 break-all">
                        {item.password}
                      </code>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className={`text-xs font-semibold ${item.strength.color}`}>
                          {item.strength.label}
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatDate(item.timestamp)}
                        </span>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleCopyPassword(item.password, item.id)}
                      variant="ghost"
                      size="sm"
                      className="ml-4"
                      title="Copy password"
                    >
                      {copiedId === item.id ? (
                        <span className="text-green-600 text-xs font-medium">Copied!</span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </div>
      )}
    </Card>
  );
}