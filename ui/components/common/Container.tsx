import { ReactNode } from 'react';

const Container = ({
  children,
  extraStyles,
}: {
  children: ReactNode;
  extraStyles?: string;
}) => <div className={`container ${extraStyles}`}>{children}</div>;
export default Container;
