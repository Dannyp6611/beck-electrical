import styled from 'styled-components';
import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { useState } from 'react';
import MobileNav from './MobileNav';

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <StyledNav>
        <div className="container">
          <img className="logo" src={logo} alt="steve beck electrical logo" />
          <ul className="nav__links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Latest Projects</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <ul className="contact__information">
            <li>
              <AiFillPhone size={20} /> 07729 880872
            </li>
            <li>
              <AiFillMail size={20} /> info@beckelectricalservices.co.uk
            </li>
          </ul>
          <button onClick={() => setMobileNav(true)}>
            <FaBars size={30} />
          </button>
        </div>
      </StyledNav>
      {mobileNav && (
        <MobileNav setMobileNav={setMobileNav} mobileNav={mobileNav} />
      )}
    </>
  );
};

const StyledNav = styled.nav`
  background-color: var(--primary);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 16rem;
    height: auto;
  }
  /* nav links */
  .nav__links {
    display: flex;
    list-style: none;

    li {
      cursor: pointer;
      padding: 2.4rem;

      &:hover {
        background-color: var(--yellow-shade);
      }
    }

    a {
      font-size: 2rem;
      text-decoration: none;
      color: currentColor;
    }

    @media only screen and (max-width: 885px) {
      display: none;
    }
  }

  .contact__information {
    list-style: none;
    display: block;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    @media only screen and (max-width: 885px) {
      display: none;
    }
  }

  /* navbar toggle */
  button {
    pointer-events: none;
    display: none;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    @media only screen and (max-width: 885px) {
      display: block;
      pointer-events: auto;
    }
  }
`;

export default Navbar;
