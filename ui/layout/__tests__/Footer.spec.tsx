import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('should render', () => {
    const { baseElement } = render(<Footer></Footer>);
    expect(baseElement).toBeDefined();
  });
});
