import { render, screen } from '@testing-library/react';
import LogoHeader from '../Header/components/LogoHeader';

describe('LogoHeader Component', () => {
  it('should render', () => {
    const { baseElement, rerender } = render(
      <LogoHeader theme="light"></LogoHeader>
    );
    expect(baseElement).toBeDefined();
    const logoLight = screen.getByAltText('logo');
    expect(logoLight).toBeInTheDocument();

    rerender(<LogoHeader theme="dark"></LogoHeader>);
    expect(baseElement).toBeDefined();
    const logoDark = screen.getByAltText('logo-dark');
    expect(logoDark).toBeInTheDocument();
  });
});
