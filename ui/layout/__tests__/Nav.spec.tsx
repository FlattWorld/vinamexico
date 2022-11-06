import { fireEvent, render, screen } from '@testing-library/react';
import Nav from '../Header/components/Nav';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/eventos',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe('Nav Component', () => {
  it('should render desktop view correctly', () => {
    const themeSet = jest.fn();
    const { baseElement } = render(
      <Nav theme="light" themeSet={themeSet}></Nav>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(themeSet).toBeCalledTimes(1);
    expect(baseElement).toBeDefined();
  });

  it('should render mobile view correctly', () => {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter');
    useRouter.mockImplementation(() => ({
      route: '/',
      pathname: '/eventos',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }));
    const themeSet = jest.fn();
    const onSelectProp = jest.fn();
    render(
      <Nav
        theme="light"
        themeSet={themeSet}
        viewPort="mobile"
        onSelectProp={onSelectProp}
      ></Nav>
    );

    const buttons = screen.getAllByRole('button');
    const pageSelector = buttons.at(0);
    const themeSelector = buttons.at(-1);

    fireEvent.click(themeSelector as Node);
    fireEvent.click(pageSelector as Node);

    expect(themeSet).toHaveBeenCalledTimes(1);
    expect(onSelectProp).toHaveBeenCalledTimes(1);
  });
  it('should render mobile view and navigate correctly', () => {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter');
    useRouter.mockImplementation(() => ({
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }));
    const themeSet = jest.fn();
    const onSelectProp = jest.fn();
    render(
      <Nav
        theme="light"
        themeSet={themeSet}
        viewPort="mobile"
        onSelectProp={onSelectProp}
      ></Nav>
    );

    const buttons = screen.getAllByRole('button');
    const pageSelector = buttons.at(1);
    const themeSelector = buttons.at(-1);

    fireEvent.click(themeSelector as Node);
    fireEvent.click(pageSelector as Node);

    expect(themeSet).toHaveBeenCalledTimes(1);
    expect(onSelectProp).toHaveBeenCalledTimes(1);
    expect(useRouter).toBeCalled();
  });
});
