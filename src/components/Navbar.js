import styled from 'styled-components';
import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [heightScroll, setHeightScroll] = useState(window.scrollY);

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [mobileNav]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeightScroll(window.scrollY);
    });
  }, []);

  return (
    <>
      <StyledNav className={heightScroll >= 100 && 'activeNav'}>
        <div className="container">
          <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
            <img className="logo" src={logo} alt="steve beck electrical logo" />
          </Link>
          <ul className="nav__links">
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-45}
                duration={500}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul className="contact__information">
            <li>
              <a href="tel:07729880872">
                <AiFillPhone size={20} />
                07729880872
              </a>
            </li>
            <li>
              <a href="mailto:infobeckelectricalservices@gmail.com">
                <AiFillMail size={20} />
                infobeckelectricalservices@gmail.com
              </a>
            </li>
          </ul>
          <button
            onClick={() => setMobileNav(true)}
            aria-label="Hamburger Menu"
          >
            <FaBars className="hamburger-icon" size={30} />
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
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--primary);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &.activeNav {
    background-color: var(--yellow-shade);
  }

  button {
    color: #000;

    .hamburger-icon {
      color: #000;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 14rem;
    height: auto;
  }
  /* nav links */
  .nav__links {
    display: flex;
    list-style: none;
    gap: 1rem;

    li {
      cursor: pointer;
      position: relative;
      overflow: hidden;
      padding: 0.5rem 1rem;

      &::after,
      &::before {
        content: '';
        width: 100%;
        height: 3px;
        background-color: #fff;
        display: block;
        position: absolute;
        transition: transform 0.2s ease;
        transform-origin: middle;
        transform: translateX(110%);
      }

      &::before {
        top: 0;
        left: 0;
      }

      &::after {
        bottom: 0;
        left: 0;
      }

      &:hover::before,
      &:hover::after {
        transform: translate(0);
      }
    }

    a {
      font-size: inherit;
      text-decoration: none;
      color: currentColor;
      font-weight: 600;
      font-size: 1.8rem;

      @media only screen and (max-width: 1200px) {
        font-size: 1.6rem;
      }
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

      a {
        display: flex;
        align-items: center;
        color: currentColor;
        gap: 0.2rem;
      }

      @media only screen and (max-width: 1200px) {
        font-size: 1.4rem;
      }
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
