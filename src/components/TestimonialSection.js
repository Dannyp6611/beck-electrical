import TestimonialData from '../data/TestimonialData';
import { useState } from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState(TestimonialData);
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);

  const changeTestimonial = (id) => {
    const testimonial = testimonials.find(
      (testimonial) => testimonial.id === id
    );
    setCurrentTestimonial(testimonial);
  };

  return (
    <StyledTestimonialSection>
      <div className="container">
        <h2>Testimonials</h2>
        <TestimonialsContainer>
          <UsersList>
            {testimonials.map((testimonial) => (
              <div
                className={`user-card ${
                  testimonial.id === currentTestimonial.id ? 'active' : ''
                }`}
                onClick={() => changeTestimonial(testimonial.id)}
                key={testimonial.id}
              >
                <img
                  className="user-card--img"
                  src={testimonial.imageUrl}
                  alt=""
                />
                <h4>{testimonial.user}</h4>
              </div>
            ))}
          </UsersList>
          <StyledCurrentTestimonial>
            <h3>{currentTestimonial?.heading}</h3>
            <span className="ratings">
              {[1, 2, 3, 4, 5].map((item) => (
                <AiFillStar key={item} />
              ))}
            </span>
            <p>{currentTestimonial?.text}</p>
          </StyledCurrentTestimonial>
        </TestimonialsContainer>
      </div>
    </StyledTestimonialSection>
  );
};

const StyledCurrentTestimonial = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    min-height: 25rem;
    max-height: 25rem;
  }

  h3 {
    margin-bottom: 1.2rem;
    font-size: 2.6rem;
  }

  span.ratings {
    display: block;
    margin-bottom: 2.4rem;
    color: #ffcd3c;
  }

  p {
    line-height: 1.6;
    font-size: 1.8rem;
  }
`;

const StyledTestimonialSection = styled.section`
  padding: 4.6rem 0;

  h2 {
    margin-bottom: 6.2rem;
    font-size: 3.6rem;
    color: var(--primary);

    &::after {
      content: '';
      width: 30rem;
      height: 3px;
      display: block;
      background-color: var(--primary);
    }
  }
`;

const TestimonialsContainer = styled.div`
  display: flex;
  gap: 5rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-basis: 25%;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: 100%;
  }

  .user-card {
    padding: 3rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
      flex: 1;
    }

    &--img {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      margin-right: 1.2rem;
    }

    &.active {
      -webkit-box-shadow: 1px 5px 22px 4px rgba(224, 224, 224, 0.73);
      box-shadow: 1px 5px 22px 4px rgba(224, 224, 224, 0.73);
    }
  }
`;

export default Testimonial;
