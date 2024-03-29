import styled from 'styled-components';
import { useState } from 'react';
import Lightbox from './Lightbox';
import galleryImage1 from '../assets/gallery1.webp';
import galleryImage2 from '../assets/gallery2.webp';
import galleryImage3 from '../assets/gallery3.webp';
import galleryImage4 from '../assets/gallery4.webp';
import galleryImage5 from '../assets/gallery5.webp';
import galleryImage6 from '../assets/gallery6.webp';
import galleryImage7 from '../assets/gallery7.webp';
import galleryImage8 from '../assets/gallery8.webp';
import galleryImage9 from '../assets/gallery9.webp';
import { useEffect } from 'react';

const images = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6,
  galleryImage7,
  galleryImage8,
  galleryImage9,
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <StyledGallerySection id="gallery">
        <div className="container">
          <div className="heading">
            <h2>Our Work</h2>
          </div>
          <GalleryGrid>
            {images.map((image, idx) => (
              <div
                className="gallery-img"
                key={idx}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt="completed work" />
              </div>
            ))}
          </GalleryGrid>
        </div>
      </StyledGallerySection>
      {selectedImage && windowWidth >= 1000 && (
        <Lightbox setSelectedImage={setSelectedImage} img={selectedImage} />
      )}
    </>
  );
};

const StyledGallerySection = styled.section`
  padding: 4.6rem 0;
  background-color: #eee;

  .heading {
    display: flex;
    gap: 0.2rem;
    align-items: baseline;
    margin-bottom: 2.6rem;

    h2 {
      font-size: 3rem;
      color: var(--body-copy);
    }
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  /* display: flex;
  flex-wrap: wrap; */

  @media only screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  .gallery-img {
    transition: all 0.2s ease;
    height: 25rem;

    @media only screen and (min-width: 1289px) {
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      }
    }

    img {
      max-width: 100%;
      min-width: 100%;
      overflow: hidden;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
  }
`;

export default GallerySection;
