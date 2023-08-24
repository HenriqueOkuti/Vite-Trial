import { Link } from 'react-router-dom';
import { useSetTheme } from '../../hooks/useTheme';
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
        <div onClick={handleThemeSwitch}>Theme</div>
        <Link to='/about'>About</Link>
      </UtilityBar>
    </NavigationBar>
  );
}

export default Navbar;
