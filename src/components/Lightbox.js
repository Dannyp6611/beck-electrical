import styled from 'styled-components';
import { motion } from 'framer-motion';

const Lightbox = ({ img, setSelectedImage }) => {
  const disableLightbox = (e) => {
    if (e.target.classList.contains('lightbox__img')) {
      return;
    }
    setSelectedImage(null);
  };

  return (
    <StyledBackdrop onClick={disableLightbox}>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="lightbox__img"
        src={img}
        alt="lightbox image"
      />
    </StyledBackdrop>
  );
};

const StyledBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;

  img {
    position: absolute;
    border-radius: 8px;
    width: 60rem;
    object-fit: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

export default Lightbox;
