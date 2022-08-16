import servicesImage from '../assets/services_image.jpg';
import styled from 'styled-components';
import servicesKitchen from '../assets/services_kitchen.jpg';
import servicesOutdoor from '../assets/services_outdoor.jpg';
import servicesBathroom from '../assets/services_bathroom.jpg';

const ServicesSection = () => {
  return (
    <StyledServices>
      <div className="services__content">
        <h2>Services</h2>
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
        <img src={servicesImage} alt="" />
      </div>
    </StyledServices>
  );
};

const StyledServices = styled.section`
  display: flex;

  .services__content {
    h2 {
      font-size: 4rem;
      color: var(--primary);
      margin-bottom: 2.6rem;
      padding-bottom: 0.5rem;

      &::after {
        content: '';
        width: 25rem;
        height: 3px;
        display: block;
        background-color: var(--yellow-shade);
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
    overflow: hidden;

    @media only screen and (max-width: 1300px) {
      display: none;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default ServicesSection;
