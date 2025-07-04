import type { PasswordHistoryItem } from '../types';

const STORAGE_KEY = 'password-generator-history';
const MAX_HISTORY_ITEMS = 10;

export const savePasswordToHistory = (item: PasswordHistoryItem): void => {
  const history = getPasswordHistory();
  const updatedHistory = [item, ...history.filter(h => h.id !== item.id)].slice(0, MAX_HISTORY_ITEMS);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
};

export const getPasswordHistory = (): PasswordHistoryItem[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const clearPasswordHistory = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};