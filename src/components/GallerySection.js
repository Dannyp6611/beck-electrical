import styled from 'styled-components';
import { useState } from 'react';
import Lightbox from './Lightbox';
import galleryImage1 from '../assets/gallery1.jpg';
import galleryImage2 from '../assets/gallery2.jpg';
import galleryImage3 from '../assets/gallery3.jpg';
import galleryImage4 from '../assets/gallery4.jpg';
import galleryImage5 from '../assets/gallery5.webp';
import galleryImage6 from '../assets/gallery6.jpg';
import galleryImage7 from '../assets/gallery7.jpg';
import galleryImage8 from '../assets/gallery8.jpg';
import galleryImage9 from '../assets/gallery9.jpg';

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
  const [showLightbox, setShowLightBox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
                <img src={image} alt={`gallery image ${idx + 1}`} />
              </div>
            ))}
          </GalleryGrid>
        </div>
      </StyledGallerySection>
      {selectedImage && (
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
      font-size: 4rem;
      color: var(--body-copy);
    }

    .dot {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: var(--primary);
    }
  }
`;

const GalleryGrid = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3.5rem; */
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  .gallery-img {
    flex: 1 0 30%;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.05);
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
