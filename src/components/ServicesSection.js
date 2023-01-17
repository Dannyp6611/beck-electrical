import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade } from '../animation';
import { useScroll } from './useScroll';
import lightsVideo from '../assets/lights.mp4';

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <StyledServices
      variants={fade}
      ref={element}
      animate={controls}
      initial="hidden"
      id="services"
    >
      <div className="services__image">
        <video autoPlay loop muted playsInline>
          <source src={lightsVideo} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </StyledServices>
  );
};

const StyledServices = styled(motion.section)`
  .services__image {
    min-height: 400px;
    position: relative;

    video {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      max-width: 100%;
      min-width: 100%;
      max-height: 100%;
      min-height: 100%;
      object-fit: cover;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);
    }
  }
`;

export default ServicesSection;
