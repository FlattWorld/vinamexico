import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { BlogPost, Carousel, EventPost } from 'Components';
import { TEMPblogPosts } from '../../Home/constants';

afterEach(cleanup);
describe('Carousel component', () => {
  it('should render correctly', () => {
    const { baseElement } = render(
      <Carousel secondStep={0} title="test">
        <BlogPost
          post={{
            id: 5,
            title: 'Number',
            description: 'Number',
            thumbnail: '/Number',
          }}
        />
        <BlogPost
          post={{
            id: 5,
            title: 'Number',
            description: 'Number',
            thumbnail: '/Number',
          }}
        />
      </Carousel>
    );
    expect(baseElement).toBeDefined();
  });
  it('should render correctly mock data', () => {
    const { baseElement } = render(
      <Carousel secondStep={0} title="test">
        {TEMPblogPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </Carousel>
    );
    expect(baseElement).toBeDefined();
  });

  it('should render events correctly', () => {
    const { baseElement } = render(
      <Carousel secondStep={0} title="test">
        <EventPost
          post={{
            id: 5,
            title: 'Number',
            description: 'Number',
            thumbnail: '/Number',
          }}
        />
        <EventPost
          post={{
            id: 5,
            title: 'Number',
            description: 'Number',
            thumbnail: '/Number',
          }}
        />
      </Carousel>
    );
    expect(baseElement).toBeDefined();
  });

  it('should change posts', () => {
    const { baseElement } = render(
      <Carousel title="test">
        <h1>Hello</h1>
        <span>World</span>
        <h1>Hello</h1>
        <span>World</span>
        <h1>Hello</h1>
      </Carousel>
    );
    const buttonMinus = screen.getAllByRole('button')[0];
    const buttonPlus = screen.getAllByRole('button')[1];
    fireEvent.click(buttonMinus);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonMinus);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonPlus);

    expect(baseElement).toBeDefined();
  });

  it('should manage multiple resize', async () => {
    const customGlobal: any = global;
    customGlobal.innerWidth = 500;
    render(
      <Carousel secondStep={1} title="test">
        <h1>Hello</h1>
        <span>World</span>
        <span>World</span>
        <span>World</span>
      </Carousel>
    );
    const buttonPlus = screen.getAllByRole('button')[1];

    customGlobal.innerWidth = 1050;
    fireEvent(customGlobal, new Event('resize'));
    fireEvent.click(buttonPlus);

    customGlobal.innerWidth = 1300;
    fireEvent(customGlobal, new Event('resize'));
    fireEvent.click(buttonPlus);

    customGlobal.innerWidth = 500;
    fireEvent(customGlobal, new Event('resize'));
    fireEvent.click(buttonPlus);

    expect(screen.queryByTestId('test_id_1')).toBeInTheDocument();
  });

  it('should manage timers', async () => {
    const customGlobal: any = global;
    customGlobal.innerWidth = 500;
    jest.useFakeTimers();
    render(
      <Carousel secondStep={1} title="test">
        <h1>Hello</h1>
        <span>World</span>
        <span>World</span>
        <span>World</span>
      </Carousel>
    );

    expect(screen.queryByTestId('test_id_0')).toBeInTheDocument();

    customGlobal.innerWidth = 1000;
    fireEvent(customGlobal, new Event('resize'));

    act(() => jest.advanceTimersByTime(1500));

    expect(screen.queryByTestId('test_id_1')).toBeInTheDocument();
  });
});
