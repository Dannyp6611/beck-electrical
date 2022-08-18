import styled from 'styled-components';
import useInput from '../hooks/useInput';

const ContactForm = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangedHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value) =>
    /^((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/.test(
      value
    )
  );

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== '');

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !enteredEmailIsValid ||
      !enteredNameIsValid ||
      !enteredPhoneIsValid ||
      !enteredMessageIsValid
    ) {
      return;
    }

    // handle form submission here

    resetNameInput();
    resetEmailInput();
    resetPhoneInput();
    resetMessageInput();
  };

  return (
    <StyledContactForm
      name="contact v2"
      method="POST"
      data-netlify="true"
      onSubmit="submit"
    >
      <FormControl className={`${nameInputHasError ? 'error' : ''}`}>
        <label htmlFor="name">Name</label>
        <input
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          type="text"
          name="name"
          placeholder="John Smith"
        />
      </FormControl>

      <FormControl className={`${phoneInputHasError ? 'error' : ''}`}>
        <label htmlFor="phone">Phone</label>
        <input
          value={enteredPhone}
          onChange={phoneChangedHandler}
          onBlur={phoneBlurHandler}
          type="text"
          name="phone"
          placeholder="07729 880872"
        />
      </FormControl>

      <FormControl
        className={`email-container ${emailInputHasError ? 'error' : ''}`}
      >
        <label htmlFor="email">Email address</label>
        <input
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          type="email"
          name="email"
          placeholder="name@email.com"
        />
      </FormControl>

      <FormControl
        className={`message-container ${messageInputHasError ? 'error' : ''} `}
      >
        <label htmlFor="message">How can we assist you?</label>
        <textarea
          value={enteredMessage}
          onChange={messageChangedHandler}
          onBlur={messageBlurHandler}
          name="message"
          placeholder="Type your message here"
        ></textarea>
      </FormControl>

      <button type="submit" disabled={!formIsValid}>
        Submit Message
      </button>
    </StyledContactForm>
  );
};

const StyledContactForm = styled.form`
  background: #fff;
  border-radius: 8px;
  padding: 5rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media only screen and (max-width: 610px) {
    grid-template-columns: 1fr;
  }

  button {
    grid-column: 1 / -1;
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

  &.error {
    label {
      color: #ff0033;
    }
    input,
    textarea {
      border: 1px solid #ff0033 !important;
    }
  }

  &.email-container,
  &.message-container {
    grid-column: 1 / -1;
  }

  input,
  textarea {
    padding: 1rem;
    font-size: 2rem;
    border-radius: 6px;
    outline: none;
    border: 1px solid #eee;
    color: #808080;

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
