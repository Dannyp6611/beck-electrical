import styled from 'styled-components';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

const center = { lat: 53.76907056264873, lng: -2.6566455174058987 };

const ContactSection = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <StyledContactSection>
      <div className="contact-container">
        <StyledBusinessInfo>
          <div className="heading">
            <h2>contact us</h2>
            <span className="dot"></span>
          </div>

          <h4>beck electrical services</h4>
          <address>
            5 Badgers Croft <br /> Ribbleton <br /> Preston <br /> PR2 6NW
          </address>
          <ul className="contact-links">
            <li>
              Mobile - <a href="tel:07729 880872">07729 880872</a>
            </li>
            <li>
              Telephone - <a href="tel:01772 792007">01772 792007</a>
            </li>
            <li>
              Email{' '}
              <strong>
                <a href="mailto:info@beckelectricalservices.co.uk">
                  info@beckelectricalservices.co.uk
                </a>
              </strong>
            </li>
          </ul>
          <ul className="social-icons">
            <li>
              <a href="#" target="_blank">
                <BsFacebook size={30} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <BsTwitter size={30} />
              </a>
            </li>
          </ul>
        </StyledBusinessInfo>
        <StyledGoogleMap>
          <GoogleMap
            zoom={19}
            center={center}
            mapContainerClassName="map-container"
          >
            <MarkerF
              position={{ lat: 53.76907056264873, lng: -2.6566455174058987 }}
            />
          </GoogleMap>
        </StyledGoogleMap>
      </div>
      {/* google map */}
    </StyledContactSection>
  );
};

const StyledGoogleMap = styled.div`
  flex: 1 0 30%;

  .map-container {
    width: 100%;
    height: 100%;
  }
`;

const StyledBusinessInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 30%;
  padding: 6rem;

  .heading {
    display: flex;
    align-items: baseline;

    .dot {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: var(--primary);
    }
  }

  .social-icons {
    display: flex;
    gap: 1.6rem;

    a {
      color: currentColor;
    }
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const StyledContactSection = styled.section`
  background-color: #f8fafb;
  height: 60vh;

  .contact-container {
    display: flex;
    height: 100%;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  h2,
  h4 {
    text-transform: uppercase;
  }
  h2 {
    font-size: 4rem;
  }
  h4 {
    font-size: 1.8rem;
    margin-bottom: 3.6rem;
  }

  ul {
    list-style: none;
  }
`;

export default ContactSection;
