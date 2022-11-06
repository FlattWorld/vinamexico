import { fireEvent, render, screen } from '@testing-library/react';
import ThemeSelector from '../ThemeSelector';

describe('ThemeSelector Component', () => {
  it('should render', () => {
    const spy = jest.fn();
    const { baseElement } = render(
      <ThemeSelector theme="light" themeSet={spy}></ThemeSelector>
    );
    expect(baseElement).toBeDefined();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(spy).toHaveBeenCalledTimes(3);
  });
});
