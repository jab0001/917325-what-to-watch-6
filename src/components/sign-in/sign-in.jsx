import React from 'react';
import Logo from '../logo/logo';
import Copyright from '../copyright/copyright';

const SignIn = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <h1 className="page-title user-page__title">Sign in</h1>
        <Logo></Logo>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <footer className="page-footer">
        <Logo className="logo__link--light">
          <Copyright />
        </Logo>
      </footer>
    </div>
  );
};

export default SignIn;
