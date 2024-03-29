import styled from 'styled-components';
import { BsCheck2Circle } from 'react-icons/bs';
import ConsumerUnitImage from '../assets/consumer_unit.webp';
import { motion } from 'framer-motion';
import { fade } from '../animation';
import { useScroll } from './useScroll';

const ChooseUsSection = () => {
  const [element, controls] = useScroll();

  return (
    <StyledChooseSection
      ref={element}
      animate={controls}
      initial="hidden"
      variants={fade}
      className="container"
    >
      <div className="choose-img">
        <img src={ConsumerUnitImage} alt="" />
      </div>
      <ChooseContent>
        <h2>Why Choose Us?</h2>
        <p>We look forward to working with you.</p>
        <div className="choose-info">
          <div className="item">
            <BsCheck2Circle size={30} />
            <h3>
              Over 10 years experience as an electrical contractor around the
              North West.
            </h3>
          </div>
          <div className="item">
            <BsCheck2Circle size={30} />
            <h3>
              Efficient and friendly service, always striving to achieve 100%
              customer satisfaction.
            </h3>
          </div>
          <div className="item">
            <BsCheck2Circle size={30} />
            <h3>
              All our electricians have been trained to the latest British
              Standards
            </h3>
          </div>
          <div className="item">
            <BsCheck2Circle size={30} />
            <h3>We provide services to both domestic and commercial clients</h3>
          </div>
        </div>
      </ChooseContent>
    </StyledChooseSection>
  );
};

const StyledChooseSection = styled(motion.section)`
  display: flex;
  gap: 3rem;
  padding-top: 4.2rem;
  padding-bottom: 4.2rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  .choose-img {
    flex: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
  }
`;

const ChooseContent = styled.div`
  flex: 1;
  padding: 2rem 0;

  h2 {
    font-size: 3rem;
    margin-bottom: 1.6rem;
    text-align: center;
  }

  p {
    margin-bottom: 2.6rem;
    font-size: 2.4rem;
    text-align: center;
  }

  .choose-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .item {
      display: flex;
      align-items: center;
      color: white;
      gap: 1rem;

      background-color: var(--primary);
      color: var(--body-copy);
      border-radius: 6px;
      padding: 2.4rem;
      /* font-size: 2rem; */

      &:hover {
        background-color: var(--yellow-shade);
      }
    }
  }
`;

export default ChooseUsSection;
