import Link from 'next/link';
import { useRouter } from 'next/router';
import { MENU } from '../../constants';
import ThemeSelector from './ThemeSelector';

const DesktopNav = ({
  theme,
  themeSet,
  lang,
  langChange,
}: {
  theme: string;
  themeSet: Function;
  lang: string;
  langChange: Function;
}) => {
  const router = useRouter();
  return (
    <nav className="sm:flex w-full hidden">
      <ul className="flex w-full items-center justify-evenly">
        {MENU.map((menuItem) => (
          <li key={menuItem.id}>
            <Link
              href={menuItem.to}
              className={`hover:bg-vina-yellow-dark hover:dark:bg-vina-purple-dark p-1 md:p-1.5 border-b-2 ${
                router?.pathname === menuItem.to
                  ? 'border-vina-orange-medium'
                  : 'border-transparent'
              }`}
            >
              {menuItem.name}
            </Link>
          </li>
        ))}
      </ul>
      <ThemeSelector
        lang={lang}
        langChange={langChange}
        theme={theme}
        themeSet={themeSet}
      />
    </nav>
  );
};

const MobileNav = ({
  onSelectProp,
  theme,
  themeSet,
  lang,
  langChange,
}: {
  theme: string;
  themeSet: Function;
  onSelectProp?: Function;
  lang: string;
  langChange: Function;
}) => {
  const router = useRouter();
  const onSelection = (route: string) => {
    if (onSelectProp) onSelectProp();
    router?.push(route);
  };
  return (
    <div className="absolute right-6 top-6 shadow-lg theme-secondary w-60 px-8 py-4 rounded z-20">
      <nav className="w-full flex flex-col items-center">
        <ul className="flex flex-col w-full items-center justify-start">
          <button
            onClick={() => onSelection('/')}
            key="homepage"
            className={`hover:bg-vina-yellow-medium hover:dark:bg-vina-purple-medium text-center my-2 w-full py-1.5 border-b-2 ${
              router?.pathname === '/'
                ? 'border-vina-orange-medium'
                : 'border-transparent'
            }`}
          >
            Home
          </button>
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
        <ThemeSelector
          lang={lang}
          langChange={langChange}
          theme={theme}
          themeSet={themeSet}
        />
      </nav>
    </div>
  );
};
interface NavProps {
  lang: string;
  langChange: Function;
  viewPort?: string;
  theme: string;
  themeSet: Function;
  onSelectProp?: Function;
}

const Nav = (props: NavProps) => {
  const { theme, themeSet, onSelectProp } = props;
  if (props.viewPort === 'mobile')
    return (
      <MobileNav
        lang={props.lang}
        langChange={props.langChange}
        theme={theme}
        themeSet={themeSet}
        onSelectProp={onSelectProp}
      />
    );
  else
    return (
      <DesktopNav
        lang={props.lang}
        langChange={props.langChange}
        theme={theme}
        themeSet={themeSet}
      />
    );
};

export default Nav;
