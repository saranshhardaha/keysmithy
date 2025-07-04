import type { PasswordOptions, PasswordStrength } from '../types';

const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const DEFAULT_SPECIAL_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

export const generateSecurePassword = (options: PasswordOptions): string => {
  let charset = '';
  
  if (options.includeLowercase) charset += LOWERCASE;
  if (options.includeUppercase) charset += UPPERCASE;
  if (options.includeNumbers) charset += NUMBERS;
  if (options.includeSpecialChars) {
    charset += options.customSpecialChars || DEFAULT_SPECIAL_CHARS;
  }
  
  if (charset === '') {
    throw new Error('At least one character type must be selected');
  }
  
  const password = [];
  const values = new Uint32Array(options.length);
  crypto.getRandomValues(values);
  
  for (let i = 0; i < options.length; i++) {
    const randomIndex = values[i] % charset.length;
    password.push(charset[randomIndex]);
  }
  
  return password.join('');
};

export const calculatePasswordStrength = (password: string, options: PasswordOptions): PasswordStrength => {
  let charsetSize = 0;
  
  if (options.includeLowercase) charsetSize += 26;
  if (options.includeUppercase) charsetSize += 26;
  if (options.includeNumbers) charsetSize += 10;
  if (options.includeSpecialChars) {
    charsetSize += (options.customSpecialChars || DEFAULT_SPECIAL_CHARS).length;
  }
  
  const entropy = Math.log2(Math.pow(charsetSize, password.length));
  const crackTimeSeconds = Math.pow(2, entropy - 1) / 1000000000; // Assuming 1 billion guesses per second
  
  let label: string;
  let score: number;
  let color: string;
  
  if (entropy < 30) {
    label = 'Very Weak';
    score = 1;
    color = 'text-red-600 dark:text-red-400';
  } else if (entropy < 50) {
    label = 'Weak';
    score = 2;
    color = 'text-orange-600 dark:text-orange-400';
  } else if (entropy < 70) {
    label = 'Moderate';
    score = 3;
    color = 'text-yellow-600 dark:text-yellow-400';
  } else if (entropy < 90) {
    label = 'Strong';
    score = 4;
    color = 'text-green-600 dark:text-green-400';
  } else {
    label = 'Very Strong';
    score = 5;
    color = 'text-emerald-600 dark:text-emerald-400';
  }
  
  return {
    label,
    score,
    crackTime: formatCrackTime(crackTimeSeconds),
    color
  };
};

const formatCrackTime = (seconds: number): string => {
  if (seconds < 1) return 'Instantly';
  if (seconds < 60) return `${Math.round(seconds)} seconds`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
  if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
  
  const years = Math.round(seconds / 31536000);
  if (years < 1000) return `${years} years`;
  if (years < 1000000) return `${Math.round(years / 1000)}K years`;
  if (years < 1000000000) return `${Math.round(years / 1000000)}M years`;
  return `${Math.round(years / 1000000000)}B years`;
};