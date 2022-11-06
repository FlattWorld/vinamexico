import { BurgerMenu, Container } from 'Components';
import { useState } from 'react';
import { safeClientFunction } from 'utils/clientSideFunctions';
import LogoHeader from './components/LogoHeader';
import Nav from './components/Nav';

const Header = () => {
  const [isMenuOpen, isMenuOpenSet] = useState(false);
  const [theme, themeSet] = useState(
    safeClientFunction(() => window.localStorage.getItem('theme')) || 'dark'
  );
  return (
    <header className="section py-4 theme-primary">
      <Container extraStyles="justify-between">
        <LogoHeader theme={theme} />
        <Nav theme={theme} themeSet={themeSet} />
        <div className="block sm:hidden relative">
          <BurgerMenu
            isMenuOpen={isMenuOpen}
            clickHandler={() => isMenuOpenSet(!isMenuOpen)}
          />
          {isMenuOpen && (
            <Nav
              viewPort="mobile"
              theme={theme}
              themeSet={themeSet}
              onSelectProp={() => isMenuOpenSet(false)}
            />
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
