import { render, screen } from '@testing-library/react';
import Container from '../Container';

describe('Container Component', () => {
  it('should render', () => {
    const { baseElement } = render(<Container>hello</Container>);
    expect(baseElement).toBeDefined();
    const result = screen.getByText('hello');
    expect(result).toBeInTheDocument();
  });
  it('should render JSX', () => {
    const menu = ['1Element', '2Element', '3Element', '4Element'];
    const Jotaesex = () => (
      <div>
        {menu.map((el) => (
          <h1 key={el}>{el}</h1>
        ))}
      </div>
    );

    const { baseElement } = render(
      <Container>
        <Jotaesex />
      </Container>
    );
    expect(baseElement).toBeDefined();
    const result = screen.getByText('3Element');
    expect(result).toBeInTheDocument();
  });
});
