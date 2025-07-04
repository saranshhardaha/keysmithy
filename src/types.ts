export interface PasswordOptions {
  length: number;
  includeLowercase: boolean;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSpecialChars: boolean;
  customSpecialChars: string;
}

export interface PasswordHistoryItem {
  id: string;
  password: string;
  timestamp: number;
  strength: PasswordStrength;
}

export interface PasswordStrength {
  label: string;
  score: number;
  crackTime: string;
  color: string;
}

export interface Preset {
  name: string;
  options: PasswordOptions;
}