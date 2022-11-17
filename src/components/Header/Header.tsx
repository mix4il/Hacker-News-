import React, { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
  // any props that come into the component
}

const Header = ({ children }: HeaderProps) => {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <div className="header__wrapper">
            <div className="header__title">Hacker News</div>
            <div className="header__buttons">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
