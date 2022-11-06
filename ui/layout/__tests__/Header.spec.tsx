import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header/Header';

describe('Header Component', () => {
  it('should render', () => {
    const { baseElement } = render(<Header></Header>);
    expect(baseElement).toBeDefined();
  });

  it('should switch theme', () => {
    render(<Header></Header>);
    const themeSelector = screen.getByLabelText('Theme Selector');
    fireEvent.click(themeSelector);

    const sunButton = screen.getByTestId('svg_sun');

    expect(sunButton).toBeInTheDocument();
  });

  it('should open and close mobile menu', () => {
    render(<Header></Header>);

    const burguer = screen.getAllByRole('button').at(-1);
    fireEvent.click(burguer as Node);
    const mobileMenuElement = screen
      .getAllByText('Encuentra tu Iglesia')
      .at(-1);

    expect(mobileMenuElement).toBeInTheDocument();

    fireEvent.click(mobileMenuElement as Node);
    const listOfMenuElements = screen.getAllByText(
      'Encuentra tu Iglesia'
    ).length;

    expect(listOfMenuElements).toBe(1);
  });
});
