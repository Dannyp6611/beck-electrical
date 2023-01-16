import styled from 'styled-components';
import useInput from '../hooks/useInput';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // handle form submission here
    emailjs
      .sendForm(
        'service_loyctdf',
        'template_2pqum2b',
        form.current,
        'tsCqOVQy0HDm2wElI'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm ref={form} onSubmit={handleSubmit}>
      <FormControl>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="from_name"
          placeholder="John Smith"
          required
        />
      </FormControl>

      {/* <FormControl className={`${phoneInputHasError ? 'error' : ''}`}>
        <label htmlFor="phone">Phone</label>
        <input
          value={enteredPhone}
          onChange={phoneChangedHandler}
          onBlur={phoneBlurHandler}
          type="text"
          id="phone"
          placeholder="07729 880872"
        />
      </FormControl> */}

      <FormControl className={`email-container`}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          name="reply_to"
          placeholder="name@email.com"
          required
        />
      </FormControl>

      <FormControl className={`message-container`}>
        <label htmlFor="message">How can we assist you?</label>
        <textarea
          name="message"
          placeholder="Type your message here, please leave a contact number."
          required
        ></textarea>
      </FormControl>

      <button type="submit">Submit Message</button>
    </StyledContactForm>
  );
};

const StyledContactForm = styled.form`
  background: #fff;
  border-radius: 8px;
  padding: 5rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media only screen and (max-width: 610px) {
    grid-template-columns: 1fr;
    padding: 3rem;
  }

  button {
    padding: 1.6rem;
    border-radius: 22px;
    background-color: var(--primary);
    color: var(--body-copy);
    font-size: 2rem;
    border: none;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      background-color: var(--yellow-shade);
    }
  }
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex: 1;

  &.error {
    label {
      color: #ff0033;
    }
    input,
    textarea {
      border: 1px solid #ff0033 !important;
    }
  }

  input,
  textarea {
    display: block;
    width: 100%;
    padding: 1rem;
    font-size: 2rem;
    border-radius: 6px;
    outline: none;
    border: 1px solid #eee;
    color: #808080;

    @media only screen and (max-width: 610px) {
      font-size: 1.6rem;
      padding: 0.7rem;
    }

    &::placeholder {
      color: #808080;
    }

    &:focus {
      border: 1px solid var(--primary);
    }
  }

  textarea {
    height: 15rem;
  }

  label {
    font-size: 2rem;
    position: relative;

    &::after {
      content: '*';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

export default ContactForm;
