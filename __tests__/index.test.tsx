import Home from 'Pages/index';
import { render } from '@testing-library/react';

describe('Home Page', () => {
  it('should render correctly', () => {
    const { baseElement } = render(<Home></Home>);
    expect(baseElement).toBeDefined();
  });
});
