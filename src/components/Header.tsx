import React from 'react';
import StaticHeader from './StaticHeader';
import InteractiveHeader from './InteractiveHeader';

const Header: React.FC = () => {
  return (
    <>
      <StaticHeader />
      <InteractiveHeader />
    </>
  );
};

export default Header;
