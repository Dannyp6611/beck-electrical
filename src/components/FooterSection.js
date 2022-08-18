import styled from 'styled-components';
import logo from '../assets/logo.png';
import niceic from '../assets/niceic.png';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { Link } from 'react-scroll';

const FooterSection = () => {
  const date = new Date();

  return (
    <StyledFooter>
      <div className="container">
        <div className="footer-header">
          <a href="/">
            <img className="logo" src={logo} alt="Beck Electrical Logo" />
          </a>
          <img
            src={niceic}
            className="niceic-logo"
            alt="Niceic Approved Certificate"
          />
        </div>

        <div className="footer-grid">
          <ul className="contact-links">
            <li>
              <a href="tel:07534182671">
                <AiFillPhone size={20} />
                <strong>Phone: </strong>
                <span>07534182671</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@beckelectricalservices.co.uk">
                <AiFillMail size={20} />
                <strong>Mail: </strong>
                <span>info@beckelectricalservices.co.uk</span>
              </a>
            </li>
          </ul>

          <ul className="footer__links">
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About Us
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
                to="services"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>

          <p>
            Beck Electrical Services, <br /> 5 Badgers Croft, <br /> Ribbleton,{' '}
            <br /> Preston, <br /> PR2 6NW
          </p>

          <ul className="social__icons">
            <li>
              <a
                href="https://en-gb.facebook.com/beckelectricalservices/"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a>
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright-info">
          <small>
            Copyright &copy; {date.getFullYear()}{' '}
            <a href="/">Beck Electrical Services</a>, All Rights Reserved.
          </small>
          <small>
            Website Designed by{' '}
            <a href="https://dannyparker.netlify.app/" target="_blank">
              Danny Parker
            </a>
          </small>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: var(--primary);
  position: relative;
  font-weight: 600;

  @media only screen and (max-width: 750px) {
    padding: 1.2rem 0;
    margin-top: 3.2rem;
  }

  .footer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copyright-info {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding: 1.2rem 0;

    @media only screen and (max-width: 710px) {
      flex-direction: column;
      align-items: center;
      tex-talign: center;
    }
    a {
      color: #0000ee;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .footer__links {
    align-items: flex-start;

    li {
      padding-bottom: 0.2rem;
      overflow: hidden;
      position: relative;

      &::before {
        transition: transform 0.3s ease;
        content: '';
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        transform: translateX(100%);
        transform-origin: center;
        opacity: 0;
        height: 3px;
        background-color: #fff;
      }

      &:hover::before {
        transform: translate(0);
        opacity: 1;
      }
    }
  }

  .footer-grid {
    display: flex;
    justify-content: space-between;
    column-gap: 4rem;
    row-gap: 2rem;
    flex-wrap: wrap;
    margin-top: 1.2rem;

    @media only screen and (max-width: 750px) {
      flex-direction: column;
    }
  }

  a {
    color: currentColor;
    cursor: pointer;
  }

  .social__icons {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    li a {
      border: 1px solid #808080;
      color: #808080;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        color: #fff;
        border: 1px solid #fff;
      }
    }
  }

  .contact-links {
    li a {
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }
  }

  .logo,
  .niceic-logo {
    width: 15rem;
    height: auto;
  }

  @media only screen and (max-width: 750px) {
    .niceic-logo {
      position: absolute;
      top: 50%;
      right: 2rem;
      transform: translateY(-50%);
    }
  }
`;

export default FooterSection;
