import styled from 'styled-components';
import Button from './Button';
import { motion } from 'framer-motion';
import { fade } from '../animation';
import { useScroll } from './useScroll';

const AboutSection = () => {
  const [element, controls] = useScroll();

  return (
    <StyledAboutSection
      ref={element}
      animate={controls}
      initial="hidden"
      variants={fade}
      className="container"
      id="about"
    >
      <StyledAboutInner>
        <div className="heading">
          <h2>A little bit about us</h2>
        </div>
        <p>
          Beck Electric Services are based in Preston and we established
          ourselves in 2011. <br /> We cover the North West area with a reliable
          emergency call out service, gaining an excellent reputation for our
          quality of work and value for money. All our electricians are fully
          qualified working on domestic, commercial and industrial premises and
          the company is also NICEIC registered.
        </p>
        <div className="button-container">
          <Button href="#contact">Get In Touch</Button>
        </div>
      </StyledAboutInner>
    </StyledAboutSection>
  );
};

const StyledAboutSection = styled(motion.section)`
  padding-top: 4.6rem;
  padding-bottom: 4.6rem;
`;

const StyledAboutInner = styled.div`
  max-width: 80rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  margin: 0 auto;
  .heading {
    h2 {
      font-size: 4rem;
      color: var(--body-copy);
      text-align: center;
      margin-bottom: 1.2rem;
    }
  }

  p {
    font-size: 1.9rem;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 2rem;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default AboutSection;
