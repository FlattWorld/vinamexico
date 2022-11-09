import { render } from '@testing-library/react';
import Home from 'Pages/index';

describe('Home Page', () => {
  it('should render correctly', () => {
    const { baseElement } = render(
      <Home blogPosts={[]} errorsProp={{ blog: false }}></Home>
    );
    expect(baseElement).toBeDefined();
  });
});
