import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const className = props.className || ``;

  return (
    <header className={`page-header ${className}`}>
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      {props.children}
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.func
};

export default Header;
