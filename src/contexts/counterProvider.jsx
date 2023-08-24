import { createContext, useState } from 'react';

export const CountContext = createContext();

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <CountContext.Provider value={{ counter, setCounter }}>
      {children}
    </CountContext.Provider>
  );
}
