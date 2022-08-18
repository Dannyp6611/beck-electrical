import servicesImage from '../assets/services_image.jpg';
import styled from 'styled-components';
import servicesKitchen from '../assets/services_kitchen.jpg';
import servicesOutdoor from '../assets/services_outdoor.jpg';
import servicesBathroom from '../assets/services_bathroom.jpg';
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
      <div className="services__content">
        <div className="heading">
          <h2>Services</h2>
          <span className="dot"></span>
        </div>
        <ul>
          <li>
            <img src={servicesKitchen} alt="" />
            <h4>Kitchen Electrics</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ab
              at eum alias enim voluptas! Eius sapiente eveniet aliquid quo.
            </p>
          </li>
          <li>
            <img src={servicesOutdoor} alt="" />
            <h4>Outdoor Lighting</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ab
              at eum alias enim voluptas! Eius sapiente eveniet aliquid quo.
            </p>
          </li>
          <li>
            <img src="https://via.placeholder.com/150" alt="" />
            <h4>Electrical Inspections</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ab
              at eum alias enim voluptas! Eius sapiente eveniet aliquid quo.
            </p>
          </li>
          <li>
            <img src={servicesBathroom} alt="" />
            <h4>Bathroom Electrics</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ab
              at eum alias enim voluptas! Eius sapiente eveniet aliquid quo.
            </p>
          </li>
        </ul>
      </div>
      {/* services image */}
      <div className="services__image">
        <video autoPlay loop muted>
          <source src={lightsVideo} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </StyledServices>
  );
};

const StyledServices = styled(motion.section)`
  display: flex;

  @media only screen and (max-width: 1140px) {
    flex-direction: column-reverse;
  }

  .services__content {
    .heading {
      display: flex;
      gap: 0.2rem;
      align-items: baseline;
      margin-bottom: 2.6rem;

      h2 {
        font-size: 4rem;
        color: var(--primary);
      }

      .dot {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: var(--body-copy);
      }
    }

    flex: 1;
    padding: 4rem;

    ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;

      @media only screen and (max-width: 1300px) {
        gap: 4rem;
      }

      @media only screen and (max-width: 940px) {
        grid-template-columns: 1fr;
      }
      li {
        @media only screen and (max-width: 940px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          p {
            max-width: 50rem;
          }
        }

        img {
          width: 25rem;
          height: 25rem;
          border-radius: 16px;
        }
        h4 {
          font-size: 2.6rem;
          color: var(--primary);
          margin-bottom: 1.2rem;
        }
      }
    }
  }

  .services__image {
    flex-basis: 40%;
    min-height: 300px;
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
