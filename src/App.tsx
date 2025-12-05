import React, { useState, useEffect, useCallback } from 'react';
import { Key, Github, Heart } from 'lucide-react';
import { PasswordDisplay } from './components/PasswordDisplay';
import { CharacterOptions } from './components/CharacterOptions';
import { PasswordLength } from './components/PasswordLength';
import { PasswordStrengthDisplay } from './components/PasswordStrength';
import { PasswordHistory } from './components/PasswordHistory';
import { Presets } from './components/Presets';
import { WhyKeySmithy } from './components/WhyKeySmithy';
import { PasswordSecurity } from './components/PasswordSecurity';
import { CommonMistakes } from './components/CommonMistakes';
import { PasswordGuidelines } from './components/PasswordGuidelines';
import { generateSecurePassword, calculatePasswordStrength } from './utils/passwordGenerator';
import { savePasswordToHistory, getPasswordHistory, clearPasswordHistory } from './utils/storage';
import type { PasswordOptions, PasswordHistoryItem, Preset } from './types';

function App() {
  const [options, setOptions] = useState<PasswordOptions>({
    length: 12,
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSpecialChars: true,
    customSpecialChars: '!@#$%^&*()_+-=[]{}|;:,.<>?'
  });

  const [password, setPassword] = useState('');
  const [history, setHistory] = useState<PasswordHistoryItem[]>([]);

  // Load history on mount
  useEffect(() => {
    setHistory(getPasswordHistory());
  }, []);

  const generatePassword = useCallback(() => {
    try {
      const newPassword = generateSecurePassword(options);
      setPassword(newPassword);

      // Save to history
      const strength = calculatePasswordStrength(newPassword, options);
      const historyItem: PasswordHistoryItem = {
        id: Date.now().toString(),
        password: newPassword,
        timestamp: Date.now(),
        strength
      };

      savePasswordToHistory(historyItem);
      setHistory(getPasswordHistory());
    } catch (error) {
      console.error('Failed to generate password:', error);
    }
  }, [options]);

  // Auto-generate on options change
  useEffect(() => {
    if (options.includeLowercase || options.includeUppercase || options.includeNumbers || options.includeSpecialChars) {
      generatePassword();
    }
  }, [options, generatePassword]);

  // Generate on initial load
  useEffect(() => {
    generatePassword();
  }, []);

  // Handle spacebar key press
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space' && !event.ctrlKey && !event.altKey && !event.metaKey) {
        // Only if not in an input field
        if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          event.preventDefault();
          generatePassword();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [generatePassword]);

  const handleOptionsChange = (newOptions: PasswordOptions) => {
    setOptions(newOptions);
  };

  const handlePresetSelect = (preset: Preset) => {
    setOptions(preset.options);
  };

  const handleClearHistory = () => {
    clearPasswordHistory();
    setHistory([]);
  };

  const handleCopyPassword = () => {
    // This is called from PasswordDisplay when password is copied
  };

  const strength = password ? calculatePasswordStrength(password, options) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-900 rounded-lg">
                <Key className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                  KeySmithy
                </h1>
                <p className="text-xs md:text-sm text-gray-600">
                  Where strong passwords are forged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-8 max-w-7xl flex flex-col gap-8">
        {/* Introduction */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Generate Password
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Customize your password settings and generate a secure password.
            Press <kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">Spacebar</kbd> for quick generation.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Main Generator Card */}
            <div className="bg-white rounded-2xl flex flex-col gap-4 border border-gray-200 p-4 md:p-6 shadow-sm">
              <PasswordDisplay
                password={password}
                onCopy={handleCopyPassword}
                onGenerate={generatePassword}
              />

              {strength && (
                <PasswordStrengthDisplay strength={strength} />
              )}
              <PasswordLength
                length={options.length}
                onLengthChange={(length) => handleOptionsChange({ ...options, length })}
              />
              <Presets onPresetSelect={handlePresetSelect} />
              <CharacterOptions options={options} onOptionsChange={handleOptionsChange} />
              <PasswordHistory history={history} onClearHistory={handleClearHistory} />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <WhyKeySmithy />
          </div>
        </div>

        {/* Educational Sections */}
        <div className="space-y-8">
          <PasswordSecurity />
          <CommonMistakes />
          <PasswordGuidelines />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for security</span>
            </div>

            <div className="text-xs md:text-sm text-gray-500 space-y-2 max-w-2xl mx-auto">
              <p>
                KeySmithy uses the Web Crypto API for cryptographically secure randomness.
              </p>
              <p>
                Your passwords are generated locally in your browser and never sent to any server.
              </p>
            </div>

            <div className="flex items-center justify-center space-x-6 pt-4">
              <a
                href="https://github.com/saranshhardaha/keysmithy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                <span>View Source</span>
              </a>
            </div>

            <div className="text-xs text-gray-400 pt-4 border-t border-gray-200">
              © 2025 KeySmithy. Built with security and privacy in mind.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;