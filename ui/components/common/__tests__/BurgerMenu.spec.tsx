import { fireEvent, render, screen } from '@testing-library/react';
import BurgerMenu from '../BurgerMenu';

describe('BurgerMenu Component', () => {
  it('should render', () => {
    const spy = jest.fn();
    const { baseElement } = render(
      <BurgerMenu isMenuOpen={true} clickHandler={() => spy()}></BurgerMenu>
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(baseElement).toBeDefined();
    expect(spy).toBeCalledTimes(3);
  });
});
