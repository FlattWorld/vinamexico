import { Container } from 'Components';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { safeClientFunction } from 'utils/clientSideFunctions';

const ArrowIcon = ({
  extraStyles,
  size,
}: {
  extraStyles: string;
  size: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-${size} h-${size} ${extraStyles} btn-primary box-content p-1 `}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
    />
  </svg>
);

const Carousel = ({
  children,
  title,
  secondStep = 5,
}: {
  children: ReactNode[];
  title: string;
  secondStep?: number;
}) => {
  if (secondStep < 1) secondStep = 1;
  const [currentPost, currentPostSet] = useState(0);
  const [step, stepSet] = useState(0);
  const list = useRef<HTMLUListElement>(null);

  const changePost = (stepChange: number) => {
    const stepCalculator = safeClientFunction(() => window.innerWidth);
    stepSet(33.33);
    if (stepCalculator < 1280) stepSet(50);
    if (stepCalculator < 1024) stepSet(100);

    const lasElementIdentifier = step === 33.33 ? 4 : step == 50 ? 3 : 2;
    if (
      stepChange > 0 &&
      currentPost > children.length - lasElementIdentifier
    ) {
      currentPostSet(0);
      return;
    }

    if (stepChange < 0 && currentPost < 1) return;
    currentPostSet(currentPost + stepChange);
  };

  useEffect(() => {
    if (list.current !== null) {
      list.current.style.transform = `translate(-${currentPost * step}%)`;
    }
    const int = setInterval(() => {
      changePost(1);
    }, secondStep * 1000);
    return () => clearInterval(int);
  }, [currentPost]);

  useEffect(() => {
    addEventListener('resize', () => {
      currentPostSet(0);
    });
  }, []);

  return (
    <Container extraStyles="flex-col">
      <h2
        className="text-5xl text-center font-bold my-20"
        data-testid={`test_id_${currentPost}`}
      >
        {title}
      </h2>
      <div className="flex w-full justify-between relative px-0 overflow-hidden">
        <button
          aria-label="previous-post"
          onClick={() => changePost(-1)}
          className="absolute top-1/3 -left-0 z-20"
        >
          <ArrowIcon size="8" extraStyles="" />
        </button>
        <ul
          ref={list}
          className={`flex w-full transform transition-transform justify-between ease-out duration-700`}
        >
          {children}
        </ul>
        <button
          aria-label="next-post"
          onClick={() => changePost(1)}
          className="absolute top-1/3 -right-0 z-20"
        >
          <ArrowIcon size="8" extraStyles="transform rotate-180" />
        </button>
      </div>
    </Container>
  );
};
export default Carousel;
