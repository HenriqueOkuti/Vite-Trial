import { useSetTheme } from '@hooks/useTheme';
import { Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavigationBar, UtilityBar } from './NavbarStyles';

function Navbar() {
  const themeContext = useSetTheme();

  const handleThemeSwitch = () => {
    themeContext.toggleTheme();
  };

  return (
    <NavigationBar>
      <Link to='/'>Home</Link>
      <UtilityBar>
        <Switch onClick={handleThemeSwitch} />
        <Link to='/about'>About</Link>
      </UtilityBar>
    </NavigationBar>
  );
}

export default Navbar;
