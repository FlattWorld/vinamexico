import { fireEvent, render, screen } from '@testing-library/react';
import ThemeSelector from '../Header/components/ThemeSelector';

describe('ThemeSelector Component', () => {
  it('should render', () => {
    const spy = jest.fn();
    const { baseElement } = render(
      <ThemeSelector
        lang="es"
        langChange={() => null}
        theme="light"
        themeSet={spy}
      ></ThemeSelector>
    );
    expect(baseElement).toBeDefined();
    const button = screen.getAllByRole('button')[2];
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should render on dark mode', () => {
    const spy = jest.fn();
    const { baseElement } = render(
      <ThemeSelector
        lang="es"
        langChange={() => null}
        theme="dark"
        themeSet={spy}
      ></ThemeSelector>
    );
    expect(baseElement).toBeDefined();
    const button = screen.getAllByRole('button')[2];
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(spy).toHaveBeenCalled();
  });
  it('should change language ES to EN', () => {
    let lang = 'ES';
    const switchLang = (langToSwitch: string) => {
      lang = langToSwitch;
    };
    const { baseElement } = render(
      <ThemeSelector
        lang={lang}
        langChange={switchLang}
        theme="dark"
        themeSet={() => null}
      ></ThemeSelector>
    );
    expect(baseElement).toBeDefined();
    const buttonEn = screen.getAllByRole('button')[0];
    const buttonEs = screen.getAllByRole('button')[1];
    fireEvent.click(buttonEn);
    expect(lang).toBe('EN');
    fireEvent.click(buttonEs);
    expect(lang).toBe('ES');
  });
  it('should change language EN to ES', () => {
    let lang = 'EN';
    const switchLang = (langToSwitch: string) => {
      lang = langToSwitch;
    };
    const { baseElement } = render(
      <ThemeSelector
        lang={lang}
        langChange={switchLang}
        theme="dark"
        themeSet={() => null}
      ></ThemeSelector>
    );
    expect(baseElement).toBeDefined();
    const buttonEn = screen.getAllByRole('button')[0];
    const buttonEs = screen.getAllByRole('button')[1];
    fireEvent.click(buttonEs);
    expect(lang).toBe('ES');
    fireEvent.click(buttonEn);
    expect(lang).toBe('EN');
  });
});
