import styled from 'styled-components';
import ContactForm from './ContactForm';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { ImLocation2 } from 'react-icons/im';

import { motion } from 'framer-motion';
import { fade } from '../animation';
import { useScroll } from './useScroll';

const ContactUsSection = () => {
  const [element, controls] = useScroll();

  return (
    <>
      <ContactSection
        id="contact"
        ref={element}
        animate={controls}
        variants={fade}
        initial="hidden"
      >
        <div className="contact__inner">
          <div className="heading">
            <h2>Get in touch</h2>
          </div>
          <p>
            Got an electrical problem and require our services? Please don't
            hesitate to get in touch, fill out all the required fields below and
            someone will get back to you shortly.
          </p>
        </div>
        <ContactFormWrapper>
          <ContactForm />

          <ul className="contact-list">
            <li>
              <a href="tel:07729880872">
                <BsFillTelephoneForwardFill className="icon" size={30} />
                <h3>Phone</h3>
                <strong>07729 880872</strong>
              </a>
            </li>
            <li>
              <a href="mailto:infobeckelectricalservices@gmail.com">
                <GrMail className="icon" size={30} />
                <h3>Email</h3>
                <strong>infobeckelectricalservices@gmail.com</strong>
              </a>
              <p></p>
            </li>
            <li>
              <ImLocation2 className="icon" size={30} />
              <h3>Location</h3>
              <strong>
                5 Badgers Croft, <br /> Ribbleton, Preston, PR2 6NW
              </strong>
            </li>
          </ul>
        </ContactFormWrapper>
      </ContactSection>
    </>
  );
};

const ContactFormWrapper = styled.div`
  max-width: 100rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  padding-bottom: 3.2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  .contact-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      gap: 1.6rem;
    }

    li {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      text-align: center;
      transition: all 0.2s ease;

      .icon {
        color: #000;
      }

      a {
        color: inherit;
      }

      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }
`;

const ContactSection = styled(motion.section)`
  width: 100%;
  padding: 1.2rem;
  background-color: var(--primary);

  .contact__inner {
    max-width: 100rem;
    padding: 3.2rem;
    margin: 0 auto;

    .heading {
      display: flex;
      gap: 0.2rem;
      align-items: baseline;
      margin-bottom: 2.6rem;

      @media only screen and (max-width: 768px) {
        justify-content: center;
      }

      h2 {
        font-size: 4rem;
        color: var(--body-copy);
      }

      .dot {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: #fff;
      }
    }

    p {
      font-size: 2rem;
      margin-bottom: 2.6rem;
      @media only screen and (max-width: 768px) {
        text-align: center;
      }
    }
  }
`;

export default ContactUsSection;
