import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { BsArrowUpRight } from 'react-icons/bs';

const images = ['hero1', 'hero2', 'hero3', 'hero4'];

const Hero = () => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[currentImageIdx]);

  useEffect(() => {
    const currentImageInterval = setInterval(() => {
      setCurrentImageIdx((idx) => {
        if (idx === images.length - 1) {
          return 0;
        } else {
          return idx + 1;
        }
      });
    }, 5000);

    return () => {
      clearInterval(currentImageInterval);
    };
  }, []);

  useEffect(() => {
    setCurrentImage(images[currentImageIdx]);
  }, [currentImageIdx]);

  return (
    <StyledHero>
      <div className="hero__img">
        <picture>
          <source
            srcSet={`../../tablet/${currentImage}.webp`}
            media="(max-width: 768px)"
            type="image/webp"
          />
          <img
            src={`../../desktop/${currentImage}.webp`}
            alt="gallery photos"
          />
        </picture>

        <div className="overlay"></div>
        <div className="hero-content-box">
          <h1>
            Beck Electrical Residential & Commercial Services
            <span className="dot"></span>
          </h1>
          <p>
            Beck Electrical Services is based in Preston and was established in
            2011. We cover the North West area.
          </p>
          <div className="buttons-container">
            <Button>
              <span>contact now</span>
              <BsArrowUpRight />
            </Button>
            <Button isSecondary={true}>
              <span>see work</span>
              <BsArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  .hero__img {
    position: relative;
    height: 70vh;

    .hero-content-box {
      position: absolute;
      width: 80%;
      max-width: 70rem;
      top: 50%;
      left: 50%;
      color: #fff;
      transform: translate(-50%, -50%);
      text-align: center;

      h1 {
        font-size: 4rem;
        margin-bottom: 1.6rem;
        position: relative;

        span.dot {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background-color: var(--primary);
        }

        @media only screen and (max-width: 768px) {
          font-size: 3.2rem;
        }
      }
      p {
        font-weight: 500;
        font-size: 2rem;
        @media only screen and (max-width: 768px) {
          font-size: 1.6rem;
        }
      }

      .buttons-container {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 2.4rem;
      }
    }

    @media only screen and (max-width: 768px) {
      height: 60vh;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(
        to bottom right,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.7)
      );
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }
`;

export default Hero;
