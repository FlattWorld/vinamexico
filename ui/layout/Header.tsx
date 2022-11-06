import { BurgerMenu, Container, ThemeSelector } from 'Components';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import vinalogoDark from 'public/vinalogo-dark.svg';
import vinalogo from 'public/vinalogo.svg';
import { useState } from 'react';
import { safeClientFunction } from 'utils/clientSideFunctions';
import { MENU } from './constants';

const DesktopNav = ({
  theme,
  themeSet,
}: {
  theme: string;
  themeSet: Function;
}) => {
  const router = useRouter();
  return (
    <nav className="sm:flex w-full hidden">
      <ul className="flex w-full items-center justify-evenly">
        {MENU.map((menuItem) => (
          <Link
            href={menuItem.to}
            key={menuItem.id}
            className={`hover:bg-vina-yellow-dark hover:dark:bg-vina-purple-dark p-1.5 border-b-2 ${
              router?.pathname === menuItem.to
                ? 'border-vina-orange-medium'
                : 'border-transparent'
            }`}
          >
            {menuItem.name}
          </Link>
        ))}
      </ul>
      <ThemeSelector theme={theme} themeSet={themeSet} />
    </nav>
  );
};

const MobileMenu = ({
  onSelectProp,
  theme,
  themeSet,
}: {
  theme: string;
  themeSet: Function;
  onSelectProp: Function;
}) => {
  const router = useRouter();
  const onSelection = (route: string) => {
    router.push(route);
    onSelectProp();
  };
  return (
    <div className="absolute right-6 top-6 shadow-lg theme-secondary  w-60 px-8 py-4 rounded">
      <nav className="w-full flex flex-col items-center">
        <ul className="flex flex-col w-full items-center justify-start">
          {MENU.map((menuItem) => (
            <button
              onClick={() => onSelection(menuItem.to)}
              key={menuItem.id}
              className={`hover:bg-vina-yellow-medium hover:dark:bg-vina-purple-medium text-center my-2 w-full py-1.5 border-b-2 ${
                router?.pathname === menuItem.to
                  ? 'border-vina-orange-medium'
                  : 'border-transparent'
              }`}
            >
              {menuItem.name}
            </button>
          ))}
        </ul>
        <ThemeSelector theme={theme} themeSet={themeSet} />
      </nav>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, isMenuOpenSet] = useState(false);
  const [theme, themeSet] = useState(
    safeClientFunction(() => window.localStorage.getItem('theme')) || 'dark'
  );
  return (
    <header className="section py-2  theme-primary">
      <Container extraStyles="justify-between">
        <Link href="/">
          {theme === 'dark' ? (
            <Image src={vinalogo} alt="logo" className="w-12 h-12" />
          ) : (
            <Image src={vinalogoDark} alt="logo" className="w-12 h-12" />
          )}
        </Link>
        <DesktopNav theme={theme} themeSet={themeSet} />
        <div className="block sm:hidden relative">
          <BurgerMenu isMenuOpen={isMenuOpen} clickHandler={isMenuOpenSet} />
          {isMenuOpen && (
            <MobileMenu
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
