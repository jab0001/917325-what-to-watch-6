import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const nameCss = `page-header ${props.className}`;
  return (
    <header className={nameCss}>
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
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Header;
