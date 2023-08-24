import { useContext } from 'react';
import { CountContext } from '@contexts/counterProvider';

export function useCounter() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}
