import { useTheme } from '../../hooks/useTheme';
import { ThemeApplier } from './ThemeWrapperStyles';

export function ThemeWrapper({ children }) {
  const { currTheme } = useTheme();

  return <ThemeApplier theme={currTheme}>{children}</ThemeApplier>;
}
