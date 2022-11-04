import { render } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  it('should render', () => {
    const { baseElement } = render(<Header></Header>);
    expect(baseElement).toBeDefined();
  });
});
