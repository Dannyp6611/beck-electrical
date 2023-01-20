import { AiOutlineClose, AiFillMail, AiFillPhone } from 'react-icons/ai';
import { MdElectricalServices } from 'react-icons/md';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const MobileNav = ({ setMobileNav, mobileNav }) => {
  return (
    <>
      <StyledOverlay onClick={() => setMobileNav(false)} />
      <StyledMobileNav
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        role="navigation"
        aria-label="Main menu"
      >
        <div className="nav-header">
          <Link to="hero">
            <img src={logo} alt="" onClick={() => setMobileNav(false)} />
          </Link>
          <button onClick={() => setMobileNav(false)} aria-controls="main-menu">
            <AiOutlineClose size={30} />
          </button>
        </div>
        <ul className="mobile__nav--links">
          <li onClick={() => setMobileNav(false)}>
            <Link
              onClick={() => setMobileNav(false)}
              to="about"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              <BsFillInfoCircleFill className="icon" />
              About
            </Link>
          </li>
          <li onClick={() => setMobileNav(false)}>
            <Link
              onClick={() => setMobileNav(false)}
              to="gallery"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              <MdElectricalServices className="icon" />
              Our Work
            </Link>
          </li>
          <li onClick={() => setMobileNav(false)}>
            <Link
              onClick={() => setMobileNav(false)}
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              <FaUserCircle className="icon" />
              Testimonials
            </Link>
          </li>
          <li onClick={() => setMobileNav(false)}>
            <Link
              onClick={() => setMobileNav(false)}
              to="contact"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              <AiFillMail className="icon" />
              Contact
            </Link>
          </li>
        </ul>

        <ul className="contact__information">
          <li>
            <a href="tel:07729880872">
              <AiFillPhone size={20} />
              <strong>07729880872</strong>
            </a>
          </li>
          <li>
            <a href="mailto:infobeckelectricalservices@gmail.com">
              <AiFillMail size={20} />
              <strong>infobeckelectricalservices@gmail.com</strong>
            </a>
          </li>
        </ul>
      </StyledMobileNav>
    </>
  );
};

const StyledOverlay = styled.div`
  position: fixed;
  z-index: 18;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
`;

const StyledMobileNav = styled(motion.nav)`
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80vw;
  max-width: 40rem;
  z-index: 20;
  padding-bottom: 3.2rem;

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;

    button {
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }

    img {
      width: 14rem;
      cursor: pointer;
    }
  }

  .mobile__nav--links {
    list-style: none;

    li a {
      padding: 3rem;
      font-size: 3rem;
      display: flex;
      align-items: center;
      gap: 1.2rem;

      .icon {
        color: var(--primary);
      }

      &:hover {
        background-color: #fff;
        cursor: pointer;
      }
    }
  }

  .contact__information {
    margin-top: auto;
    list-style-type: none;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    gap: 10px;

    li a {
      color: inherit;
      text-decoration: none;
      font-size: 3rem;
      display: flex;
      align-items: center;
      gap: 10px;

      @media only screen and (max-width: 960px) {
        font-size: 2rem;
      }

      @media only screen and (max-width: 376px) {
        font-size: 1.6rem;
      }
    }
  }
`;

export default MobileNav;
