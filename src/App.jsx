import { ThemeWrapper } from './components/ThemeWrapper/ThemeWrapper';
import { CounterProvider } from './contexts/counterProvider';
import { ThemeProvider } from './contexts/themeProvider';
import Router from './routes/Router';

function App() {
  return (
    <ThemeProvider>
      <CounterProvider>
        <ThemeWrapper>
          <Router />
        </ThemeWrapper>
      </CounterProvider>
    </ThemeProvider>
  );
}

export default App;
