import { AiOutlineClose, AiFillHome, AiFillMail } from 'react-icons/ai';
import { MdElectricalServices } from 'react-icons/md';
import { BsFillInfoCircleFill } from 'react-icons/bs';
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
      >
        <div className="nav-header">
          <img src={logo} alt="" onClick={() => setMobileNav(false)} />
          <button onClick={() => setMobileNav(false)}>
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
              about
            </Link>
          </li>
          <li onClick={() => setMobileNav(false)}>
            <Link
              onClick={() => setMobileNav(false)}
              to="services"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              <MdElectricalServices className="icon" />
              services
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
              contact
            </Link>
          </li>
        </ul>
      </StyledMobileNav>
    </>
  );
};

const StyledOverlay = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
`;

const StyledMobileNav = styled(motion.nav)`
  background: whitesmoke;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80vw;
  max-width: 40rem;
  z-index: 20;

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

  ul {
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
`;

export default MobileNav;
