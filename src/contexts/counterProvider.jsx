import { createContext, useMemo, useState } from 'react';

export const CountContext = createContext();

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const value = useMemo(() => ({ counter, setCounter }), [counter, setCounter]);

  return (
    <CountContext.Provider value={value}>
      {children}
    </CountContext.Provider>
  );
}
